import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, getAuth } from 'firebase/auth'
import { auth } from '../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSessionStorage } from "usehooks-ts";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext();

export const AuthGoogleProvider = ({ children }) => {
  const [userCredential , setUserCredential] = useSessionStorage("accessToken", "");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState({});
  const [userId, setUserId] = useState("");
  const [userPhotoUrl, setUserPhotoUrl] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [userState, loading, error] = useAuthState(auth);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading])

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setIsSignedIn(true)
      setUserPhotoUrl(currentUser?.photoURL ?? "")
      setUserId(currentUser?.uid ?? "")
    } else {
      setIsSignedIn(false)
    }
  })

  async function handleGoogleSignIn() {
    await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      setUserCredential(credential?.accessToken);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential)
    });
  }

  async function handleGoogleSignOut() {
    await signOut(auth)
    .then(() => {
      console.log("sign out sucessfully");
      setUserCredential("");
      console.log("store clear");
    });
  }

  return (
    <AuthGoogleContext.Provider value={{ 
      handleGoogleSignIn, 
      handleGoogleSignOut,
      isLoading,
      userId,
      userCredential,
      isSignedIn,
      userPhotoUrl,
      signed: !!user, 
    }}>
      {children}
    </AuthGoogleContext.Provider>
  )
}

AuthGoogleProvider.propTypes = {
  children: PropTypes.node.isRequired,
}