import React from "react";
import '../styles/home.css';
import { useNavigate } from "react-router-dom";
import { auth, loginWithGoogle } from '../services/firebase.js';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


function HomeLogin() {
    const navigate = useNavigate()
    const logInGoogle = () => {
        loginWithGoogle().then((res) => {
            console.log(res)
            navigate('/')

        })
    }
    return (
        <div className='login'>
            <h1 className='titleNotes'>Write notes</h1>
            <button className='ButtonLogin' onClick={logInGoogle}>Sign in with Google</button>
        </div>
    );
}
export default HomeLogin;
