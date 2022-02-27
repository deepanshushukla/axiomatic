// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAa9dGv4u3O5CQ9Fu5ZC2ej6AVGUA4AXK0',
  authDomain: 'axiomatic-14c46.firebaseapp.com',
  projectId: 'axiomatic-14c46',
  storageBucket: 'axiomatic-14c46.appspot.com',
  messagingSenderId: '871526783540',
  appId: '1:871526783540:web:4db4e4c3a2d4d9bc5dc861',
  measurementId: 'G-5DDM0R7P28',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
