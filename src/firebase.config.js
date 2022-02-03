import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7-J86OcZHjiCIUhlJPC3uQwPnXcCattk",
  authDomain: "real-estate-dd4da.firebaseapp.com",
  projectId: "real-estate-dd4da",
  storageBucket: "real-estate-dd4da.appspot.com",
  messagingSenderId: "768378436692",
  appId: "1:768378436692:web:d62e866db4de5dda5f41c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
