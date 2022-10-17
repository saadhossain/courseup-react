import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.init'

export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const auth = getAuth(app)
    //Create User Account with email and password
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Verify User email while registration
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    //Login user 
    const userSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    //Manage User
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const logOut = () => {
        return signOut(auth)
    }
    const userInfo = {user, userRegister, verifyEmail, userSignIn, logOut, loading}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;