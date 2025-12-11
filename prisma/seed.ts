/**
 * GestorAfiliados - Seed de Datos de Prueba Expandido
 * 
 * Incluye:
 * - 1 Admin (dueño del SaaS)
 * - 3 Organizaciones (Edificio, Club, Fondo)
 * - Afiliados con diferentes estados de deuda
 * - Configuración de alertas automáticas
 * 
 * Ejecutar con: npx prisma db seed
 */

import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import {
    PrismaClient,
    InvoiceStatus,
    OrganizationType,
    PaymentMethod,
    AlertChannel,
    AlertTrigger
} from '@prisma/client';

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
    await prisma.alertLog.deleteMany();
    await prisma.alertConfig.deleteMany();
    await prisma.payment.deleteMany();
    await prisma.invoice.deleteMany();
    await prisma.affiliate.deleteMany();
    await prisma.organization.deleteMany();
    await prisma.admin.deleteMany();

    // =====================================
    // 2. CREAR ADMIN
    // =====================================
    console.log('👤 Creando administrador...');
    const admin = await prisma.admin.create({
        data: {
            email: 'admin@gestorafiliados.co',
            name: 'Carlos Administrador',
            passwordHash: 'temporal_hash', // TODO: Implementar auth real
            phone: '+573001234567',
        },
    });
    console.log(`   ✅ ${admin.name} (${admin.email})`);

    // =====================================
    // 3. CREAR ORGANIZACIONES
    // =====================================
    console.log('\n🏢 Creando organizaciones...');

    const organizationsData = [
        {
            name: 'Edificio Torres del Parque',
            type: OrganizationType.EDIFICIO,
            address: 'Calle 26 #5-30, Bogotá',
            phone: '+573011111111',
            email: 'admin@torresdelparque.co',
        },
        {
            name: 'Club Social Los Arrayanes',
            type: OrganizationType.CLUB,
            address: 'Km 5 Vía La Calera',
            phone: '+573022222222',
            email: 'contacto@clubarrayanes.co',
        },
        {
            name: 'Fondo de Empleados TechCorp',
            type: OrganizationType.FONDO,
            address: 'Cra 7 #72-41 Piso 8',
            phone: '+573033333333',
            email: 'fondo@techcorp.co',
        },
    ];

    const organizations = await Promise.all(
        organizationsData.map(async (data) => {
            const org = await prisma.organization.create({
                data: {
                    ...data,
                    adminId: admin.id,
                },
            });
            const typeEmoji = data.type === 'EDIFICIO' ? '🏢' : data.type === 'CLUB' ? '⛳' : '💼';
            console.log(`   ${typeEmoji} ${org.name}`);
            return org;
        })
    );

    // =====================================
    // 4. CREAR AFILIADOS POR ORGANIZACIÓN
    // =====================================
    console.log('\n👥 Creando afiliados...');

    const edificio = organizations[0];
    const club = organizations[1];
    const fondo = organizations[2];

    // Afiliados del Edificio
    const edificioAffiliates = [
        { name: 'Carlos Eduardo Martínez', phone: '+573001112233', unit: 'Apto 101', email: 'carlos@email.com' },
        { name: 'María Fernanda López', phone: '+573002223344', unit: 'Apto 202', email: 'maria@email.com' },
        { name: 'Jorge Andrés Ramírez', phone: '+573003334455', unit: 'Apto 303', email: 'jorge@email.com' },
        { name: 'Ana Patricia Gómez', phone: '+573004445566', unit: 'Apto 404', email: 'ana@email.com' },
        { name: 'Luis Fernando Torres', phone: '+573005556677', unit: 'Apto 505', email: 'luis@email.com' },
    ];

    // Afiliados del Club
    const clubAffiliates = [
        { name: 'Roberto Mejía', phone: '+573101112233', unit: 'Socio #001', email: 'roberto@email.com' },
        { name: 'Sandra Villamil', phone: '+573102223344', unit: 'Socio #002', email: 'sandra@email.com' },
        { name: 'Andrés Herrera', phone: '+573103334455', unit: 'Socio #003', email: 'andres@email.com' },
    ];

    // Afiliados del Fondo
    const fondoAffiliates = [
        { name: 'Patricia Ríos', phone: '+573201112233', unit: 'Empleado #1001', email: 'patricia@techcorp.co' },
        { name: 'Miguel Castro', phone: '+573202223344', unit: 'Empleado #1002', email: 'miguel@techcorp.co' },
    ];

    const allAffiliatesData = [
        ...edificioAffiliates.map(a => ({ ...a, organizationId: edificio.id })),
        ...clubAffiliates.map(a => ({ ...a, organizationId: club.id })),
        ...fondoAffiliates.map(a => ({ ...a, organizationId: fondo.id })),
    ];

    const affiliates = await Promise.all(
        allAffiliatesData.map(async (data) => {
            const affiliate = await prisma.affiliate.create({ data });
            console.log(`   ✅ ${affiliate.name} - ${affiliate.unit}`);
            return affiliate;
        })
    );

    // =====================================
    // 5. CREAR FACTURAS
    // =====================================
    console.log('\n📄 Creando facturas...');

    const today = new Date();
    const addDays = (date: Date, days: number): Date => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    // Facturas del edificio
    const edificioInvoices = [
        { affiliateIdx: 0, concept: 'Administración Octubre 2024', amount: 450000, daysOffset: -45, status: InvoiceStatus.OVERDUE },
        { affiliateIdx: 1, concept: 'Administración Noviembre 2024', amount: 450000, daysOffset: -15, status: InvoiceStatus.OVERDUE },
        { affiliateIdx: 2, concept: 'Administración Diciembre 2024', amount: 450000, daysOffset: 10, status: InvoiceStatus.PENDING },
        { affiliateIdx: 3, concept: 'Administración Diciembre 2024', amount: 450000, daysOffset: 10, status: InvoiceStatus.PAID, paidAt: addDays(today, -5) },
        { affiliateIdx: 4, concept: 'Administración Diciembre 2024', amount: 450000, daysOffset: 10, status: InvoiceStatus.PAID, paidAt: addDays(today, -2) },
    ];

    // Facturas del club
    const clubInvoices = [
        { affiliateIdx: 5, concept: 'Membresía Trimestral Q4', amount: 1200000, daysOffset: -30, status: InvoiceStatus.OVERDUE },
        { affiliateIdx: 6, concept: 'Membresía Trimestral Q4', amount: 1200000, daysOffset: 5, status: InvoiceStatus.PENDING },
        { affiliateIdx: 7, concept: 'Membresía Trimestral Q4', amount: 1200000, daysOffset: 5, status: InvoiceStatus.PAID, paidAt: addDays(today, -10) },
    ];

    // Facturas del fondo
    const fondoInvoices = [
        { affiliateIdx: 8, concept: 'Aporte Diciembre 2024', amount: 200000, daysOffset: -5, status: InvoiceStatus.OVERDUE },
        { affiliateIdx: 9, concept: 'Aporte Diciembre 2024', amount: 200000, daysOffset: 15, status: InvoiceStatus.PENDING },
    ];

    const allInvoices = [...edificioInvoices, ...clubInvoices, ...fondoInvoices];

    for (const inv of allInvoices) {
        const affiliate = affiliates[inv.affiliateIdx];
        const invoice = await prisma.invoice.create({
            data: {
                organizationId: affiliate.organizationId,
                affiliateId: affiliate.id,
                concept: inv.concept,
                amount: inv.amount,
                dueDate: addDays(today, inv.daysOffset),
                status: inv.status,
                paidAt: inv.paidAt || null,
            },
        });

        const statusEmoji =
            invoice.status === 'OVERDUE' ? '🔴' :
                invoice.status === 'PENDING' ? '🟡' : '🟢';

        console.log(`   ${statusEmoji} ${affiliate.unit}: ${inv.concept} - $${Number(invoice.amount).toLocaleString('es-CO')}`);

        // Crear pago si está pagada
        if (invoice.status === 'PAID' && invoice.paidAt) {
            await prisma.payment.create({
                data: {
                    organizationId: affiliate.organizationId,
                    affiliateId: affiliate.id,
                    invoiceId: invoice.id,
                    amount: invoice.amount,
                    method: PaymentMethod.TRANSFERENCIA,
                },
            });
        }
    }

    // =====================================
    // 6. CREAR CONFIGURACIÓN DE ALERTAS
    // =====================================
    console.log('\n🔔 Configurando alertas automáticas...');

    const alertConfigs = [
        // Edificio
        {
            organizationId: edificio.id,
            name: 'Recordatorio 5 días antes',
            trigger: AlertTrigger.DAYS_BEFORE_DUE,
            daysOffset: 5,
            channel: AlertChannel.BOTH,
            messageTemplate: 'Hola {nombre}, te recordamos que tu cuota de {monto} vence el {fecha}. Evita recargos pagando a tiempo. 🏠',
            sendHour: 9,
        },
        {
            organizationId: edificio.id,
            name: 'Recordatorio día de vencimiento',
            trigger: AlertTrigger.ON_DUE_DATE,
            daysOffset: 0,
            channel: AlertChannel.WHATSAPP,
            messageTemplate: 'Hola {nombre}, hoy vence tu cuota de {monto}. Por favor realiza el pago para evitar intereses de mora. 📅',
            sendHour: 8,
        },
        {
            organizationId: edificio.id,
            name: 'Recordatorio 3 días en mora',
            trigger: AlertTrigger.DAYS_AFTER_DUE,
            daysOffset: 3,
            channel: AlertChannel.BOTH,
            messageTemplate: 'Hola {nombre}, tu cuota de {monto} se encuentra vencida desde el {fecha}. Por favor comunícate con la administración. ⚠️',
            sendHour: 10,
        },
        {
            organizationId: edificio.id,
            name: 'Recordatorio 15 días en mora',
            trigger: AlertTrigger.DAYS_AFTER_DUE,
            daysOffset: 15,
            channel: AlertChannel.BOTH,
            messageTemplate: 'URGENTE {nombre}: Tu deuda de {monto} tiene 15 días de mora. Acércate a la administración para evitar acciones adicionales. 🚨',
            sendHour: 9,
        },
        // Club
        {
            organizationId: club.id,
            name: 'Recordatorio membresía',
            trigger: AlertTrigger.DAYS_BEFORE_DUE,
            daysOffset: 7,
            channel: AlertChannel.EMAIL,
            messageTemplate: 'Estimado(a) {nombre}, tu membresía por {monto} vence el {fecha}. Renuévala para seguir disfrutando de nuestras instalaciones. ⛳',
            sendHour: 10,
        },
        // Fondo
        {
            organizationId: fondo.id,
            name: 'Recordatorio aporte',
            trigger: AlertTrigger.DAYS_BEFORE_DUE,
            daysOffset: 3,
            channel: AlertChannel.EMAIL,
            messageTemplate: 'Hola {nombre}, tu aporte mensual de {monto} se descuenta automáticamente el {fecha}. Asegúrate de tener saldo disponible. 💼',
            sendHour: 8,
        },
    ];

    for (const config of alertConfigs) {
        const alert = await prisma.alertConfig.create({ data: config });
        const channelIcon = config.channel === 'WHATSAPP' ? '📱' : config.channel === 'EMAIL' ? '📧' : '📱📧';
        console.log(`   ${channelIcon} ${config.name} (${config.trigger})`);
    }

    // =====================================
    // 7. RESUMEN FINAL
    // =====================================
    console.log('\n' + '='.repeat(50));
    console.log('📊 RESUMEN DEL SEED:');
    console.log('='.repeat(50));
    console.log(`   👤 Administradores: 1`);
    console.log(`   🏢 Organizaciones: ${organizations.length}`);
    console.log(`   👥 Afiliados: ${affiliates.length}`);
    console.log(`   📄 Facturas: ${allInvoices.length}`);
    console.log(`   🔔 Configuraciones de alerta: ${alertConfigs.length}`);
    console.log('='.repeat(50));

    // Resumen por organización
    console.log('\n📈 RESUMEN POR ORGANIZACIÓN:');
    for (const org of organizations) {
        const orgAffiliates = affiliates.filter(a => a.organizationId === org.id);
        const typeEmoji = org.type === 'EDIFICIO' ? '🏢' : org.type === 'CLUB' ? '⛳' : '💼';
        console.log(`   ${typeEmoji} ${org.name}: ${orgAffiliates.length} afiliados`);
    }

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
