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
    const [loading , setloading] = useState(true)

    const Logout = async () => {
        try {
            await logout()
            navigate('/login', { replace: true })
        } catch(e) {
            console.log(e.message)
        }
    }

    useEffect(() => {

        if(!user) {
            navigate('/login',{replace:true})
            return;
        }

        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project-id" : "a4204b04-85c7-4463-b8c3-8e1e6cb7af1a",
                "user-name": user.email,
                "user-secret": user.uid
            }
        }).then(() => {
            setloading(false)
        }).catch(() => {

            let data = new FormData()
            data.append('email' , user.email)
            data.append('username', user.email)
            data.append('secret', user.uid)

            axios.post('https://api.chatengine.io/users/', data , {
                headers : {
                    "private-key": "dba4d5da-6b4a-404c-a7ce-6f461cbac439"
                }
            }).then(() => {
                setloading(false)
            }).catch((err) => console.log(err))
        })
        
    },[user , navigate])

    if(!user || loading) return <Loading/>

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
                            <Dropdown.Item href="/password-reset">Change Password</Dropdown.Item>
                            <Dropdown.Item >
                                <p onClick={Logout}>Logout</p>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <ChatEngine 
              height = "85vh"
              projectID = "a4204b04-85c7-4463-b8c3-8e1e6cb7af1a"
              userName = {user.email}
              userSecret= {user.uid}
            />

        </div>
    )
}

export default Home
