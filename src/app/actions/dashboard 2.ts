'use server';

import { db } from '@/lib/firebase/admin';

export type InvoiceStatus = 'PENDING' | 'OVERDUE' | 'PAID';

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

export async function getDashboardStats(): Promise<DashboardStats> {
    try {
        const orgsSnap = await db.collection('organizations').limit(1).get();
        if (orgsSnap.empty) {
            return {
                totalAffiliates: 0,
                totalOverdue: 0,
                totalPending: 0,
                totalPaid: 0,
                totalDebtAmount: 0,
            };
        }
        const orgId = orgsSnap.docs[0].id;

        const affiliatesSnap = await db.collection(`organizations/${orgId}/affiliates`).get();
        const invoicesSnap = await db.collection(`organizations/${orgId}/invoices`).get();

        const stats = { totalOverdue: 0, totalPending: 0, totalPaid: 0, totalDebtAmount: 0 };

        invoicesSnap.forEach((invDoc) => {
            const inv = invDoc.data();
            const amount = Number(inv.amount) || 0;
            if (inv.status === 'OVERDUE') {
                stats.totalOverdue++;
                stats.totalDebtAmount += amount;
            } else if (inv.status === 'PENDING') {
                stats.totalPending++;
                stats.totalDebtAmount += amount;
            } else {
                stats.totalPaid++;
            }
        });

        return {
            totalAffiliates: affiliatesSnap.size,
            ...stats,
        };
    } catch (error) {
        console.error('Error en getDashboardStats:', error);
        throw new Error('Error al obtener estadísticas');
    }
}

export async function getAffiliatesWithDebt(): Promise<AffiliateWithDebt[]> {
    try {
        const orgsSnap = await db.collection('organizations').limit(1).get();
        if (orgsSnap.empty) return [];
        const orgId = orgsSnap.docs[0].id;

        const affiliatesSnap = await db.collection(`organizations/${orgId}/affiliates`)
            .where('isActive', '==', true)
            .get();

        const invoicesSnap = await db.collection(`organizations/${orgId}/invoices`)
            .where('status', 'in', ['OVERDUE', 'PENDING'])
            .get();

        const invoicesByAffiliate: Record<string, any[]> = {};
        invoicesSnap.forEach(doc => {
            const data = doc.data();
            if (!invoicesByAffiliate[data.affiliateId]) {
                invoicesByAffiliate[data.affiliateId] = [];
            }
            invoicesByAffiliate[data.affiliateId].push({
                id: doc.id,
                concept: data.concept,
                amount: Number(data.amount),
                dueDate: data.dueDate?.toDate?.() || new Date(),
                status: data.status,
            });
        });

        const affiliatesWithDebt: AffiliateWithDebt[] = [];

        affiliatesSnap.forEach(doc => {
            const data = doc.data();
            const invoices = invoicesByAffiliate[doc.id] || [];

            const totalDebt = invoices.reduce((sum, inv) => sum + inv.amount, 0);

            let status: 'PAID' | 'PENDING' | 'OVERDUE' = 'PAID';
            if (invoices.some((inv) => inv.status === 'OVERDUE')) {
                status = 'OVERDUE';
            } else if (invoices.some((inv) => inv.status === 'PENDING')) {
                status = 'PENDING';
            }

            invoices.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

            affiliatesWithDebt.push({
                id: doc.id,
                name: data.name,
                phone: data.phone,
                unit: data.unit,
                totalDebt,
                status,
                invoices,
            });
        });

        const statusOrder = { OVERDUE: 0, PENDING: 1, PAID: 2 };
        affiliatesWithDebt.sort((a, b) => {
            if (statusOrder[a.status] !== statusOrder[b.status]) {
                return statusOrder[a.status] - statusOrder[b.status]
            }
            return a.name.localeCompare(b.name);
        });

        return affiliatesWithDebt;
    } catch (error) {
        console.error('Error en getAffiliatesWithDebt:', error);
        throw new Error('Error al obtener afiliados');
    }
}
