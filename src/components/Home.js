import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Home = () => {

    const {logout} = useAuth()
    const [err, seterr] = useState()
    const navigate = useNavigate()

    const Logout = async () => {
        seterr('')
        try {
            await logout()
            navigate('/',{replace:true})
        }
        catch{
            seterr('Failed to logout')
        }
    }

    return (
        <div>
           <button className='btn btn-lg btn-primary' onClick={Logout}>Logout</button>
        </div>
    )
}

export default Home
