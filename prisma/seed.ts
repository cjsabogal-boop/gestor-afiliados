/**
 * GestorAfiliados - Seed de Datos de Prueba
 * 
 * Este script crea datos realistas para probar el MVP:
 * - 1 Organización (Edificio)
 * - 5 Afiliados (Vecinos) con nombres latinos
 * - Facturas con diferentes estados (vencidas, pendientes, pagadas)
 * 
 * Ejecutar con: npx prisma db seed
 */

import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, InvoiceStatus } from '@prisma/client';

// Prisma 7 con driver adapter de PostgreSQL
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Iniciando seed de GestorAfiliados...\n');

    // =====================================
    // 1. LIMPIAR DATOS EXISTENTES
    // =====================================
    console.log('🧹 Limpiando datos anteriores...');
    await prisma.payment.deleteMany();
    await prisma.invoice.deleteMany();
    await prisma.affiliate.deleteMany();
    await prisma.organization.deleteMany();

    // =====================================
    // 2. CREAR ORGANIZACIÓN
    // =====================================
    console.log('🏢 Creando organización...');
    const organization = await prisma.organization.create({
        data: {
            name: 'Edificio Torres del Parque',
            address: 'Calle 26 #5-30, Bogotá',
            phone: '+573001234567',
        },
    });
    console.log(`   ✅ ${organization.name} (ID: ${organization.id})`);

    // =====================================
    // 3. CREAR AFILIADOS (VECINOS)
    // =====================================
    console.log('\n👥 Creando afiliados...');

    const affiliatesData = [
        { name: 'Carlos Eduardo Martínez', phone: '+573001112233', unit: 'Apto 101' },
        { name: 'María Fernanda López', phone: '+573002223344', unit: 'Apto 202' },
        { name: 'Jorge Andrés Ramírez', phone: '+573003334455', unit: 'Apto 303' },
        { name: 'Ana Patricia Gómez', phone: '+573004445566', unit: 'Apto 404' },
        { name: 'Luis Fernando Torres', phone: '+573005556677', unit: 'Apto 505' },
    ];

    const affiliates = await Promise.all(
        affiliatesData.map(async (data) => {
            const affiliate = await prisma.affiliate.create({
                data: {
                    ...data,
                    organizationId: organization.id,
                },
            });
            console.log(`   ✅ ${affiliate.name} - ${affiliate.unit}`);
            return affiliate;
        })
    );

    // =====================================
    // 4. CREAR FACTURAS CON DIFERENTES ESTADOS
    // =====================================
    console.log('\n📄 Creando facturas...');

    const cuotaAdministracion = 450000; // $450,000 COP (Prisma convierte automáticamente a Decimal)
    const today = new Date();

    // Función helper para calcular fechas
    const addDays = (date: Date, days: number): Date => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    const invoicesData = [
        // 🔴 VENCIDAS (OVERDUE) - 2 facturas
        {
            affiliateId: affiliates[0].id, // Carlos - Apto 101
            concept: 'Cuota Administración - Octubre 2024',
            amount: cuotaAdministracion,
            dueDate: addDays(today, -45), // Venció hace 45 días
            status: InvoiceStatus.OVERDUE,
        },
        {
            affiliateId: affiliates[1].id, // María - Apto 202
            concept: 'Cuota Administración - Noviembre 2024',
            amount: cuotaAdministracion,
            dueDate: addDays(today, -15), // Venció hace 15 días
            status: InvoiceStatus.OVERDUE,
        },

        // 🟡 PENDIENTE (PENDING) - 1 factura
        {
            affiliateId: affiliates[2].id, // Jorge - Apto 303
            concept: 'Cuota Administración - Diciembre 2024',
            amount: cuotaAdministracion,
            dueDate: addDays(today, 10), // Vence en 10 días
            status: InvoiceStatus.PENDING,
        },

        // 🟢 PAGADAS (PAID) - 2 facturas
        {
            affiliateId: affiliates[3].id, // Ana - Apto 404
            concept: 'Cuota Administración - Diciembre 2024',
            amount: cuotaAdministracion,
            dueDate: addDays(today, 10),
            status: InvoiceStatus.PAID,
            paidAt: addDays(today, -5), // Pagó hace 5 días
        },
        {
            affiliateId: affiliates[4].id, // Luis - Apto 505
            concept: 'Cuota Administración - Diciembre 2024',
            amount: cuotaAdministracion,
            dueDate: addDays(today, 10),
            status: InvoiceStatus.PAID,
            paidAt: addDays(today, -2), // Pagó hace 2 días
        },
    ];

    for (const data of invoicesData) {
        const invoice = await prisma.invoice.create({
            data: {
                ...data,
                organizationId: organization.id,
            },
            include: {
                affiliate: true,
            },
        });

        const statusEmoji =
            invoice.status === 'OVERDUE' ? '🔴' :
                invoice.status === 'PENDING' ? '🟡' : '🟢';

        console.log(`   ${statusEmoji} ${invoice.affiliate.unit}: ${invoice.concept} - $${Number(invoice.amount).toLocaleString('es-CO')}`);

        // Si está pagada, crear el registro de pago
        if (invoice.status === 'PAID' && invoice.paidAt) {
            await prisma.payment.create({
                data: {
                    organizationId: organization.id,
                    affiliateId: invoice.affiliateId,
                    invoiceId: invoice.id,
                    amount: invoice.amount,
                    method: 'Transferencia',
                    notes: 'Pago automático de seed',
                },
            });
        }
    }

    // =====================================
    // 5. RESUMEN FINAL
    // =====================================
    console.log('\n' + '='.repeat(50));
    console.log('📊 RESUMEN DEL SEED:');
    console.log('='.repeat(50));
    console.log(`   🏢 Organizaciones: 1`);
    console.log(`   👥 Afiliados: ${affiliates.length}`);
    console.log(`   📄 Facturas Vencidas (🔴): 2`);
    console.log(`   📄 Facturas Pendientes (🟡): 1`);
    console.log(`   📄 Facturas Pagadas (🟢): 2`);
    console.log('='.repeat(50));
    console.log('\n✅ Seed completado exitosamente!\n');
}

main()
    .catch((e) => {
        console.error('❌ Error en el seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
    });
