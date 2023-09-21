import { initializeApp } from 'firebase/app'
// import {
//     getFirestore, collection, getDocs, onSnapshot,
//     addDoc, deleteDoc, doc,
//     query, where,
//     orderBy, serverTimestamp,
//     getDoc, updateDoc
// } from 'firebase/firestore';
import {
    getAuth,
    
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyADYQB2E3_CwSupA5ZwU2Awdv1XQnjrwh0",
    authDomain: "inventorymgnt-41bf6.firebaseapp.com",
    projectId: "inventorymgnt-41bf6",
    storageBucket: "inventorymgnt-41bf6.appspot.com",
    messagingSenderId: "692078962128",
    appId: "1:692078962128:web:0ff52323afd0da989045d5"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)