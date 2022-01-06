import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Icon } from '@iconify/react'
import { Dropdown } from 'react-bootstrap'

const Home = () => {

    const { logout } = useAuth()
    const [err, seterr] = useState()
    const navigate = useNavigate()

    const Logout = async () => {
        seterr('')
        try {
            await logout()
            navigate('/', { replace: true })
        }
        catch {
            seterr('Failed to logout')
        }
    }

    return (
        <div className='app h-100'>
            <div className='row bg-dark p-3 text-light fs-3'>
                <div className="col-3">Now Chattt</div>
                <div className="col-6"></div>
                <div className="col-3 text-end">

                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <Icon icon="healthicons:ui-user-profile" className='fs-3' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="home/profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="home/password-reset">Change Password</Dropdown.Item>
                            <Dropdown.Item >
                                <p onClick={Logout}>Logout</p>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

        </div>
    )
}

export default Home
