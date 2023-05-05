import React, { createContext, useEffect, useState } from 'react';

import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((user) =>{
      setCurrentUser(user)
      setLoading(false)
    })

    return () =>{
      unsubscribe();
    }
  },[])
  return (
    <AuthContext.Provider value={{
      currentUser,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
