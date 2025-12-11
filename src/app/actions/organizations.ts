/**
 * Server Actions para Organizaciones
 * Vista del administrador del SaaS
 */
'use server';

import prisma from '@/lib/prisma';
import { OrganizationType } from '@prisma/client';

export interface OrganizationSummary {
    id: string;
    name: string;
    type: OrganizationType;
    address: string | null;
    phone: string | null;
    email: string | null;
    isActive: boolean;
    affiliatesCount: number;
    totalDebt: number;
    overdueCount: number;
    pendingCount: number;
    createdAt: Date;
}

export interface OrganizationsStats {
    totalOrganizations: number;
    activeOrganizations: number;
    totalAffiliates: number;
    totalDebt: number;
}

/**
 * Obtiene todas las organizaciones del administrador con resumen de cartera
 */
export async function getOrganizations(): Promise<OrganizationSummary[]> {
    try {
        const organizations = await prisma.organization.findMany({
            where: { isActive: true },
            include: {
                affiliates: {
                    where: { isActive: true },
                    select: { id: true },
                },
                invoices: {
                    where: { status: { in: ['OVERDUE', 'PENDING'] } },
                    select: {
                        status: true,
                        amount: true
                    },
                },
            },
            orderBy: { name: 'asc' },
        });

        return organizations.map((org) => {
            const overdueInvoices = org.invoices.filter(inv => inv.status === 'OVERDUE');
            const pendingInvoices = org.invoices.filter(inv => inv.status === 'PENDING');
            const totalDebt = org.invoices.reduce((sum, inv) => sum + Number(inv.amount), 0);

            return {
                id: org.id,
                name: org.name,
                type: org.type,
                address: org.address,
                phone: org.phone,
                email: org.email,
                isActive: org.isActive,
                affiliatesCount: org.affiliates.length,
                totalDebt,
                overdueCount: overdueInvoices.length,
                pendingCount: pendingInvoices.length,
                createdAt: org.createdAt,
            };
        });
    } catch (error) {
        console.error('Error en getOrganizations:', error);
        throw new Error('Error al obtener organizaciones');
    }
}

/**
 * Obtiene estadísticas generales del SaaS
 */
export async function getOrganizationsStats(): Promise<OrganizationsStats> {
    try {
        const [orgs, affiliates, invoices] = await Promise.all([
            prisma.organization.findMany({
                select: { id: true, isActive: true },
            }),
            prisma.affiliate.count({ where: { isActive: true } }),
            prisma.invoice.findMany({
                where: { status: { in: ['OVERDUE', 'PENDING'] } },
                select: { amount: true },
            }),
        ]);

        return {
            totalOrganizations: orgs.length,
            activeOrganizations: orgs.filter(o => o.isActive).length,
            totalAffiliates: affiliates,
            totalDebt: invoices.reduce((sum, inv) => sum + Number(inv.amount), 0),
        };
    } catch (error) {
        console.error('Error en getOrganizationsStats:', error);
        throw new Error('Error al obtener estadísticas');
    }
}

/**
 * Obtiene una organización por ID
 */
export async function getOrganizationById(id: string) {
    try {
        return await prisma.organization.findUnique({
            where: { id },
            include: {
                alertConfigs: {
                    where: { isActive: true },
                    orderBy: { trigger: 'asc' },
                },
            },
        });
    } catch (error) {
        console.error('Error en getOrganizationById:', error);
        throw new Error('Error al obtener organización');
    }
}
