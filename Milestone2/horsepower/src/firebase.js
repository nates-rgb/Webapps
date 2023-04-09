// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYAkNqAoph0vgCfX1bbqiQUSEyHoIFAq0",
  authDomain: "horsepower-3df5c.firebaseapp.com",
  projectId: "horsepower-3df5c",
  storageBucket: "horsepower-3df5c.appspot.com",
  messagingSenderId: "24209363030",
  appId: "1:24209363030:web:9832638194c58408f1abf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};

