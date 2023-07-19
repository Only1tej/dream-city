import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateAdmin() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/')
    }
    return (
        <>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Create Admin</h1>
                    </div>
                    <div className="card w-72 h-[530px] md:w-[450px] md:h-[770px] lg:w-[600px] lg:h-[400px] flex-shrink-0 min-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className='lg:flex lg:space-x-16 '>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter first name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter last name" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='lg:flex lg:space-x-16 '>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="Enter phone number" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6 space-y-3">
                                <button className="btn btn-primary">Sign Up</button>
                                <button onClick={handleLogin} className='btn btn-ghost'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAdmin