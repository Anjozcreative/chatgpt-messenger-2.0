import admin from 'firebase-admin';
import { initializeApp, getApps } from 'firebase-admin/app';

const serviceAccount = {
  // Your service account details here
  // This should be the parsed service account object, not parsed JSON.
};

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Other Firebase configuration options if needed
  });
}

const adminDb = admin.firestore();

export { adminDb };
