import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA31-e9QRUBajNWP2ZLFO4rSSI__IJueco",
  authDomain: "seventy-5e12b.firebaseapp.com",
  projectId: "seventy-5e12b",
  storageBucket: "seventy-5e12b.appspot.com",
  messagingSenderId: "780608303675",
  appId: "1:780608303675:web:03613405fb06cf56a2e21e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);