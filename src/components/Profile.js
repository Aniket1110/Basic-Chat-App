import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Profile = () => {

    const { user } = useAuth()

    console.log(user)

    return (
        <div className='h-100 w-100'>
            <div className="row p-3 bg-dark text-light">
                <div className="col-2 fs-2 text-center"><strong>Now Chattt</strong></div>
                <div className="col-8 text-center fs-2"></div>
                <div className="col-2 text-center fs-4">
                    <Link to='/home'>
                        <Icon icon="icomoon-free:cross" />
                    </Link>
                </div>
            </div>
            <div className='vh-75 row'>
                <div className="col-4"></div>
                <div className='col-4 shadow-lg p-3 mb-5 bg-white round'>
                    <div className='p-4 fs-4 text-center'>
                        <strong>
                            Profile
                        </strong>
                    </div>
                    <div className='p-3 fs-4'>
                        Name - {user.displayName}
                    </div>
                    <div className='p-3 fs-4'>
                        Email - {user.email}
                    </div>
                    <Link to='/home/profile/update-profile'>
                        <button className='btn btn-primary btn-block w-100 rounded-pill p-2 m-1'>Update Profile</button>
                    </Link>

                </div>
                <div className="col-4"></div>

            </div>
        </div>

    )
}

export default Profile
