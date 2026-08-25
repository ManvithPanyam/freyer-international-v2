import * as admin from "firebase-admin";

const projectId = process.env.FIREBASE_PROJECT_ID || "freyer-international-logistics";

if (!admin.apps.length) {
  admin.initializeApp({
    projectId,
  });
}

export const adminDb = admin.firestore();
export const adminStorage = admin.storage();
