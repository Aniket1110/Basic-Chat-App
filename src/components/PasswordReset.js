import React from 'react'
import { Icon } from '@iconify/react'
import { useRef } from 'react'

const PasswordReset = () => {

    const oldpasswordRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()

    const submit = async(e) => {}

    return (
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 shadow-lg p-3 mb-5 bg-white round">
                <form >
                    <div className='p-4 fs-4 text-center'>
                        <strong>
                          Password Reset
                        </strong>
                    </div>
                    <div className="form-outline mb-4">
                        <strong>
                            <label className="form-label" for="oldpassword">Old Password</label>
                        </strong>
                        <input type="email" id="oldpassword" className="form-control rounded-pill" ref={oldpasswordRef} />
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
                    <button type="submit" class="btn btn-primary btn-block w-100 rounded-pill">Submit</button>
                </form>
            </div>
            <div className="col-4"></div>
        </div>
    )
}

export default PasswordReset
