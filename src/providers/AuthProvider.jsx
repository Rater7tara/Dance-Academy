import React, { createContext, useEffect, useState } from 'react';
import { 
    GoogleAuthProvider, createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, 
    signOut, 
    updateProfile
} from "firebase/auth";
import  app  from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);

    
// create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
// sign in with google
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    

    const updateUserProfile = (name, photo, email) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo, email: email
        });
    }

  // user monitoring
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      if (currentUser) {
        
        if (currentUser.displayName) {
          fetch("https://summer-camp-server-beige.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: currentUser?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("access-token", data?.token);
          });
          const savedUser = {
            name: currentUser.displayName || "",
            email: currentUser.email,
            role: "student",
            image: currentUser.photoURL,
          };
          fetch("https://summer-camp-server-beige.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {});
        }
      } else {
        setUser(null);
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [control]);

  // user logout
  const logOut = () => {
    return signOut(auth);
}




    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile,
        setControl,
        control,
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;