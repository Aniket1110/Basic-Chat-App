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
        return await auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            .then((result) => {
                const details = firebase.auth.getAdditionalUserInfo(result)
                console.log('I am Aniket Majhi')
                console.log(result);
                console.log(details)
            })
            .catch((error) => {
                console.log('Failed login')
                console.log(error);
            });
    }
    const logout = () => {
        return auth.signOut()
    }
    const forgotpassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const reauthenticate = (currentPassword) => {
        let user = auth.currentUser;
        let cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    const resetpassword = (currentPassword, newPassword) => {
        return reauthenticate(currentPassword).then(() => {
            return auth.currentUser.updatePassword(newPassword)
                .then(() => {
                    console.log("Password updated!");
                })
                .catch((error) => {
                    console.log(error);
                });
        }).catch((error) => {
            console.log(error);
        });
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
        resetpassword,
        loginwithgoogle
    }
    return (
        <AuthContext.Provider value={value}>
            {hasuser && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
