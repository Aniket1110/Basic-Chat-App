import React from 'react'
import { Icon } from '@iconify/react';
import "../App.css"
import Mysvg from "../wave.svg"
import "firebase/compat/app"
import { useNavigate } from 'react-router-dom';

import { auth } from "./Firebase";

const Login = () => {

    const backgroundStyle = {
        backgroundImage: `url(${Mysvg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
    };

    const history = useNavigate();

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
                        <form>
                            <div className='p-4 fs-4'>
                                <strong>
                                    <Icon icon="ant-design:login-outlined" className='mx-2' />Login
                                </strong>
                            </div>
                            <a className="btn btn-outline-dark btn-block  w-100 rounded-pill" href='#' role="button">
                                <strong>
                                    <Icon icon="flat-color-icons:google" className="m-1" />Login with Google
                                </strong>
                            </a>
                            <div className="divider d-flex align-items-center my-4">
                                <strong>
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </strong>
                            </div>
                            <div className="form-outline mb-4">
                                <strong>
                                    <label className="form-label" for="emailid">Email address</label>
                                </strong>
                                <input type="email" id="emailid" className="form-control form-control-lg  rounded-pill" />
                            </div>
                            <div className="form-outline mb-4 ">
                                <strong>
                                    <label className="form-label" for="password">Password</label>
                                </strong>
                                <input type="password" id="password" className="form-control form-control-lg  rounded-pill" />
                            </div>
                            <div className="d-flex justify-content-around align-items-center mb-4" >

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="checkbox"
                                    />
                                    <strong>
                                        <label className="form-check-label" for="checkbox"> Remember me </label>
                                    </strong>
                                </div>
                                <a href="#" >Forgot password?</a>
                            </div>
                            <button type="button" class="btn btn-primary btn-block w-100 rounded-pill">Log In</button>

                            <div class="d-flex align-items-center justify-content-center py-4">
                                <strong><p class="mb-0 me-2">Don't have an account?</p></strong>
                                <button type="button" class="btn btn-outline-danger" onClick={() => history('/register')}>Create new</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
