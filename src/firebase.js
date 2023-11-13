// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNbhu4tqNxHwv6jNN7DiWcQN_12D2orkE",
  authDomain: "realesta-70516.firebaseapp.com",
  projectId: "realesta-70516",
  storageBucket: "realesta-70516.appspot.com",
  messagingSenderId: "739908103567",
  appId: "1:739908103567:web:fc6cd4bcc34597dca8effa",
  measurementId: "G-2WRP61LNXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);