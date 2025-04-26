import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT3Tki288wsdRqLMiP5CzTou2LCSIiOUY",
  authDomain: "linko-a2929.firebaseapp.com",
  projectId: "linko-a2929",
  storageBucket: "linko-a2929.firebasestorage.app",
  messagingSenderId: "640065270475",
  appId: "1:640065270475:web:e741445aebd12bcfc7614e"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app)
export const auth = getAuth(app)