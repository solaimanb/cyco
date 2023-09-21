import axios from 'axios';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(' ');
  const [loading, setLoading] = useState(true);

  // PROVIDERS:
  const googleProvider = new GoogleAuthProvider();

  // create a new user:
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // UPDATE USER PROFILE:
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // EMAIL/PASS SIGN-IN:
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GOOGLE SIGN-IN:
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // user state observer:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser && currentUser?.email) {
        console.log('User is logged in:', currentUser);
        axios
          .post(`${import.meta.env.VITE_SERVER_URL}/jwt`, {
            email: currentUser?.email,
          })
          .then((data) => {
            console.log('Received token data:', data.data.token);
            localStorage.setItem('access_token', data.data.token);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching token:', error);
            setLoading(false);
          });
      } else {
        localStorage.removeItem('access_token');
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [auth]);

  // }, [axiosSecure, auth]);

  // logging out:
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    signIn,
    googleSignIn,
    logOut,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
