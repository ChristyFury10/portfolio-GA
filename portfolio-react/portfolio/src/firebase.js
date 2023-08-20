// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZkIBizO6T7IT8JWc84xNP8ohbC4nkTo4",
  authDomain: "portfolio-b4b83.firebaseapp.com",
  projectId: "portfolio-b4b83",
  storageBucket: "portfolio-b4b83.appspot.com",
  messagingSenderId: "563953393249",
  appId: "1:563953393249:web:144ee446ff2954e5171420",
  measurementId: "G-WSMS7HL5Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);