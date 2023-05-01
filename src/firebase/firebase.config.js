// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBosr7jvcp4yOKtR6Ea1J3iBWYjWle0ZZY",
  authDomain: "italian-chef-hunt.firebaseapp.com",
  projectId: "italian-chef-hunt",
  storageBucket: "italian-chef-hunt.appspot.com",
  messagingSenderId: "184149235562",
  appId: "1:184149235562:web:f235a0e9b6e52864ccb713"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export default app;