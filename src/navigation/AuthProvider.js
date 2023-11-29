import React, { useState, createContext } from "react";
import PropTypes from 'prop-types';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    console.log('user: ', user);

    return <AuthContext.Provider 
    value={{
        user, 
        setUser, 
        login: async (email, password) => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
        } catch (e) {
            alert(e);
            console.log(e);
            }
        },
        register: async (email, password) => {
            try {
                await auth().createUserWithEmailAndPassword(email, password);
                alert('done');
            } catch (e) {
                alert('error');
                console.log(e);
            }
        },
        logout: async () => {
            try {
                await auth().signOut();
            } catch (e) {
                console.log(e);
            }
        },
        resetPassword: async (email) => {
            try {
                await auth().sendPasswordResetEmail(email);
            } catch (e) {
                console.log(e);
            }
        },
    }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
