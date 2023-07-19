import React from 'react'
import Login from './Home'
import { useNavigate } from 'react-router-dom'

function Notyet() {
    const navigate = useNavigate()
    const login = () => {
        navigate('/login')
    }
    const signUp = () => {
        navigate('/sign-up')
    }
    const home = () => {
        navigate('/')
    }
    const header = 'src/dreamcity/DCAN_logo_sm.png'
    return (
        <>
            <div className='bg-red-300 min-h-screen'>
                <div className="flex-1">
                    <img src="src/dreamcity/DCAN_logo_sm.png" alt="header" />
                    <a className="btn btn-ghost normal-case text-xl">Dream City</a>
                </div>
                <div className='flex'>
                    <div className='w-[250px] h-[1232px] bg-white'>
                        <p className='p-2 m-1 font-bold hover:text-lg rounded-xl bg-amber-300'><a href="/">Home</a></p>
                        <p className='p-2 m-1 font-bold hover:text-lg rounded-xl bg-amber-300'>Properties</p>
                        <p className='p-2 m-1 font-bold hover:text-lg rounded-xl bg-amber-300'>Agents</p>
                        <p className='p-2 m-1 font-bold hover:text-lg rounded-xl bg-amber-300'>Payment Plan</p>
                        <p className='p-2 m-1 font-bold hover:text-lg rounded-xl bg-amber-300'>Carts</p>
                    </div>
                    <div>
                        <div className="navbar bg-base-100">
                            {/* <div className="flex-1">
                                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                            </div> */}
                            <div className="flex-none gap-2">
                                <div className="form-control">
                                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                                </div>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <button onClick={login} className="p-4 m-4 bg-teal-400 text-teal-100">Login</button>
                        <button onClick={signUp} className="p-4 m-4 bg-teal-400 text-teal-100">Sign Up</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notyet