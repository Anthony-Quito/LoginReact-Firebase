// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc0d52pxZFuc_On2JdCbzaVspPUsl6rKw",
  authDomain: "react-fb-auth-2022.firebaseapp.com",
  projectId: "react-fb-auth-2022",
  storageBucket: "react-fb-auth-2022.appspot.com",
  messagingSenderId: "1080741435664",
  appId: "1:1080741435664:web:f87851b903d9218ce3ed95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);