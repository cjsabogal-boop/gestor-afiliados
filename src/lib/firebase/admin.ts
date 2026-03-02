import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'gestor-afiliados-2026',
        });
    } catch (error) {
        console.error('Firebase admin initialization error', error);
    }
}

export const db = admin.firestore();
export const auth = admin.auth();
