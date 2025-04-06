// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV56iTK97IXTRQL1EvIIUiB7ZMgSzfhNE",
  authDomain: "book-hub-f531a.firebaseapp.com",
  projectId: "book-hub-f531a",
  storageBucket: "book-hub-f531a.firebasestorage.app",
  messagingSenderId: "372817583440",
  appId: "1:372817583440:web:60fa72d552df831a11e055",
  measurementId: "G-6FB8KY8BXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}