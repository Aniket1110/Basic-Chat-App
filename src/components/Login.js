import React, { useState, useRef } from 'react'
import { Icon } from '@iconify/react';
import "../App.css"
import Mysvg from "../wave.svg"
import "firebase/compat/app"
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {

    const backgroundStyle = {
        backgroundImage: `url(${Mysvg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
    };

    const navigate = useNavigate();
    const { login,loginwithgoogle } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [err, seterr] = useState('')
    const [ok, setok] = useState(true)
    const [done, setdone] = useState(false)

    async function submit(e) {
        e.preventDefault()
        seterr('')
        setok(true)

        try {
            await login(emailRef.current.value, passwordRef.current.value);
            setdone(true)
            navigate('/', { replace: true })
        }
        catch (e) {
            setok(false)
            if (e.message == 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).') seterr('Wrong Password')
            else if (e.message == 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).') seterr('User not found')
            else seterr('An Error occured')
        }

        emailRef.current.value = ''
        passwordRef.current.value = ''
        setdone(false)

    }

    return (
        <div className='vh-100'>
            <div className="container py-5">
                <div className="row h-100">
                    <div className="col-7">
                        <div className="logo fs-2 btn">
                            <strong>
                                <Icon icon="akar-icons:chat-add" /> Now Chattt
                            </strong>
                        </div>
                        <div style={backgroundStyle} className='text-center fs-1 p-5'>
                            <strong className='mt-3'>
                                Hello There!!
                            </strong>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 shadow-lg p-3 mb-5 bg-white round">
                        <form onSubmit={submit}>
                            <div className='p-4 fs-4'>
                                <strong>
                                    <Icon icon="ant-design:login-outlined" className='mx-2' />Login to Now Chattt
                                </strong>
                            </div>
                            <a className="btn btn-outline-dark btn-block  w-100 rounded-pill" role="button" onClick={loginwithgoogle}>
                                <strong>
                                    <Icon icon="flat-color-icons:google" className="m-1" />Login with Google
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
                                <input type="email" id="emailid" className="form-control rounded-pill" ref={emailRef} />
                            </div>
                            <div className="form-outline mb-4 ">
                                <strong>
                                    <label className="form-label" for="password">Password</label>
                                </strong>
                                <input type="password" id="password" className="form-control rounded-pill" ref={passwordRef} />
                            </div>
                            <div className="d-flex justify-content-around align-items-center mb-4" >
                                <Link to="/forgot-password">Forgot password?</Link>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block w-100 rounded-pill">Log In</button>

                            <div class="d-flex align-items-center justify-content-center py-4">
                                <strong><p class="mb-0 me-2">Don't have an account?</p></strong>
                                <Link type="button" class="btn btn-outline-danger" to="/register">Create new</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
