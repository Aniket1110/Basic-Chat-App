import React, { useState } from 'react'
import { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'

const PasswordReset = () => {

    const oldpasswordRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const { resetpassword } = useAuth()
    const [msg, setmsg] = useState()
    const [err, seterr] = useState(false)
    const [done, setdone] = useState(false)
    const [one, setone] = useState(false)

    const submit = async (e) => {
        e.preventDefault()
        setmsg(' ')
        setdone(false)
        seterr(false)

        if (passwordRef.current.value !== confirmpasswordRef.current.value) {
            return setmsg('Passwords do not match')
        }
        try {
            await resetpassword(oldpasswordRef.current.value, passwordRef.current.value)
            setmsg('Password changed !')
            setdone(true)
            setone(true)

        } catch (e) {
            console.log(e)
            seterr(true)
            setmsg('An error occured')
        }
    }

    return (
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 shadow-lg p-3 mb-5 bg-white round">
                <form onSubmit={submit}>
                    <div className='p-4 fs-4 text-center'>
                        <strong>
                            Password Reset
                        </strong>
                    </div>
                    <div className='w-100 rounded mt-3' style={err ? { "backgroundColor": "#e88296", "padding": "10px" } : done ? { "backgroundColor": "#9ff4b1", "padding": "10px" } : { "backgroundColor": "white" }}>{msg}</div> : <div></div>
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
            <div className="col-4"></div>
        </div>
    )
}

export default PasswordReset
