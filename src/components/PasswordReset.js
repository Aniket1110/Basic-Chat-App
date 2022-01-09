import React, { useState } from 'react'
import { useRef } from 'react'
import auth from '../components/Firebase';
import firebase from "firebase/compat/app"

const PasswordReset = () => {

    const oldpasswordRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const [msg, setmsg] = useState()
    const [err, seterr] = useState(false)
    const [done, setdone] = useState(false)
    const [one, setone] = useState(false)

    const reauthenticate = (currentPassword) => {
        let user = auth.currentUser;
        let cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    const resetpassword = async (currentPassword, newPassword) => {

        return reauthenticate(currentPassword).then(() => {
            return auth.currentUser.updatePassword(newPassword)
                .then(() => {
                    setmsg('Password Updated')
                    setdone(true)
                })
                .catch((e) => {
                    if (e.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') setmsg('Password should be at least 6 characters')
                    else setmsg('An error occured')
                    seterr(true)
                });
        }).catch((e) => {
            if(e.message == 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).') {
                setmsg('Wrong Password!')
            }
            else setmsg('An error occured')
            seterr(true)
        });
    }


    const submit = async (e) => {
        e.preventDefault()
        setmsg(' ')
        setdone(false)
        seterr(false)

        if (passwordRef.current.value !== confirmpasswordRef.current.value) {
            seterr(true)
            return setmsg('Passwords do not match')
        }

        try {
            await resetpassword(oldpasswordRef.current.value, passwordRef.current.value)
        }
        catch {
            setmsg('An Error occured!')
            seterr(true)
        }
    }



    return (
        <div className="row">
            <div className="shadow-lg p-3 mb-5 round mx-auto register-sizing my-5">
                <form onSubmit={submit}>
                    <div className='p-4 fs-4 text-center'>
                        <strong>
                            Password Reset
                        </strong>
                    </div>
                    <div className='w-100 rounded mt-3 text-center' style={err ? { "backgroundColor": "#f0b2b5", "padding": "15px" } : done ? { "backgroundColor": "#9cf7df", "padding": "15px" } : { "backgroundColor": "white" }}><strong>{msg}</strong></div> : <div></div>
                    <div className="form-outline mb-4">
                        <strong>
                            <label className="form-label" for="oldpassword">Old Password</label>
                        </strong>
                        <input type="password" id="oldpassword" className="form-control rounded-pill" ref={oldpasswordRef} />
                    </div>
                    <div className="form-outline mb-4 ">
                        <strong>
                            <label className="form-label" for="newpassword">New Password</label>
                        </strong>
                        <input type="password" id="newpassword" className="form-control rounded-pill" ref={passwordRef} />
                    </div>
                    <div className="form-outline mb-4 ">
                        <strong>
                            <label className="form-label" for="confirmnewpassword">Confirm New Password</label>
                        </strong>
                        <input type="password" id="confirmnewpassword" className="form-control rounded-pill" ref={confirmpasswordRef} />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block w-100 rounded-pill" disabled={one}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PasswordReset
