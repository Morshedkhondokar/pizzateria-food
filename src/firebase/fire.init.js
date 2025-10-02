// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2yECIXF-HxzKcvV1z5uCA5gZP_VumrAo",
  authDomain: "pizzateria-food.firebaseapp.com",
  projectId: "pizzateria-food",
  storageBucket: "pizzateria-food.firebasestorage.app",
  messagingSenderId: "50394469879",
  appId: "1:50394469879:web:229ca61f966ef3b9d54af2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;