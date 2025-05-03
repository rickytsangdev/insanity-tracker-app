// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtuUSQ5T3Ihu1cyDrrFEC-gSOqr8UFGMo",
  authDomain: "insanity-tracker-1f241.firebaseapp.com",
  projectId: "insanity-tracker-1f241",
  storageBucket: "insanity-tracker-1f241.firebasestorage.app",
  messagingSenderId: "220367140617",
  appId: "1:220367140617:web:8fc8092dfde48e1e3685d8",
  measurementId: "G-EBYNFEEL20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);