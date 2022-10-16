import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../Firebase/firebase.init'

export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const auth = getAuth(app)
    //Create User Account with email and password
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userInfo = {userRegister}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;