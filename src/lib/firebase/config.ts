import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    projectId: "gestor-afiliados-2026",
    appId: "1:704612357204:web:ddc26f59af9b0d6f6809c1",
    storageBucket: "gestor-afiliados-2026.firebasestorage.app",
    apiKey: "AIzaSyCotWVp--zpcsRMQ5_T9azq0fHzYbr69Fo",
    authDomain: "gestor-afiliados-2026.firebaseapp.com",
    messagingSenderId: "704612357204",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
