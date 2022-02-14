// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv7QZnmF8MqANQW20s2WSjerOR9U_UCRU",
  authDomain: "sociella.firebaseapp.com",
  projectId: "sociella",
  storageBucket: "sociella.appspot.com",
  messagingSenderId: "567103702219",
  appId: "1:567103702219:web:2cc0062c9c095da75d874e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export {app};