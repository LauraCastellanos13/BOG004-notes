import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from "./firebaseConfig";

export const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user; // The signed-in user info.

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;// The email of the user's account used.
            const credential = GoogleAuthProvider.credentialFromError(error);// The AuthCredential type that was used.
        });
}

export const logOut = () => {
    signOut(auth).then(() => {  // Sign-out successful. 
    }).catch((error) => {     // An error happened.
    });
}

