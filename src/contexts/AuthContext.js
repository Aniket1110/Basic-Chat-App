import React, { useContext, useEffect, useState } from 'react'
import auth from '../components/Firebase';
import firebase from "firebase/compat/app"


const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [hasuser, sethasuser] = useState(false)

    const register = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const loginwithgoogle = async () => {
        return auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
    const logout = () => {
        return auth.signOut()
    }
    const forgotpassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }


    useEffect(() => {
        const change = auth.onAuthStateChanged(user => {
            setUser(user)
            sethasuser(true)
        })
        return change;
    }, [])

    const value = {
        user,
        register,
        login,
        logout,
        forgotpassword,
        loginwithgoogle
    }
    return (
        <AuthContext.Provider value={value}>
            {hasuser && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
