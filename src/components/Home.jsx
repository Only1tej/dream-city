import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../src/dreamcity/Logo.png'

function Home() {
    const navigate = useNavigate()
    const createAdmin = () => {
        navigate('/create-admin')
    }

    return (
        <>
            <div>
                <div className='flex'>
                    <div className='flex justify-center items-center w-1/2'>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="hero min-h-screen bg-[#F5E0B8] p-0 w-1/2">
                        <div className="hero-content flex-col">
                            <div className="text-right">
                                <h1 className="text-4xl font-bold text-[#008F97]">Login</h1>
                            </div>
                            <div className="w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm bg-base-100">
                                <div className="bg-[#F5E0B8]">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#F48222]">Email</span>
                                        </label>
                                        <input type="text" placeholder="Enter email" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#F48222]">Password</span>
                                        </label>
                                        <input type="password" placeholder="Enter password" className="input bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6 space-y-3">
                                        <button className="btn bg-[#118286] outline-none border-none hover:bg-[#118286]">Login</button>
                                        <button onClick={createAdmin} className='btn bg-[#F5E0B8] hover:bg-[#F5E0B8] border-none text-[#118286]'>Create Admin</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home