import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7EUbwqPMG0YZQGHiZKFQUV3VWXdxIq8s",
    authDomain: "vue-blog-system-b451b.firebaseapp.com",
    projectId: "vue-blog-system-b451b",
    storageBucket: "vue-blog-system-b451b.appspot.com",
    messagingSenderId: "1042463582834",
    appId: "1:1042463582834:web:2ae2ec8ccff3565e2d70eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, serverTimestamp, auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut }