// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYGxX9h2DRvlGs6qrYN3vzPQoHIyDiObY",
  authDomain: "triveousapp.firebaseapp.com",
  projectId: "triveousapp",
  storageBucket: "triveousapp.appspot.com",
  messagingSenderId: "417033228017",
  appId: "1:417033228017:web:fe8f25076d6c04bd2a2350",
  measurementId: "G-6X8TTPTFNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
