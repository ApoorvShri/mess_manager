// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqN9ba8XcZbokA0v50K5hOOHOjo6OE3o8",

  authDomain: "meal-maestro.firebaseapp.com",

  projectId: "meal-maestro",

  storageBucket: "meal-maestro.appspot.com",

  messagingSenderId: "383170839675",

  appId: "1:383170839675:web:796b8cd8ed187ee6d50ede"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
