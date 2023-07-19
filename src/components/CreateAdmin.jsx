import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../src/dreamcity/Logo.png'

function CreateAdmin() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/')
    }
    return (
        <>
            <div>
                <div className='flex'>
                    <div className='flex justify-center items-center w-1/2'>
                        <img src={logo} alt="Logo" className='' />
                    </div>
                    <div className="hero min-h-screen bg-[#F5E0B8] w-1/2">
                        <div className="hero-content flex-col">
                            <div className="text-left">
                                <h1 className="text-4xl font-bold text-[#008F97]">Create Admin</h1>
                            </div>
                            <div className="w-72 h-[530px] md:w-[500px] md:h-[470px] lg:w-[600px] lg:h-[380px] flex-shrink-0 min-w-sm bg-base-100">
                                <div className="bg-[#F5E0B8]">
                                    <div className='lg:flex lg:space-x-16 '>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-[#F48222]">First Name</span>
                                            </label>
                                            <input type="text" placeholder="Enter first name" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-[#F48222]">Last Name</span>
                                            </label>
                                            <input type="text" placeholder="Enter last name" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                    </div>
                                    <div className='lg:flex lg:space-x-16 '>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-[#F48222]">Email</span>
                                            </label>
                                            <input type="text" placeholder="Enter email" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-[#F48222]">Phone Number</span>
                                            </label>
                                            <input type="text" placeholder="Enter phone number" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                    </div>
                                    <div className="form-control mt-6 space-y-3">
                                        <button className="btn bg-[#118286] outline-none border-none hover:bg-[#118286]">Create Admin</button>
                                        <button onClick={handleLogin} className='btn bg-[#F5E0B8] hover:bg-[#F5E0B8] border-none text-[#118286]'>Login</button>
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

export default CreateAdmin