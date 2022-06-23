import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyWEgwoZZWW8f2-iKj4aaRjqDSD_8u9Sc",
  authDomain: "medicare-6a08b.firebaseapp.com",
  projectId: "medicare-6a08b",
  storageBucket: "medicare-6a08b.appspot.com",
  messagingSenderId: "57863821372",
  appId: "1:57863821372:web:2caa0ebaf36862b17a4b39",
  measurementId: "G-5Y4TMCBXBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);