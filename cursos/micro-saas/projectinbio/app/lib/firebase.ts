import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { get } from "http";
import "server-only";

const decodedKey = (process.env.FIREBASE_PRIVATE_KEY_BASE64 || "").replace(
    /\\n/g,
    "\n"
  );

export const firebaseAdmin = cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: decodedKey,
});

if (!getApps().length) {
    initializeApp({
        credential: firebaseAdmin,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET
    });
}

export const db = getFirestore()
export const storage = getStorage().bucket()

export async function getDownloadURLFrmPath(path: string) {
    if (!path) return null

    const file = storage.file(path)
    const [url] = await file.getSignedUrl({
        action: 'read',
        expires: '03-09-2500'
    })
    return url
    
}