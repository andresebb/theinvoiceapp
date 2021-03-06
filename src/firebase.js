import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB5icZtTmS0YkJ8ZcYIq8iqpd_CWjMaZrI",
  authDomain: "invoice-181c8.firebaseapp.com",
  projectId: "invoice-181c8",
  storageBucket: "invoice-181c8.appspot.com",
  messagingSenderId: "20952246357",
  appId: "1:20952246357:web:08b3cbbb2810d3253a4cdc",
  measurementId: "G-PSLGGDBJP5",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
