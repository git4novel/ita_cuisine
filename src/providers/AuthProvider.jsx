import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser= (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
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
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;