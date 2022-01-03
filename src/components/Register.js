import React from 'react'
import { Icon } from '@iconify/react'

const Register = () => {
    return (
        <div className='vh-100'>
            <div className="container py-5">
                <div className="row h-100">
                    <div className="col-4"></div>
                  
                    <div className="col-4 shadow-lg p-3 mb-5 bg-white round">
                        <form>
                            <div className='p-4 fs-4'>
                                <strong>
                                    <Icon icon="ant-design:login-outlined" className='mx-2' /> Register Here
                                </strong>
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
                            <button type="button" class="btn btn-primary btn-block w-100 rounded-pill my-3">Register</button>

                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Register
