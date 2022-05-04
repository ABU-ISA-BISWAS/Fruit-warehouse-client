// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCghxMnmZUyxVSV6r_J75EsTH3pGyfc6Kw",
  authDomain: "fruits-warehouse-fffdc.firebaseapp.com",
  projectId: "fruits-warehouse-fffdc",
  storageBucket: "fruits-warehouse-fffdc.appspot.com",
  messagingSenderId: "707838330219",
  appId: "1:707838330219:web:f15e1c70d1f814f915f82e",
  measurementId: "G-E6J0N0NXNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
export default auth;
