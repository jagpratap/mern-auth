// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1bccb.firebaseapp.com",
  projectId: "mern-auth-1bccb",
  storageBucket: "mern-auth-1bccb.appspot.com",
  messagingSenderId: "415562168514",
  appId: "1:415562168514:web:3c76368728b5b0aee3a35b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);