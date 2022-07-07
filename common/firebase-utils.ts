import { FirebaseApp, initializeApp } from 'firebase/app';

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
