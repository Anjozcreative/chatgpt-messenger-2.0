import { getApp, getApps, initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUORNUBTgr4WtuZhgzG61xT0E8ZC7TBe8",
  authDomain: "chatgpt-messenger-bd0e7.firebaseapp.com",
  projectId: "chatgpt-messenger-bd0e7",
  storageBucket: "chatgpt-messenger-bd0e7.appspot.com",
  messagingSenderId: "1005953731402",
  appId: "1:1005953731402:web:45c489ad27e9b5a03f0fb3"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };