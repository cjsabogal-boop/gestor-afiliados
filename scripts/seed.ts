import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, serverTimestamp, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    projectId: "gestor-afiliados-2026",
    appId: "1:704612357204:web:ddc26f59af9b0d6f6809c1",
    storageBucket: "gestor-afiliados-2026.firebasestorage.app",
    apiKey: "AIzaSyCotWVp--zpcsRMQ5_T9azq0fHzYbr69Fo",
    authDomain: "gestor-afiliados-2026.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function main() {
    console.log('🌱 Iniciando seed de Firebase GestorAfiliados...\n');

    // =====================================
    // 1. Limpiar datos existentes
    // =====================================
    console.log('🧹 Limpiando organizaciones...');
    const orgs = await getDocs(collection(db, 'organizations'));
    for (const org of orgs.docs) {
        const affs = await getDocs(collection(db, `organizations/${org.id}/affiliates`));
        for (const aff of affs.docs) await deleteDoc(aff.ref);

        const invs = await getDocs(collection(db, `organizations/${org.id}/invoices`));
        for (const inv of invs.docs) await deleteDoc(inv.ref);

        const alcs = await getDocs(collection(db, `organizations/${org.id}/alertConfigs`));
        for (const alc of alcs.docs) await deleteDoc(alc.ref);

        await deleteDoc(org.ref);
    }

    // =====================================
    // 2. Crear Organizaciones
    // =====================================
    console.log('\n🏢 Creando organizaciones...');
    const org1 = await addDoc(collection(db, 'organizations'), {
        name: 'Edificio Torres del Parque',
        type: 'EDIFICIO',
        address: 'Calle 26 #5-30, Bogotá',
        phone: '+573011111111',
        email: 'admin@torresdelparque.co',
        isActive: true,
        createdAt: serverTimestamp()
    });
    console.log(`   🏢 Edificio Torres del Parque (${org1.id})`);

    await addDoc(collection(db, 'organizations'), {
        name: 'Club Social Los Arrayanes',
        type: 'CLUB',
        address: 'Km 5 Vía La Calera',
        phone: '+573022222222',
        email: 'contacto@clubarrayanes.co',
        isActive: true,
        createdAt: serverTimestamp()
    });
    console.log(`   ⛳ Club Social Los Arrayanes`);

    // =====================================
    // 3. Crear Afiliados y Facturas (Solo Edificio)
    // =====================================
    console.log('\n👥 Creando afiliados y facturas para Edificio...');

    const edificioAffiliates = [
        { name: 'Carlos Eduardo Martínez', phone: '+573001112233', unit: 'Apto 101', email: 'carlos@email.com' },
        { name: 'María Fernanda López', phone: '+573002223344', unit: 'Apto 202', email: 'maria@email.com' },
    ];

    const today = new Date();
    const addDays = (d: Date, days: number) => {
        const temp = new Date(d);
        temp.setDate(temp.getDate() + days);
        return Timestamp.fromDate(temp);
    };

    for (const [index, data] of edificioAffiliates.entries()) {
        const affRef = await addDoc(collection(db, `organizations/${org1.id}/affiliates`), {
            ...data,
            isActive: true,
            createdAt: serverTimestamp()
        });

        let invStatus = 'PAID';
        let offset = 10;
        if (index === 0) { invStatus = 'OVERDUE'; offset = -45; }
        if (index === 1) { invStatus = 'PENDING'; offset = 5; }

        await addDoc(collection(db, `organizations/${org1.id}/invoices`), {
            affiliateId: affRef.id,
            concept: 'Administración',
            amount: 450000,
            dueDate: addDays(today, offset),
            status: invStatus,
            createdAt: serverTimestamp()
        });
        console.log(`   ✅ ${data.name} - ${data.unit} (1 factura ${invStatus})`);
    }

    // =====================================
    // 4. Configuración de Alertas
    // =====================================
    console.log('\n🔔 Configurando alertas automáticas...');
    await addDoc(collection(db, `organizations/${org1.id}/alertConfigs`), {
        name: 'Recordatorio 5 días antes',
        trigger: 'DAYS_BEFORE_DUE',
        daysOffset: 5,
        channel: 'BOTH',
        messageTemplate: 'Hola {nombre}, recuerde su pago.',
        sendHour: 9,
        isActive: true,
        sentCount: 0
    });

    console.log('\n✅ Seed completado exitosamente para Firebase!\n');
    process.exit(0);
}

main().catch(console.error);
