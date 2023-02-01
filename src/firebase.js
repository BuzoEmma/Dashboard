// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD6oioyE9cBouVRo5yvEo3fYX1DaWAzmQw",
  authDomain: "lamadmin-3a3f5.firebaseapp.com",
  projectId: "lamadmin-3a3f5",
  storageBucket: "lamadmin-3a3f5.appspot.com",
  messagingSenderId: "455903847969",
  appId: "1:455903847969:web:2318412e604127e1046560",
  measurementId: "G-B86TMMLNNF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
