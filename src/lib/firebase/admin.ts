import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// En Cloud Functions, las credenciales se inyectan automáticamente.
// En local, se usa GOOGLE_APPLICATION_CREDENTIALS o el projectId manual.
let app;
try {
    app = initializeApp({
        projectId: 'gestor-afiliados-2026',
    });
} catch (e: any) {
    // Si ya existe una app inicializada, la reutilizamos
    if (e.code === 'app/duplicate-app') {
        const { getApp } = require('firebase-admin/app');
        app = getApp();
    } else {
        console.error('Firebase Admin init error:', e);
        throw e;
    }
}

export const db = getFirestore(app);
export const auth = getAuth(app);
