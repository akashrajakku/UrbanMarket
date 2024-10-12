// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeMn3kjQCe6BB6FMtDoCui2XlVYz0Syoo",
  authDomain: "urbanmarket-c579c.firebaseapp.com",
  projectId: "urbanmarket-c579c",
  storageBucket: "urbanmarket-c579c.appspot.com",
  messagingSenderId: "46422013613",
  appId: "1:46422013613:web:4480060431bd7dc49a7824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
