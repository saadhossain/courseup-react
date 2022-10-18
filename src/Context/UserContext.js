import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';

export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const auth = getAuth(app)

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    //Create User Account with email and password
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Verify User email while registration
    const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    //Login user 
    const userSignIn = (userEmail, userPassword) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, userEmail, userPassword)
    }

    //Manage User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userInfo = { user, userRegister, verifyEmail, userSignIn, logOut, loading }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;