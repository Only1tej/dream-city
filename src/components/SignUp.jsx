import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }
    // const image = './src/dreamcity/realestate.jpg'
    const image = 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-david-mcbee-1546168.jpg&fm=jpg'
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Sign Up Here.</h1>
                    </div>
                    <div className="card w-72 h-[770px] md:w-[450px] md:h-[770px] lg:w-[600px] lg:h-[530px]  flex-shrink-0 min-w-sm shadow-2xl bg-base-100">
                        <div className='p-4 card-actions justify-end'>
                            <button onClick={handleBack} className='btn btn-sm btn-primary'>Go back</button>
                        </div>
                        <div className="card-body">
                            <div className='lg:flex lg:space-x-16 '>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your first name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your last name" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='lg:flex lg:space-x-16 '>
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
                                </div>
                            </div>
                            <div className='lg:flex lg:space-x-16 '>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="Confirm your password" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text-alt text-warning">Password must match</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="Enter your phone number" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='text-xs md:text-center'>Do you want to login instead? <span className='text-green-500'><a href='/login'>Login</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp