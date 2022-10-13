import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAtUMwLQDZ-m5f7gWVDwJJMoTFtsodHwBM',
  authDomain: 'fir-app-87b43.firebaseapp.com',
  projectId: 'fir-app-87b43',
  storageBucket: 'fir-app-87b43.appspot.com',
  messagingSenderId: '790602059437',
  appId: '1:790602059437:web:1add43ae37149e04ddc024',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
