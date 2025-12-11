/**
 * Server Actions para el Sistema de Alertas
 * Gestión de recordatorios automáticos por WhatsApp y Email
 */
'use server';

import prisma from '@/lib/prisma';
import { AlertChannel, AlertTrigger, AlertStatus } from '@prisma/client';
import { revalidatePath } from 'next/cache';

// =====================================
// TIPOS
// =====================================
export interface AlertConfigInput {
    organizationId: string;
    name: string;
    trigger: AlertTrigger;
    daysOffset: number;
    channel: AlertChannel;
    messageTemplate: string;
    sendHour: number;
}

export interface AlertConfigWithStats {
    id: string;
    name: string;
    trigger: AlertTrigger;
    daysOffset: number;
    channel: AlertChannel;
    messageTemplate: string;
    sendHour: number;
    isActive: boolean;
    sentCount: number;
    lastSentAt: Date | null;
}

export interface PendingAlert {
    id: string;
    affiliateName: string;
    affiliatePhone: string;
    affiliateEmail: string | null;
    unit: string;
    invoiceConcept: string;
    invoiceAmount: number;
    invoiceDueDate: Date;
    channel: AlertChannel;
    message: string;
    scheduledFor: Date;
    alertConfigName: string;
}

// =====================================
// CONSULTAS
// =====================================

/**
 * Obtiene las configuraciones de alertas de una organización
 */
export async function getAlertConfigs(organizationId: string): Promise<AlertConfigWithStats[]> {
    try {
        const configs = await prisma.alertConfig.findMany({
            where: { organizationId },
            include: {
                alertLogs: {
                    where: { status: 'SENT' },
                    select: { sentAt: true },
                    orderBy: { sentAt: 'desc' },
                    take: 1,
                },
                _count: {
                    select: { alertLogs: { where: { status: 'SENT' } } },
                },
            },
            orderBy: [
                { trigger: 'asc' },
                { daysOffset: 'asc' },
            ],
        });

        return configs.map((config) => ({
            id: config.id,
            name: config.name,
            trigger: config.trigger,
            daysOffset: config.daysOffset,
            channel: config.channel,
            messageTemplate: config.messageTemplate,
            sendHour: config.sendHour,
            isActive: config.isActive,
            sentCount: config._count.alertLogs,
            lastSentAt: config.alertLogs[0]?.sentAt || null,
        }));
    } catch (error) {
        console.error('Error en getAlertConfigs:', error);
        throw new Error('Error al obtener configuraciones de alertas');
    }
}

/**
 * Obtiene las alertas pendientes de envío
 */
export async function getPendingAlerts(organizationId: string): Promise<PendingAlert[]> {
    try {
        const alerts = await prisma.alertLog.findMany({
            where: {
                organizationId,
                status: 'PENDING',
                scheduledFor: { lte: new Date() },
            },
            include: {
                affiliate: true,
                invoice: true,
                alertConfig: true,
            },
            orderBy: { scheduledFor: 'asc' },
            take: 50,
        });

        return alerts.map((alert) => ({
            id: alert.id,
            affiliateName: alert.affiliate.name,
            affiliatePhone: alert.affiliate.phone,
            affiliateEmail: alert.affiliate.email,
            unit: alert.affiliate.unit,
            invoiceConcept: alert.invoice?.concept || 'N/A',
            invoiceAmount: Number(alert.invoice?.amount || 0),
            invoiceDueDate: alert.invoice?.dueDate || new Date(),
            channel: alert.channel,
            message: alert.message,
            scheduledFor: alert.scheduledFor,
            alertConfigName: alert.alertConfig?.name || 'Manual',
        }));
    } catch (error) {
        console.error('Error en getPendingAlerts:', error);
        throw new Error('Error al obtener alertas pendientes');
    }
}

/**
 * Obtiene el historial de alertas enviadas
 */
export async function getAlertHistory(organizationId: string, limit = 20) {
    try {
        return await prisma.alertLog.findMany({
            where: {
                organizationId,
                status: { in: ['SENT', 'FAILED'] },
            },
            include: {
                affiliate: { select: { name: true, unit: true } },
                invoice: { select: { concept: true, amount: true } },
            },
            orderBy: { sentAt: 'desc' },
            take: limit,
        });
    } catch (error) {
        console.error('Error en getAlertHistory:', error);
        throw new Error('Error al obtener historial de alertas');
    }
}

// =====================================
// MUTACIONES
// =====================================

/**
 * Crea una nueva configuración de alerta
 */
export async function createAlertConfig(data: AlertConfigInput) {
    try {
        const config = await prisma.alertConfig.create({
            data: {
                organizationId: data.organizationId,
                name: data.name,
                trigger: data.trigger,
                daysOffset: data.daysOffset,
                channel: data.channel,
                messageTemplate: data.messageTemplate,
                sendHour: data.sendHour,
            },
        });

        revalidatePath(`/organizaciones/${data.organizationId}/alertas`);
        return { success: true, data: config };
    } catch (error) {
        console.error('Error en createAlertConfig:', error);
        return { success: false, error: 'Error al crear configuración de alerta' };
    }
}

/**
 * Actualiza una configuración de alerta
 */
export async function updateAlertConfig(id: string, data: Partial<AlertConfigInput>) {
    try {
        const config = await prisma.alertConfig.update({
            where: { id },
            data,
        });

        revalidatePath(`/organizaciones/${config.organizationId}/alertas`);
        return { success: true, data: config };
    } catch (error) {
        console.error('Error en updateAlertConfig:', error);
        return { success: false, error: 'Error al actualizar configuración de alerta' };
    }
}

/**
 * Activa/Desactiva una configuración de alerta
 */
export async function toggleAlertConfig(id: string, isActive: boolean) {
    try {
        const config = await prisma.alertConfig.update({
            where: { id },
            data: { isActive },
        });

        revalidatePath(`/organizaciones/${config.organizationId}/alertas`);
        return { success: true };
    } catch (error) {
        console.error('Error en toggleAlertConfig:', error);
        return { success: false, error: 'Error al cambiar estado de alerta' };
    }
}

/**
 * Elimina una configuración de alerta
 */
export async function deleteAlertConfig(id: string) {
    try {
        const config = await prisma.alertConfig.delete({
            where: { id },
        });

        revalidatePath(`/organizaciones/${config.organizationId}/alertas`);
        return { success: true };
    } catch (error) {
        console.error('Error en deleteAlertConfig:', error);
        return { success: false, error: 'Error al eliminar configuración de alerta' };
    }
}

// =====================================
// PROCESAMIENTO DE ALERTAS
// =====================================

/**
 * Genera las alertas pendientes para una organización
 * Esta función debe ejecutarse periódicamente (cron job)
 */
export async function generatePendingAlerts(organizationId: string) {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Obtener configuraciones activas
        const configs = await prisma.alertConfig.findMany({
            where: { organizationId, isActive: true },
        });

        // Obtener facturas pendientes y vencidas
        const invoices = await prisma.invoice.findMany({
            where: {
                organizationId,
                status: { in: ['PENDING', 'OVERDUE'] },
            },
            include: {
                affiliate: true,
            },
        });

        let alertsCreated = 0;

        for (const config of configs) {
            for (const invoice of invoices) {
                // Calcular si aplica esta alerta
                const dueDate = new Date(invoice.dueDate);
                dueDate.setHours(0, 0, 0, 0);

                let scheduledDate: Date | null = null;

                switch (config.trigger) {
                    case 'DAYS_BEFORE_DUE':
                        const beforeDate = new Date(dueDate);
                        beforeDate.setDate(beforeDate.getDate() - config.daysOffset);
                        if (beforeDate.getTime() === today.getTime()) {
                            scheduledDate = beforeDate;
                        }
                        break;

                    case 'ON_DUE_DATE':
                        if (dueDate.getTime() === today.getTime()) {
                            scheduledDate = dueDate;
                        }
                        break;

                    case 'DAYS_AFTER_DUE':
                        const afterDate = new Date(dueDate);
                        afterDate.setDate(afterDate.getDate() + config.daysOffset);
                        if (afterDate.getTime() === today.getTime()) {
                            scheduledDate = afterDate;
                        }
                        break;
                }

                if (scheduledDate) {
                    // Verificar preferencias del afiliado
                    const affiliate = invoice.affiliate;
                    let channel = config.channel;

                    if (channel === 'BOTH') {
                        if (!affiliate.notifyByEmail && !affiliate.notifyByWhatsapp) continue;
                        if (!affiliate.notifyByEmail) channel = 'WHATSAPP';
                        if (!affiliate.notifyByWhatsapp) channel = 'EMAIL';
                    } else if (channel === 'EMAIL' && !affiliate.notifyByEmail) {
                        continue;
                    } else if (channel === 'WHATSAPP' && !affiliate.notifyByWhatsapp) {
                        continue;
                    }

                    // Generar mensaje personalizado
                    const message = config.messageTemplate
                        .replace('{nombre}', affiliate.name.split(' ')[0])
                        .replace('{unidad}', affiliate.unit)
                        .replace('{monto}', `$${Number(invoice.amount).toLocaleString('es-CO')}`)
                        .replace('{fecha}', dueDate.toLocaleDateString('es-CO'));

                    // Verificar si ya existe una alerta para esta combinación
                    const existingAlert = await prisma.alertLog.findFirst({
                        where: {
                            organizationId,
                            affiliateId: affiliate.id,
                            invoiceId: invoice.id,
                            alertConfigId: config.id,
                            scheduledFor: {
                                gte: today,
                                lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
                            },
                        },
                    });

                    if (!existingAlert) {
                        // Crear alerta pendiente
                        scheduledDate.setHours(config.sendHour, 0, 0, 0);

                        await prisma.alertLog.create({
                            data: {
                                organizationId,
                                affiliateId: affiliate.id,
                                invoiceId: invoice.id,
                                alertConfigId: config.id,
                                channel,
                                status: 'PENDING',
                                message,
                                scheduledFor: scheduledDate,
                            },
                        });

                        alertsCreated++;
                    }
                }
            }
        }

        return { success: true, alertsCreated };
    } catch (error) {
        console.error('Error en generatePendingAlerts:', error);
        return { success: false, error: 'Error al generar alertas' };
    }
}

/**
 * Simula el envío de una alerta (para demo)
 * En producción se integraría con WhatsApp Business API y un servicio de email
 */
export async function sendAlert(alertId: string) {
    try {
        const alert = await prisma.alertLog.findUnique({
            where: { id: alertId },
            include: { affiliate: true },
        });

        if (!alert) {
            return { success: false, error: 'Alerta no encontrada' };
        }

        // Simular envío (aquí iría la integración real)
        console.log(`📤 Enviando ${alert.channel} a ${alert.affiliate.name}: ${alert.message}`);

        // Marcar como enviada
        await prisma.alertLog.update({
            where: { id: alertId },
            data: {
                status: 'SENT',
                sentAt: new Date(),
            },
        });

        revalidatePath(`/organizaciones/${alert.organizationId}/alertas`);
        return { success: true };
    } catch (error) {
        console.error('Error en sendAlert:', error);

        // Marcar como fallida
        await prisma.alertLog.update({
            where: { id: alertId },
            data: {
                status: 'FAILED',
                errorMessage: String(error),
            },
        });

        return { success: false, error: 'Error al enviar alerta' };
    }
}
