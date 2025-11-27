// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDu8tJoIPqEngs9HKrsd0V2bcSxy7jFD0w",
    authDomain: "sme-guard-56185.firebaseapp.com",
    projectId: "sme-guard-56185",
    storageBucket: "sme-guard-56185.firebasestorage.app",
    messagingSenderId: "830439116522",
    appId: "1:830439116522:web:ac9f1ebe48d21a40fb5193",
    measurementId: "G-LMQJFS4KC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);