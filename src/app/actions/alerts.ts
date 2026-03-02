/**
 * Server Actions para el Sistema de Alertas (Firebase version)
 */
'use server';

import { db } from '@/lib/firebase/admin';
import { revalidatePath } from 'next/cache';

// Tipos 
export type AlertChannel = 'WHATSAPP' | 'EMAIL' | 'BOTH';
export type AlertTrigger = 'DAYS_BEFORE_DUE' | 'ON_DUE_DATE' | 'DAYS_AFTER_DUE';
export type AlertStatus = 'PENDING' | 'SENT' | 'FAILED' | 'SKIPPED';

export interface AlertConfigInput {
    organizationId: string;
    name: string;
    trigger: AlertTrigger;
    daysOffset: number;
    channel: AlertChannel;
    messageTemplate: string;
    sendHour: number;
}

export interface AlertConfigWithStats extends AlertConfigInput {
    id: string;
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

export async function getAlertConfigs(organizationId: string): Promise<AlertConfigWithStats[]> {
    try {
        const configsSnap = await db.collection(`organizations/${organizationId}/alertConfigs`)
            .get();

        const configs: AlertConfigWithStats[] = [];

        configsSnap.forEach(doc => {
            const data = doc.data();

            configs.push({
                id: doc.id,
                organizationId,
                name: data.name,
                trigger: data.trigger as AlertTrigger,
                daysOffset: data.daysOffset,
                channel: data.channel as AlertChannel,
                messageTemplate: data.messageTemplate,
                sendHour: data.sendHour,
                isActive: data.isActive ?? true,
                sentCount: data.sentCount || 0,
                lastSentAt: data.lastSentAt?.toDate?.() || null,
            });
        });

        const triggerOrder = { 'DAYS_BEFORE_DUE': 0, 'ON_DUE_DATE': 1, 'DAYS_AFTER_DUE': 2 };
        configs.sort((a, b) => {
            if (triggerOrder[a.trigger] !== triggerOrder[b.trigger]) {
                return triggerOrder[a.trigger] - triggerOrder[b.trigger]
            }
            return a.daysOffset - b.daysOffset;
        })

        return configs;
    } catch (error) {
        console.error('Error en getAlertConfigs:', error);
        throw new Error('Error al obtener configuraciones de alertas');
    }
}

export async function getPendingAlerts(organizationId: string): Promise<PendingAlert[]> {
    try {
        const alertsSnap = await db.collection(`organizations/${organizationId}/alertLogs`)
            .where('status', '==', 'PENDING')
            .get();

        const alerts: PendingAlert[] = [];

        for (const doc of alertsSnap.docs) {
            let data = doc.data();
            alerts.push({
                id: doc.id,
                affiliateName: data.affiliateName || 'Usuario',
                affiliatePhone: data.affiliatePhone || '',
                affiliateEmail: data.affiliateEmail || null,
                unit: data.unit || 'O/A',
                invoiceConcept: data.invoiceConcept || 'N/A',
                invoiceAmount: Number(data.invoiceAmount || 0),
                invoiceDueDate: data.invoiceDueDate?.toDate?.() || new Date(),
                channel: data.channel,
                message: data.message,
                scheduledFor: data.scheduledFor?.toDate?.() || new Date(),
                alertConfigName: data.alertConfigName || 'Manual',
            });
        }

        alerts.sort((a, b) => a.scheduledFor.getTime() - b.scheduledFor.getTime());
        return alerts.slice(0, 50);
    } catch (error) {
        console.error('Error en getPendingAlerts:', error);
        throw new Error('Error al obtener alertas pendientes');
    }
}

export async function getAlertHistory(organizationId: string, limit = 20) {
    try {
        const alertsSnap = await db.collection(`organizations/${organizationId}/alertLogs`)
            .where('status', 'in', ['SENT', 'FAILED'])
            .get();

        const history: any[] = [];
        alertsSnap.forEach(doc => {
            let data = doc.data();
            history.push({
                id: doc.id,
                channel: data.channel,
                status: data.status,
                message: data.message,
                sentAt: data.sentAt?.toDate?.() || new Date(),
                affiliate: {
                    name: data.affiliateName,
                    unit: data.unit
                },
                invoice: {
                    concept: data.invoiceConcept,
                    amount: data.invoiceAmount
                }
            })
        });

        history.sort((a, b) => b.sentAt.getTime() - a.sentAt.getTime());
        return history.slice(0, limit);
    } catch (error) {
        console.error('Error en getAlertHistory:', error);
        throw new Error('Error al obtener historial de alertas');
    }
}

export async function createAlertConfig(data: AlertConfigInput) {
    try {
        const ref = db.collection(`organizations/${data.organizationId}/alertConfigs`).doc();
        await ref.set({
            ...data,
            isActive: true,
            sentCount: 0,
            lastSentAt: null,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        revalidatePath(`/organizaciones/${data.organizationId}/alertas`);
        return { success: true, data: { id: ref.id, ...data } };
    } catch (error) {
        console.error('Error en createAlertConfig:', error);
        return { success: false, error: 'Error al crear configuración de alerta' };
    }
}

export async function updateAlertConfig(organizationId: string, id: string, data: Partial<AlertConfigInput>) {
    try {
        await db.doc(`organizations/${organizationId}/alertConfigs/${id}`).update({
            ...data,
            updatedAt: new Date()
        });

        revalidatePath(`/organizaciones/${organizationId}/alertas`);
        return { success: true };
    } catch (error) {
        console.error('Error en updateAlertConfig:', error);
        return { success: false, error: 'Error al actualizar configuración de alerta' };
    }
}

export async function toggleAlertConfig(organizationId: string, id: string, isActive: boolean) {
    try {
        await db.doc(`organizations/${organizationId}/alertConfigs/${id}`).update({
            isActive,
            updatedAt: new Date()
        });

        revalidatePath(`/organizaciones/${organizationId}/alertas`);
        return { success: true };
    } catch (error) {
        console.error('Error en toggleAlertConfig:', error);
        return { success: false, error: 'Error al cambiar estado de alerta' };
    }
}

export async function deleteAlertConfig(organizationId: string, id: string) {
    try {
        await db.doc(`organizations/${organizationId}/alertConfigs/${id}`).delete();

        revalidatePath(`/organizaciones/${organizationId}/alertas`);
        return { success: true };
    } catch (error) {
        console.error('Error en deleteAlertConfig:', error);
        return { success: false, error: 'Error al eliminar configuración de alerta' };
    }
}

export async function generatePendingAlerts(organizationId: string) {
    return { success: true, alertsCreated: 0 };
}

export async function sendAlert(organizationId: string, alertId: string) {
    try {
        await db.doc(`organizations/${organizationId}/alertLogs/${alertId}`).update({
            status: 'SENT',
            sentAt: new Date(),
        });
        revalidatePath(`/organizaciones/${organizationId}/alertas`);
        return { success: true };
    } catch (error) {
        console.error('Error en sendAlert:', error);
        return { success: false, error: 'Error al enviar alerta' };
    }
}
