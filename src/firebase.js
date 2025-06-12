// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";

// Firebase configuration from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDVCNkBc3cGoFBzoZqcEB7B20xIljV1PtQ",
  authDomain: "myfirstfirebaseapp-83e54.firebaseapp.com",
  projectId: "myfirstfirebaseapp-83e54",
  storageBucket: "myfirstfirebaseapp-83e54.appspot.com", // ✅ Corrected
  messagingSenderId: "669856208909",
  appId: "1:669856208909:web:98404bffd03fada09ddd44",
  measurementId: "G-0FDZKDDZ6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };
