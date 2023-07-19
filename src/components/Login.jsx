import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }
    // const image = './src/dreamcity/realestate.jpg'
    const image = 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-david-mcbee-1546168.jpg&fm=jpg'
    return (
        <>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Login</h1>
                        </div>
                        <div className="card w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm shadow-2xl bg-base-100">
                            <div className='p-4 card-actions justify-end'>
                                <button onClick={handleBack} className='btn btn-sm btn-primary'>Go back</button>
                            </div>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter your password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p className='text-xs md:text-center'>Do you want to sign up instead? <span className='text-green-500'><a href='/sign-up'>Sign Up</a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login