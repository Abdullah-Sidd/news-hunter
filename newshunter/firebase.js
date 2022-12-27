// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU8fEZzQzk0R77-N6gZq7sgdFLV8i9VKs",
  authDomain: "news-hunter-web.firebaseapp.com",
  projectId: "news-hunter-web",
  storageBucket: "news-hunter-web.appspot.com",
  messagingSenderId: "1078467618961",
  appId: "1:1078467618961:web:0f7c7052c5c6d8594d7730",
  measurementId: "G-J2XCTCS8LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);