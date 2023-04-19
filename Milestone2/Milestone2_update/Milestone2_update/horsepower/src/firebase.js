// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore"
//import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut,} from "firebase/auth";
import { getFirestore, query, getDoc, collection, where, addDoc } from "firebase/firestore";
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAePs48_HjnZYEIGNZWSMTb9le9Nr57XOM",
  authDomain: "horsepower-4cffe.firebaseapp.com",
  projectId: "horsepower-4cffe",
  storageBucket: "horsepower-4cffe.appspot.com",
  messagingSenderId: "476140743447",
  appId: "1:476140743447:web:6a7e3a55f0c5c09068e552"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {app, auth, provider};

