// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "blogtech-cb6a8.firebaseapp.com",
  projectId: "blogtech-cb6a8",
  storageBucket: "blogtech-cb6a8.appspot.com",
  messagingSenderId: "747719217733",
  appId: "1:747719217733:web:b45daf95df8c2d18a3892c",
  measurementId: "G-46LYF9W9X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);