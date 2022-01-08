import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

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
        //    console.log(e.message)
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
                <div className="row h-100">
                    <div className="col-4"></div>
                    <div className="col-4 shadow-lg p-3 mb-5 bg-white round">
                        <form onSubmit={submit}>
                            <div className='fs-3 text-center'>
                                <strong>Pasword Reset</strong>
                            </div>
                            <div className='w-100 rounded mt-3' style={ err ? { "backgroundColor": "#e88296", "padding":"10px" } : done ? { "backgroundColor": "#9ff4b1","padding":"10px" } : { "backgroundColor": "white" }}>{msg}</div> : <div></div>
                            <div className="form-outline ">
                                <strong>
                                    <label className="form-label" for="emailid">Enter Email </label>
                                </strong>
                                <input type="email" id="emailid" className="form-control   rounded-pill" ref={emailRef} />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block w-100 rounded-pill my-4" disabled={one}>Send Mail</button>
                            <Link to="/login" className='fs-5'><Icon icon="akar-icons:arrow-back" /> Back to Login</Link>
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Register
