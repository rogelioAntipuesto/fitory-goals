import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 👈 use full Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBZSW3sfswmYjmA5JDb14Nz4fl_1Cjdnk0",
  authDomain: "mobile-app---fitory.firebaseapp.com",
  projectId: "mobile-app---fitory",
  storageBucket: "mobile-app---fitory.firebasestorage.app",
  messagingSenderId: "633690898945",
  appId: "1:633690898945:web:bde9210cb77fc044eb7600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
