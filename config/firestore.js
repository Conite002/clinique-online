// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmQ7sEbUkI-AHcA23DRfbODEgj49sxyxs",
  authDomain: "olory-clinique.firebaseapp.com",
  projectId: "olory-clinique",
  storageBucket: "olory-clinique.appspot.com",
  messagingSenderId: "81541426788",
  appId: "1:81541426788:web:33e13ec4d776d6dc473971",
  measurementId: "G-596GKP9D72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);