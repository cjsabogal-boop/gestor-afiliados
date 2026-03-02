import * as admin from 'firebase-admin';

function getFirebaseAdminApp() {
    if (!admin.apps.length) {
        try {
            return admin.initializeApp({
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'gestor-afiliados-2026',
            });
        } catch (error) {
            console.error('Firebase admin initialization error', error);
            return admin.app();
        }
    }
    return admin.app();
}

const app = getFirebaseAdminApp();
export const db = app.firestore();
export const auth = app.auth();
