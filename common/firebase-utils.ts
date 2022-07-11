import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export default function initializeFirebase(): FirebaseApp {
  const firebaseConfig = {
    apiKey: 'AIzaSyDfKUTwQhM9puE4VojbHxabqG3XvwvcJAs',
    authDomain: 'formhub-app.firebaseapp.com',
    projectId: 'formhub-app',
    storageBucket: 'formhub-app.appspot.com',
    messagingSenderId: '164339171912',
    appId: '1:164339171912:web:ba100ffed8bb94bb74ce7d',
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
}

export function initializeDatabase(): Firestore {
  const app = initializeFirebase();
  return getFirestore(app);
}

export const db = initializeDatabase();

export async function uploadFile(file: Blob, filename: string) {
  const storage = getStorage();
  const fileRef = ref(storage, filename);

  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);
  return url;
}
