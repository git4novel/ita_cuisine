import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [userPhoto, setUserPhoto] = useState(null);
  const [displayName, setDisplayName]  = useState(null)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const signedGoogleUser = result.user;
        console.log(signedGoogleUser);
        setUserPhoto(signedGoogleUser.photoURL);
        setDisplayName(signedGoogleUser.displayName)
        console.log(signedGoogleUser.displayName);
      })
      .catch((error) => {
        console.log(error?.message);
      });
  };

  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const signedGitUser = result.user;
        console.log(signedGitUser);
        setUserPhoto(signedGitUser.photoURL);
        setDisplayName(signedGitUser.displayName)
        console.log(signedGitUser.displayName);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setLoading(false);
      console.log("Logged in user inside of state ovserver", loggedUser);
      setUser(loggedUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    handleGoogleSignIn,
    userPhoto,
    handleGithubLogIn,
    loading,
    displayName
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
