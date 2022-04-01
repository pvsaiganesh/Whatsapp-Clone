// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAra39lZZJUhKPWtSe00P3wnyP-SnrPEts",
  authDomain: "whatsapp-clone-28a20.firebaseapp.com",
  projectId: "whatsapp-clone-28a20",
  storageBucket: "whatsapp-clone-28a20.appspot.com",
  messagingSenderId: "66781732238",
  appId: "1:66781732238:web:0fe8786ed4408ac0bcd8df",
  measurementId: "G-6P9B4WZD8B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
