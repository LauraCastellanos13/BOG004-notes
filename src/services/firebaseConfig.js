import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCckfU5bt74PXFEWn72AcNso4dcCnqHk_Q",
    authDomain: "notes-1a21f.firebaseapp.com",
    projectId: "notes-1a21f",
    storageBucket: "notes-1a21f.appspot.com",
    messagingSenderId: "919586348810",
    appId: "1:919586348810:web:8d023b71cf812577a824f3",
    measurementId: "G-7TS9W91LMV"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

