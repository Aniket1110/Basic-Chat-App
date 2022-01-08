import React, { useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate,Link } from 'react-router-dom'

const Register = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { register } = useAuth()
    const [err, seterr] = useState('')
    const [ok , setok] = useState(true)
    const [done, setdone] = useState(false)
    const navigate = useNavigate()

    async function submit(e) {
        e.preventDefault()
        seterr('')
        setok(true)

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setok(false)
            return seterr('Passwords do not match')
        }
        try {

            await register(emailRef.current.value, passwordRef.current.value);
            setdone(true)
            navigate('/', { replace: true })
        }
        catch (e) {
            setok(false)
            if (e.message == "Firebase: The email address is already in use by another account. (auth/email-already-in-use).") seterr('The email is already in use')
            else if (e.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') seterr('Password should be at least 6 characters')
            else if (e.message == 'Firebase: The email address is badly formatted. (auth/invalid-email).') seterr('Invalid Email')
            else seterr('An Error occured')
        }

        emailRef.current.value = ''
        passwordRef.current.value = ''
        confirmPasswordRef.current.value = ''
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
                                <strong>Register</strong>
                            </div>
                            <a className="btn btn-outline-dark btn-block  w-100 rounded-pill" href='#' role="button">
                                <strong>
                                    <Icon icon="flat-color-icons:google" className="m-1" />Sign Up with Google
                                </strong>
                            </a>
                            <div className="divider d-flex align-items-center my-4">
                                <strong>
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </strong>
                            </div>

                            {
                                !ok ? <div className='w-100 mx-auto text-center rounded-pill p-2 m-1' style={{ "backgroundColor": "#e88296" }}>{err}</div> : <div></div>
                            }

                            <div className="form-outline mb-4">
                                <strong>
                                    <label className="form-label" for="emailid">Email address</label>
                                </strong>
                                <input type="email" id="emailid" className="form-control   rounded-pill" ref={emailRef} />
                            </div>
                            <div className="form-outline mb-4 ">
                                <strong>
                                    <label className="form-label" for="password">Password</label>
                                </strong>
                                <input type="password" id="password" className="form-control rounded-pill" ref={passwordRef} />
                            </div>
                            <div className="form-outline mt-1">
                                <strong>
                                    <label className="form-label" for="password">Confirm Password</label>
                                </strong>
                                <input type="password" id="confirmpassword" className="form-control rounded-pill" ref={confirmPasswordRef} />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block w-100 rounded-pill my-4" disabled={done}>Register</button>
                            
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Register
