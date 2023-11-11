import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import logo from '../../src/dreamcity/logo_1.png'
import { v4 as uuidv4 } from 'uuid';
import Spinner from './Spinner'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CreateAdmin({ onSaveAdminDetail, adminDetail }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [photos, setPhotos] = useState([]);

    const [adminCreated, setAdminCreated] = useState(null);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const id = uuidv4()
    const unique_id = id.slice(0, 7)

    // const handleAdminSaved = (e) => {
    //     if (photos.length === 0) {
    //         return
    //     }
    //     if (firstName === '') {
    //         return
    //     }
    //     if (lastName === '') {
    //         return
    //     }
    //     if (email === '') {
    //         return
    //     }
    //     if (phoneNumber === '') {
    //         return
    //     }
    //     console.log("first name: ", firstName)
    //     console.log("last name: ", lastName)
    //     console.log("email name: ", email)
    //     console.log("phone name: ", phoneNumber)

    //     const adminDetail = { firstName, lastName, email, phoneNumber, photos, id: unique_id }
    //     e.preventDefault()
    //     onSaveAdminDetail(adminDetail)
    //     setAdminCreated(adminDetail)
    //     // navigate('/admins')
    //     // console.log(adminDetail);
    // }

    const handlePhotoUpload = (e) => {
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
            <div className="carousel rounded-full">
                {photos.map((photo, index) => (
                    <div key={index} className="carousel-item w-[100px] h-[100px]">
                        <img src={photo} alt="Property Pictures" max='1' className='w-[280px] rounded-full' />
                    </div>
                ))}
            </div>
        )
    };
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/')
    }

    const dispatch = useDispatch()

    const { user, isLoading, isSuccess, isError, message, ...rest } = useSelector(state => state.auth)
    useEffect(() => {
        if (isError) {
            // console.error(message)
            console.log(message);
        }

        //Redirect when logged in
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            console.error('Passwords do not match')
        }
        if
            (adminDetail = {
                firstName, lastName, email, password, password2, phoneNumber, photos, id: unique_id
            }) {
            dispatch(register(adminDetail))
        }
    }

    if (isLoading) {
        return <Spinner />
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
                        <div></div>
                        {
                            adminCreated === null ?
                                <div className="hero-content flex-col">
                                    <div className='ml-0'>
                                        <h1 className="ml-8 text-4xl lg:mr-[250px] font-primary font-bold text-[#008F97]">Create Admin</h1>
                                    </div>
                                    <div className=" w-72 h-[530px] md:w-[500px] md:h-[470px] lg:w-[600px] lg:h-[380px] flex-shrink-0 min-w-sm bg-base-100">

                                        <form onSubmit={onSubmit}>
                                            <div className="card-body bg-[#F5E0B8]">
                                                <div className='lg:flex lg:space-x-16 '>
                                                    <div className="form-control mb-2">
                                                        <label className="label py-0">
                                                            <span className="label-text text-[#F48222]">First Name</span>
                                                        </label>
                                                        <input type="text" value={firstName} name='firstName' required onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label py-0">
                                                            <span className="label-text text-[#F48222]">Last Name</span>
                                                        </label>
                                                        <input type="text" value={lastName} name='lastName' required onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                                    </div>
                                                </div>
                                                <div className='lg:flex lg:space-x-16 '>
                                                    <div className="form-control mb-2">
                                                        <label className="label py-0">
                                                            <span className="label-text text-[#F48222]">Email</span>
                                                        </label>
                                                        <input type="text" value={email} name='email' required onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label py-0">
                                                            <span className="label-text text-[#F48222]">Phone Number</span>
                                                        </label>
                                                        <input type="text" value={phoneNumber} name='phoneNumber' required onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter phone number" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                                    </div>
                                                </div>
                                                <div className='lg:flex lg:space-x-16 '>
                                                    <div className="form-control mb-2">
                                                        <label className="label py-0">
                                                            <span className="label-text text-[#F48222]">Password</span>
                                                        </label>
                                                        <input type="password" value={password} name='password' required onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label py-0">
                                                            <span className="label-text text-[#F48222]">Confirm Password</span>
                                                        </label>
                                                        <input type="password" value={password2} name='password2' required onChange={(e) => setPassword2(e.target.value)} placeholder="Confirm password" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    {/* <FaSquarePlus style={{ color: "#7C6A0A" }} onChange={handleImageUpload} type='file' /> */}
                                                    <input type="file" max='1' accept='.jpg, .png, .jpeg, .avif' required onChange={handlePhotoUpload} disabled={isPhotoLimitReached} />
                                                    <p className='text-sm text-[#F48222]'>The photo must not exceed one(1)</p>
                                                    {/* <button onClick={() => setImages([])}>Clear Images</button> */}
                                                    <div>{renderCarousel()}</div>
                                                </div>
                                                <div className="form-control mt-6 space-y-3">
                                                    <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white" onClick={onSubmit}>Create Admin</button>
                                                    <button onClick={handleLogin} className='btn font-primary text-base normal-case bg-[#F5E0B8] hover:bg-[#F5E0B8] border-none text-[#118286]'>Login</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                : (<div>
                                    <p className='ml-8 text-4xl lg:mr-[250px] font-primary font-bold text-[#008F97]'>Admin</p>
                                    <div>
                                        <p><span className='label-text text-[#F48222]'> First Name: </span> {adminCreated?.firstName}</p>
                                        <p> <span className='label-text text-[#F48222]'>Last Name:</span> {adminCreated?.lastName}</p>
                                        <p> <span className='label-text text-[#F48222]'>Email:</span> {adminCreated?.email}</p>
                                        <p> <span className='label-text text-[#F48222]'>Phone Number:</span> {adminCreated?.phoneNumber}</p>
                                        <figure>
                                            <div className='w-[150px] h-[150px]'>
                                                <Carousel responsive={responsive} className='rounded-full'>
                                                    {adminCreated?.photos?.map((photo, index) => (
                                                        <div key={index} className="carousel-image w-[150px] h-[150px]">
                                                            <img src={photo} alt={`Photo ${index}`} className='h-[100%] w-[150px] rounded-full' />
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            </div>
                                        </figure>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default CreateAdmin