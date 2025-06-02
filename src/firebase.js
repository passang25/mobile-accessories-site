// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


// Your Firebase configuration object from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDVCNkBc3cGoFBzoZqcEB7B20xIljV1PtQ",
  authDomain: "myfirstfirebaseapp-83e54.firebaseapp.com",
  projectId: "myfirstfirebaseapp-83e54",
  storageBucket: "myfirstfirebaseapp-83e54.firebasestorage.app",
  messagingSenderId: "669856208909",
  appId: "1:669856208909:web:98404bffd03fada09ddd44",
  measurementId: "G-0FDZKDDZ6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };
