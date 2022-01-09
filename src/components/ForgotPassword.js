import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const Register = () => {

    const emailRef = useRef()

    const { forgotpassword } = useAuth()
    const [msg, setmsg] = useState('')
    const [err, seterr] = useState(false)
    const [done, setdone] = useState(false)
    const [one , setone] = useState(false)
    
    async function submit(e) {
        e.preventDefault()
        setmsg('')
        seterr(false)
        setdone(false)

        try {
            await forgotpassword(emailRef.current.value);
            setmsg('check your inbox for further instructions')
            setdone(true)
            setone(true)
           
        }
        catch (e) {
           if(e.message == 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).') {
               setmsg('user not found')
           }
           else setmsg('An Error occured')
           seterr(true)
        }

    }

    return (
        <div className='vh-100'>
            <div className="container py-5">
                <div className="h-100">
                    <div className="shadow-lg p-3 mb-5 bg-white round mx-auto register">
                        <form onSubmit={submit}>
                            <div className='fs-3 text-center'>
                                <strong>Pasword Reset</strong>
                            </div>
                            <div className='w-100 rounded mt-3 text-center' style={ err ? { "backgroundColor": "#f0b2b5", "padding":"15px" } : done ? { "backgroundColor": "#9cf7df","padding":"15px" } : { "backgroundColor": "white" }}><strong>{msg}</strong></div> : <div></div>
                            <div className="form-outline ">
                                <strong>
                                    <label className="form-label" for="emailid">Enter Email </label>
                                </strong>
                                <input type="email" id="emailid" className="form-control   rounded-pill" ref={emailRef} />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block w-100 rounded-pill my-4" disabled={one}>Send Mail</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
