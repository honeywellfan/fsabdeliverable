// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4vjqy6FyAZWYB5inzxXbTzHoLW8UfplA",
  authDomain: "fsabdeliverable-8e69e.firebaseapp.com",
  projectId: "fsabdeliverable-8e69e",
  storageBucket: "fsabdeliverable-8e69e.firebasestorage.app",
  messagingSenderId: "867225936504",
  appId: "1:867225936504:web:788bd01a0414bcabfbc38d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)