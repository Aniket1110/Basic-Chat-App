import React, { useContext, useEffect, useState } from 'react'
import auth from '../components/Firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
   
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const [user , setUser] = useState()

    const register = (email , password) => {

        return auth.createUserWithEmailAndPassword(email , password)
    }

    useEffect(() => {
        const change = auth.onAuthStateChanged(user => {
            setUser(user)
        })

        return change;

    },[])


    const value = {
        user,
        register
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
