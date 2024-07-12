// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAyZzJAvSNJ9HNDf3x0YlMchIwu_H7hGk",
  authDomain: "otp-project-4272e.firebaseapp.com",
  projectId: "otp-project-4272e",
  storageBucket: "otp-project-4272e.appspot.com",
  messagingSenderId: "195595813200",
  appId: "1:195595813200:web:4ff558664b5f90d54e6c55",
  measurementId: "G-PE75ZY65L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);