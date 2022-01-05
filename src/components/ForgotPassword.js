import React, { useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const emailRef = useRef()

    const { forgotpassword } = useAuth()
    const [err, seterr] = useState('')
    const [ok , setok] = useState(true)
    const [done, setdone] = useState(false)
    const navigate = useNavigate()

    async function submit(e) {
        e.preventDefault()
        seterr('')
        setok(true)
      
        try {
            await forgotpassword(emailRef.current.value);
            seterr('Check your inbox for further instructions')
            setdone(true)
        }
        catch (e) {
           console.log(e.message)
           if(e.message == 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).') {
               seterr('User not found')
           }
           else seterr('An Error occured')
           setok(false)
        }
        setdone(false)
    }

    return (
        <div className='vh-100'>
            <div className="container py-5">
                <div className="row h-100">
                    <div className="col-4"></div>
                    <div className="col-4 shadow-lg p-3 mb-5 bg-white round">
                        <form onSubmit={submit}>
                            <div className='p-4 fs-3 text-center'>
                                <strong>Forgot Password</strong>
                            </div>
                            
                            {
                                !ok ? <div className='w-100 mx-auto text-center rounded-pill p-2 m-1' style={{ "backgroundColor": "#e05e64" }}>{err}</div> : <div></div>
                            }

                            <div className="form-outline mb-4">
                                <strong>
                                    <label className="form-label" for="emailid">Enter your registered Email address</label>
                                </strong>
                                <input type="email" id="emailid" className="form-control   rounded-pill" ref={emailRef} />
                            </div>
                           
                            <button type="submit" class="btn btn-primary btn-block w-100 rounded-pill my-4" disabled={done}>Send Mail</button>
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Register
