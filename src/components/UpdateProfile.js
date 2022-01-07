import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const UpdateProfile = () => {

    const {user} = useAuth()

    const submit = async() => {
        
    }

    return (
        <div className='vh-100'>
            <div className="container py-5">
                <div className="row h-100">
                    <div className="col-4"></div>
                    <div className="col-4 shadow-lg p-3 mb-5 bg-white round">
                        <form onSubmit={submit}>
                            <div className='p-4 fs-3 text-center'>
                                <strong>Update Profile</strong>
                            </div>

                            <div className="form-outline mb-4">
                                <strong>
                                    <label className="form-label" for="emailid">Email address</label>
                                </strong>
                                <input type="email" id="emailid" className="form-control   rounded-pill"  value={user.email}/>
                            </div>
                            <div className="form-outline mb-4 ">
                                <strong>
                                    <label className="form-label" for="name">UserName</label>
                                </strong>
                                <input type="password" id="name" className="form-control rounded-pill" value={user.displayName}/>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block w-100 rounded-pill my-4" >Update</button>

                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile
