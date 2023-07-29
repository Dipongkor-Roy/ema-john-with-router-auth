import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }
  const logOut=()=>{
    return signOut(auth);
  }
  useEffect(()=>{
    const unSubsribe=onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
    });
    return ()=>unSubsribe();
  },[])

  const authInfo = { user, createUser,signIn,logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
