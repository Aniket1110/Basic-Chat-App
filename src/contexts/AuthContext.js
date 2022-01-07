import React, { useContext, useEffect, useState } from 'react'
import auth from '../components/Firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const [user , setUser] = useState()
    const [hasuser, sethasuser] = useState(false)

    const register = (email , password) => {
        return auth.createUserWithEmailAndPassword(email , password)
    }
    const login = (email , password) => {
        return auth.signInWithEmailAndPassword(email , password)
    }
    const logout = () => {
        return auth.signOut()
    }
    const forgotpassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    // const resetpassword = () => {
        
    //     // To be done
    // }

    // const updatename = (name) => {
    //     return auth.currentUser.updateProfile({
    //         displayName : name
    //     })
    // }

    // const updatephonenumber = (phone) => {
    //     return auth.currentUser.updatePhoneNumber()
    // }

    useEffect(() => {
        const change = auth.onAuthStateChanged(user => {
            setUser(user)
            sethasuser(true)
        })
        return change;
    },[])

    const value = {
        user,
        register,
        login,
        logout,
        forgotpassword
    }
    return (
        <AuthContext.Provider value={value}>
            {hasuser && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
