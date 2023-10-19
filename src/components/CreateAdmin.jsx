import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../src/dreamcity/logo_1.png'

function CreateAdmin({ onSaveAdminDetail }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [photos, setPhotos] = useState([]);

    const handleAdminSave = (e) => {
        if (photos.length === 0) {
            return
        }
        if (firstName === '') {
            return
        }
        if (lastName === '') {
            return
        }
        if (email === '') {
            return
        }
        if (phoneNumber === '') {
            return
        }

        const adminDetail = { firstName, lastName, email, phoneNumber, photos }
        e.preventDefault()
        onSaveAdminDetail(adminDetail)
        navigate('/admins')
        console.log(adminDetail);
    }

    const handleImageUpload = (e) => {
        if (photos.length >= 1) {
            return;
        }
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPhotos((prevPhotos) => [...prevPhotos, reader.result])
        }
    };

    const isPhotoLimitReached = photos.length >= 1;
    const renderCarousel = () => {
        return (
            <div className="carousel rounded-3xl">
                {photos.map((photo, index) => (
                    <div key={index} className="carousel-item w-[100px] h-[100px]">
                        <img src={photo} alt="Property Pictures" max='1' className='w-[280px] ' />
                    </div>
                ))}
            </div>
        )
    };
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/')
    }
    const admin = () => {
        navigate('/admins')
    }
    return (
        <>
            <div className=''>
                <div className='flex'>
                    <div className='bg-white flex flex-col justify-center items-center  w-1/2'>
                        <div className='flex'>
                            <img src={logo} alt="Logo" className='' />
                        </div>
                        <p className='font-primary italic text-black'>...the future is now</p>
                    </div>
                    <div className="hero min-h-screen bg-[#F5E0B8] w-1/2">
                        <div className="hero-content flex-col align">
                            <div className='ml-0'>
                                <h1 className="ml-8 text-4xl lg:mr-[250px] font-primary font-bold text-[#008F97]">Create Admin</h1>
                            </div>
                            <div className="card w-72 h-[530px] md:w-[500px] md:h-[470px] lg:w-[600px] lg:h-[380px] flex-shrink-0 min-w-sm bg-base-100">
                                <div className="card-body bg-[#F5E0B8]">
                                    <div className='lg:flex lg:space-x-16 '>
                                        <div className="form-control mb-2">
                                            <label className="label py-0">
                                                <span className="label-text text-[#F48222]">First Name</span>
                                            </label>
                                            <input type="text" value={firstName} name='firstName' required onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        {/*  <input type="text" value={location} name='location' required onChange={(e) => setLocation(e.target.value)} placeholder="Enter the location" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" /> */}
                                        <div className="form-control">
                                            <label className="label py-0">
                                                <span className="label-text text-[#F48222]">Last Name</span>
                                            </label>
                                            <input type="text" placeholder="Enter last name" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                    </div>
                                    <div className='lg:flex lg:space-x-16 '>
                                        <div className="form-control mb-2">
                                            <label className="label py-0">
                                                <span className="label-text text-[#F48222]">Email</span>
                                            </label>
                                            <input type="text" placeholder="Enter email" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label py-0">
                                                <span className="label-text text-[#F48222]">Phone Number</span>
                                            </label>
                                            <input type="text" placeholder="Enter phone number" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                    </div>
                                    <div className="form-control mt-6 space-y-3">
                                        <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white" onClick={handleAdminSave}>Create Admin</button>
                                        <button onClick={handleLogin} className='btn font-primary text-base normal-case bg-[#F5E0B8] hover:bg-[#F5E0B8] border-none text-[#118286]'>Login</button>
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