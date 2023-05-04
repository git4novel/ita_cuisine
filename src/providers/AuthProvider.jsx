import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const [userPhoto, setUserPhoto] = useState(null)

    const createUser= (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth);
    }

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const signedGoogleUser = result.user;
            console.log(signedGoogleUser.photoURL);
            setUserPhoto(signedGoogleUser.photoURL)
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    const handleGithubLogIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const signedGitUser = result.user;
            console.log(signedGitUser);
            setUserPhoto(signedGitUser.photoURL)
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('Logged in user inside of state ovserver', loggedUser);
            setUser(loggedUser);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn, 
        logOut,
        handleGoogleSignIn,
        userPhoto,
        handleGithubLogIn,

    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;