// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl-iJ7EaygsHZ4WXJpc6MGzmE9dLpHKcg",
  authDomain: "inventory-management1-79204.firebaseapp.com",
  projectId: "inventory-management1-79204",
  storageBucket: "inventory-management1-79204.appspot.com",
  messagingSenderId: "9897251350",
  appId: "1:9897251350:web:724890842c5f1936bd9b37",
  measurementId: "G-Z647MWG7HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}