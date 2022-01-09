import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Icon } from '@iconify/react'
import { Dropdown } from 'react-bootstrap'
import { ChatEngine } from 'react-chat-engine'
import axios from 'axios'
import Loading from './Loading'

const Home = () => {

    const { logout, user } = useAuth()
    const navigate = useNavigate()
    const [loading, setloading] = useState(true)

    const Logout = async () => {
        try {
            await logout()
            navigate('/login', { replace: true })
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {

        if (!user) {
            navigate('/login', { replace: true })
            return;
        }

        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project-id": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
                "user-name": user.email,
                "user-secret": user.uid
            }
        }).then(() => {
            setloading(false)
        }).catch(() => {

            let data = new FormData()
            data.append('email', user.email)
            data.append('username', user.email)
            data.append('secret', user.uid)

            axios.post('https://api.chatengine.io/users/', data, {
                headers: {
                    "private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY
                }
            }).then(() => {
                setloading(false)
            }).catch((err) => setloading(true))
        })

    }, [user, navigate])

    if (!user || loading) return <Loading />

    return (
        <div className='app h-100'>
            <div className='row bg-dark p-3 text-light fs-3'>
                <div className="col-3  home-logo">
                    <strong>
                        <Icon icon="akar-icons:chat-add" /> Now Chattt
                    </strong>
                </div>
                <div className="col-6 text-center fs-5">{user.email}</div>
                <div className="col text-end">
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <Icon icon="healthicons:ui-user-profile" className='fs-3' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant='dark'>
                            <Dropdown.Item href="/password-reset">Change Password</Dropdown.Item>
                            <Dropdown.Item onClick={Logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <ChatEngine
                height="85vh"
                projectID = {process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
                userName={user.email}
                userSecret={user.uid}
            />

        </div>
    )
}

export default Home
