// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLkHkwd4K61mAIXAAhfrK4X1aRqo0hLrs",
  authDomain: "day-4-auth-firebase.firebaseapp.com",
  projectId: "day-4-auth-firebase",
  storageBucket: "day-4-auth-firebase.appspot.com",
  messagingSenderId: "551217886955",
  appId: "1:551217886955:web:a547b2f8d2dae0b39e30ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app