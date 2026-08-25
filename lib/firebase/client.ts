import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "placeholder-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "freyer-international-logistics.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "freyer-international-logistics",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "freyer-international-logistics.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "479369614683",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "placeholder-app-id",
};

// Initialize Firebase client safely (singleton pattern)
export const app: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
