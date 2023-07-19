import React from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const login = () => {
        navigate('/login')
    }
    const signUp = () => {
        navigate('/sign-up')
    }
    return (
        <>
            <div className='bg-red-300 min-h-screen'>
                <div className='flex'>
                    <div className='w-[250px] h-[1232px] bg-purple-300'>
                        <p className='p-2 m-2 font-bold hover:text-xl focus:outline-lg focus:ring focus:ring-white '>Home</p>
                        <p className='p-2 m-2 font-bold'>Properties</p>
                        <p className='p-2 m-2 font-bold'>Agents</p>
                        <p className='p-2 m-2 font-bold'>Payment Plan</p>
                        <p className='p-2 m-2 font-bold'>Carts</p>
                    </div>
                    <div>
                        <button onClick={login} className="p-4 m-4 bg-teal-400 text-teal-100">Login</button>
                        <button onClick={signUp} className="p-4 m-4 bg-teal-400 text-teal-100">Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home