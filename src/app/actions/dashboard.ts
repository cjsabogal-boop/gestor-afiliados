/**
 * Server Actions para el Dashboard de Afiliados
 * IMPORTANTE: Todas las consultas DEBEN filtrar por organizationId
 */
'use server';

import prisma from '@/lib/prisma';
import { InvoiceStatus } from '@prisma/client';

// Tipo para los datos del dashboard
export interface AffiliateWithDebt {
    id: string;
    name: string;
    phone: string;
    unit: string;
    totalDebt: number;
    status: 'PAID' | 'PENDING' | 'OVERDUE';
    invoices: {
        id: string;
        concept: string;
        amount: number;
        dueDate: Date;
        status: InvoiceStatus;
    }[];
}

export interface DashboardStats {
    totalAffiliates: number;
    totalOverdue: number;
    totalPending: number;
    totalPaid: number;
    totalDebtAmount: number;
}

/**
 * Obtiene el resumen del dashboard con estadísticas
 * TODO: Agregar filtro por organizationId cuando exista auth
 */
export async function getDashboardStats(): Promise<DashboardStats> {
    try {
        // Por ahora tomamos la primera organización (demo)
        // En producción: const orgId = session.orgId
        const org = await prisma.organization.findFirst();

        if (!org) {
            return {
                totalAffiliates: 0,
                totalOverdue: 0,
                totalPending: 0,
                totalPaid: 0,
                totalDebtAmount: 0,
            };
        }

        const [affiliates, invoices] = await Promise.all([
            prisma.affiliate.count({
                where: { organizationId: org.id },
            }),
            prisma.invoice.findMany({
                where: { organizationId: org.id },
                select: {
                    status: true,
                    amount: true,
                },
            }),
        ]);

        const stats = invoices.reduce(
            (acc, inv) => {
                const amount = Number(inv.amount);
                if (inv.status === 'OVERDUE') {
                    acc.totalOverdue++;
                    acc.totalDebtAmount += amount;
                } else if (inv.status === 'PENDING') {
                    acc.totalPending++;
                    acc.totalDebtAmount += amount;
                } else {
                    acc.totalPaid++;
                }
                return acc;
            },
            { totalOverdue: 0, totalPending: 0, totalPaid: 0, totalDebtAmount: 0 }
        );

        return {
            totalAffiliates: affiliates,
            ...stats,
        };
    } catch (error) {
        console.error('Error en getDashboardStats:', error);
        throw new Error('Error al obtener estadísticas');
    }
}

/**
 * Obtiene la lista de afiliados con sus deudas pendientes
 * Ordenados por: Vencidos primero, luego Pendientes, luego Pagados
 */
export async function getAffiliatesWithDebt(): Promise<AffiliateWithDebt[]> {
    try {
        // Por ahora tomamos la primera organización (demo)
        const org = await prisma.organization.findFirst();

        if (!org) {
            return [];
        }

        const affiliates = await prisma.affiliate.findMany({
            where: {
                organizationId: org.id,
                isActive: true,
            },
            include: {
                invoices: {
                    where: {
                        status: { in: ['OVERDUE', 'PENDING'] },
                    },
                    orderBy: {
                        dueDate: 'asc',
                    },
                },
            },
            orderBy: {
                name: 'asc',
            },
        });

        // Mapear y calcular totales
        const affiliatesWithDebt: AffiliateWithDebt[] = affiliates.map((aff) => {
            const totalDebt = aff.invoices.reduce(
                (sum, inv) => sum + Number(inv.amount),
                0
            );

            // Determinar estado general
            let status: 'PAID' | 'PENDING' | 'OVERDUE' = 'PAID';
            if (aff.invoices.some((inv) => inv.status === 'OVERDUE')) {
                status = 'OVERDUE';
            } else if (aff.invoices.some((inv) => inv.status === 'PENDING')) {
                status = 'PENDING';
            }

            return {
                id: aff.id,
                name: aff.name,
                phone: aff.phone,
                unit: aff.unit,
                totalDebt,
                status,
                invoices: aff.invoices.map((inv) => ({
                    id: inv.id,
                    concept: inv.concept,
                    amount: Number(inv.amount),
                    dueDate: inv.dueDate,
                    status: inv.status,
                })),
            };
        });

        // Ordenar: Vencidos > Pendientes > Al día
        const statusOrder = { OVERDUE: 0, PENDING: 1, PAID: 2 };
        affiliatesWithDebt.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

        return affiliatesWithDebt;
    } catch (error) {
        console.error('Error en getAffiliatesWithDebt:', error);
        throw new Error('Error al obtener afiliados');
    }
}
