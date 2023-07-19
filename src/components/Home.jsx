import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const createAdmin = () => {
        navigate('/create-admin')
    }

    return (
        <>
            <div>
                <div className="hero min-h-screen bg-white">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Login</h1>
                        </div>
                        <div className="card w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 space-y-3">
                                    <button className="btn btn-primary">Login</button>
                                    <button onClick={createAdmin} className='btn btn-ghost'>Create Admin</button>
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