// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANC-OEWg9ee5CQh3XczpQnnjzQgYlGN_Y",
  authDomain: "wedding-planner-810f8.firebaseapp.com",
  projectId: "wedding-planner-810f8",
  storageBucket: "wedding-planner-810f8.appspot.com",
  messagingSenderId: "1017632645345",
  appId: "1:1017632645345:web:d60ede4dd042c905c4d7a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;