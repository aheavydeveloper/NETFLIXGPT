// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_gHrvXF_a5PZY-Kc_v44QwJRO7CN85t4",
  authDomain: "netflix-gpt-726dc.firebaseapp.com",
  projectId: "netflix-gpt-726dc",
  storageBucket: "netflix-gpt-726dc.appspot.com",
  messagingSenderId: "371855227336",
  appId: "1:371855227336:web:deed9ba787f025ba05a8fd",
  measurementId: "G-32VEM8LCB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();