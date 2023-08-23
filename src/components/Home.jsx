import React, { useState } from "react";
import logo from '../../src/dreamcity/logo_1.png'
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth/Auth";


function Home() {

    const navigate = useNavigate()
    const createAdmin = () => {
        navigate('/create-admin')
    }
    // const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const auth = useAuth();
    const location = useLocation();

    const redirectPath = location.state?.path || "/";

    const handleLogin = () => {
        auth.login(email);
        // navigate("/", { replace: true });
        navigate("/create-listing", { replace: true });
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = e => {
        if (!isValidEmail(e.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setEmail(e.target.value);
    };

    // const handleSubmit = event => {
    //     event.preventDefault();

    //     setError(null);

    //     if (isValidEmail(email)) {
    //         console.log('The email is valid');
    //     } else {
    //         setError('Email is invalid');
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        else {
            navigate('/create-listing')
        }
        // Submit the form data to the server.
    };
    const validateEmail = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };

    return (
        <>
            <div>
                <div className='flex'>
                    <div className='bg-white flex flex-col justify-center items-center  w-1/2'>
                        <div className='flex'>
                            <img src={logo} alt="Logo" className='' />
                        </div>
                        <p className='font-primary italic'>...the future is now</p>
                    </div>
                    <div className="hero min-h-screen bg-[#F5E0B8] p-0 w-1/2">
                        <div className="hero-content flex-col ">
                            <div>
                                <h1 className="text-4xl lg:mr-[460px] font-bold text-[#008F97]">Login</h1>
                            </div>
                            <div className="w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm bg-base-100">
                                <form onSubmit={handleSubmit}>
                                    <div className="bg-[#F5E0B8]">
                                        <div className="form-control mb-2">
                                            <label className="label py-0">
                                                <span className="label-text text-[#F48222]">Email</span>
                                            </label>
                                            <input type="email" required placeholder="Enter email" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" onChange={handleChange} />
                                            {error && <h2 style={{ color: 'red' }}>{error}</h2>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label py-0">
                                                <span className="label-text text-[#F48222]">Password</span>
                                            </label>
                                            <input type="password" required placeholder="Enter password" className="input bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" onChange={(e) => setPassword(e.target.value)} />
                                            <label className="label">
                                                <a href="#" className="label-text link link-hover">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6 space-y-3">
                                            <button className="btn  font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white" type='submit' >Login</button>
                                            <button onClick={createAdmin} className='btn normal-case text-base font-primary bg-[#F5E0B8] hover:bg-[#F5E0B8] border-none text-[#118286]'>Create Admin</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home