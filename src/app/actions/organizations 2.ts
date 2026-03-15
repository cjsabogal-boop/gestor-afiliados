/**
 * Server Actions para Organizaciones - Backend Privilegiado
 */
'use server';

import { db } from '@/lib/firebase/admin';

export type OrganizationType = 'EDIFICIO' | 'CLUB' | 'FONDO' | 'OTRO';

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

export async function getOrganizations(): Promise<OrganizationSummary[]> {
    try {
        const orgsSnapshot = await db.collection('organizations')
            .where('isActive', '==', true)
            .get();

        const organizations: OrganizationSummary[] = [];

        for (const orgDoc of orgsSnapshot.docs) {
            const orgData = orgDoc.data();

            const affiliatesSnapshot = await db.collection(`organizations/${orgDoc.id}/affiliates`)
                .where('isActive', '==', true)
                .get();

            const invoicesSnapshot = await db.collection(`organizations/${orgDoc.id}/invoices`)
                .where('status', 'in', ['OVERDUE', 'PENDING'])
                .get();

            let overdueCount = 0;
            let pendingCount = 0;
            let totalDebt = 0;

            invoicesSnapshot.forEach(invDoc => {
                const inv = invDoc.data();
                const amount = Number(inv.amount) || 0;
                totalDebt += amount;

                if (inv.status === 'OVERDUE') overdueCount++;
                if (inv.status === 'PENDING') pendingCount++;
            });

            organizations.push({
                id: orgDoc.id,
                name: orgData.name,
                type: orgData.type as OrganizationType,
                address: orgData.address || null,
                phone: orgData.phone || null,
                email: orgData.email || null,
                isActive: orgData.isActive,
                affiliatesCount: affiliatesSnapshot.size,
                totalDebt,
                overdueCount,
                pendingCount,
                createdAt: orgData.createdAt ? orgData.createdAt.toDate() : new Date(),
            });
        }

        organizations.sort((a, b) => a.name.localeCompare(b.name));
        return organizations;
    } catch (error) {
        console.error('Error en getOrganizations:', error);
        throw new Error('Error al obtener organizaciones');
    }
}

export async function getOrganizationsStats(): Promise<OrganizationsStats> {
    try {
        const orgsSnapshot = await db.collection('organizations').get();

        let activeOrganizations = 0;
        let totalAffiliates = 0;
        let totalDebt = 0;

        for (const doc of orgsSnapshot.docs) {
            if (doc.data().isActive) activeOrganizations++;

            const affSnap = await db.collection(`organizations/${doc.id}/affiliates`)
                .where('isActive', '==', true).get();
            totalAffiliates += affSnap.size;

            const invSnap = await db.collection(`organizations/${doc.id}/invoices`)
                .where('status', 'in', ['OVERDUE', 'PENDING']).get();
            invSnap.forEach(i => {
                totalDebt += Number(i.data().amount) || 0;
            });
        }

        return {
            totalOrganizations: orgsSnapshot.size,
            activeOrganizations,
            totalAffiliates,
            totalDebt,
        };
    } catch (error) {
        console.error('Error en getOrganizationsStats:', error);
        throw new Error('Error al obtener estadísticas');
    }
}

export async function getOrganizationById(id: string) {
    try {
        const docRef = await db.collection('organizations').doc(id).get();
        if (!docRef.exists) return null;

        const data = docRef.data()!;
        return {
            id: docRef.id,
            name: data.name,
            type: data.type as OrganizationType,
            address: data.address || null,
            phone: data.phone || null,
            email: data.email || null,
            isActive: data.isActive,
            createdAt: data.createdAt?.toDate?.() || new Date()
        };
    } catch (error) {
        console.error('Error en getOrganizationById:', error);
        throw new Error('Error al obtener organización');
    }
}
