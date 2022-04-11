// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMPNEzMUpfjSRnseF6t8oJ1iuDI8Ql9lI",
  authDomain: "simple-authentication-b40d7.firebaseapp.com",
  projectId: "simple-authentication-b40d7",
  storageBucket: "simple-authentication-b40d7.appspot.com",
  messagingSenderId: "889191041627",
  appId: "1:889191041627:web:6ffa68726e5f7b37d54d7e",
  measurementId: "G-JV1QBLT5QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 