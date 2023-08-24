import React, { useState } from 'react'
import { Container, TextField, Button, Box } from '@material-ui/core'
import { ThemeProvider } from "@mui/styles";
import { PrimaryMainTheme } from "./PrimaryMainTheme";
import DrawerPage from './Drawer';
import logo from '../../src/dreamcity/logo-transparent.png'
import logo2 from '../../src/dreamcity/logo-slogan.png'
import ImageUploader from './ImageUploader';
// import { faSquarePlus } from "react-icons/fa6";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { FaSquarePlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'


{/* <FontAwesomeIcon icon={faSquarePlus} style={{ color: "#080808", }} /> */ }


// const SampleFirst = ({ formData, setForm, navigation }) => {
const SampleFirst = ({ onSubmit }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [landmark, setLandmark] = useState('')
    const [images, setImages] = useState([]);
    // console.log('formData :>> ', formData);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title, description, location, landmark, images
        }
        onSubmit(formData)
    }


    const handleImageUpload = (e) => {
        if (images.length >= 6) {
            return;
        }
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImages((prevImages) => [...prevImages, reader.result])
        }
    };

    const isImageLimitReached = images.length >= 6;
    const renderCarousel = () => {
        return (
            <div className="carousel rounded-3xl">
                {images.map((image, index) => (
                    <div key={index} className="carousel-item w-[100px] h-[100px]">
                        <img src={image} alt="Property Pictures" min='4' max='6' className='w-[280px] ' />
                    </div>
                ))}
            </div>
        )
    };
    const navigate = useNavigate()

    return (

        <div className='flex flex-row max-h-screen lg:overflow-hidden md:overflow-auto bg-white'>
            <div className='w-[315px] h-full min-h-screen bg-[#F5E0B8]'>
                <div className='flex flex-col '>
                    <div className='py-4'>
                        <img src={logo} alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                        <img src={logo2} alt="Logo" className='bg-[#F5E0B8] mx-auto mt-1' />
                    </div>
                    <a href="/create-admin" className='text-left active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px] '>Create Admin</a>
                    <a href="/listing" className='text-left active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Listings</a>
                    <a href="/create-listing" className='text-left active:bg-white focus:bg-white bg-white text-[#F48222] active:text-[#F48222] pl-[31px] py-[16px] font-medium text-lg font-primary'>Create Listing</a>
                </div>
            </div>
            <div className='sm:w-[500px] md:w-[650px] lg:w-[800px] pl-[28px] pt-[18px] pr-[32px] pb-[24px] '>
                <form onSubmit={e => {
                    e.preventDefault()
                    navigate("/listing", {
                        // replace: true,
                        state: {
                            name: "raji",
                            title, description, location, landmark, images
                        }
                    })
                    // handleSubmit()
                }}>
                    <div className="min-h-screen bg-white">
                        <div>
                            <div className='pt-[13px]'>
                                <h1 className='text-[40px] text-[#008F97] font-bold font-primary'>Create Listing</h1>
                                <p className='text-[#F48222] text-sm'>Please fill out all required informations.</p>
                            </div>
                            <div className='flex flex-col space-y-10'>
                                <div className='flex-1'>
                                    <div className='pt-[44px]'>
                                        {/* <FaSquarePlus style={{ color: "#7C6A0A" }} onChange={handleImageUpload} type='file' /> */}
                                        <input type="file" min='4' max='6' accept='.jpg, .png, .jpeg, .avif' required onChange={handleImageUpload} disabled={isImageLimitReached} />
                                        <p className='text-sm text-[#F48222]'>The images must not exceed six(6)</p>
                                        {/* <button onClick={() => setImages([])}>Clear Images</button> */}
                                        <div>{renderCarousel()}</div>
                                    </div>
                                    <div className="form-control grid grid-cols-2 gap-4 pt-[44px]">
                                        <div>
                                            <label htmlFor="title" className='text-[#F48222] text-base font-medium'>Title of property</label>
                                            <input type="text" value={title} name='title' onChange={(e) => setTitle(e.target.value)} placeholder="Type here" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="description" className='text-[#F48222] text-base font-medium'>Description</label>
                                            <input type="text" value={description} name='description' onChange={(e) => setDescription(e.target.value)} placeholder="Type here" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="location" className='text-[#F48222] text-base font-medium'>Location</label>
                                            <input type="text" value={location} name='location' onChange={(e) => setLocation(e.target.value)} placeholder="Type here" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="landmark" className='text-[#F48222] text-base font-medium'>Nearest Landmark</label>
                                            <input type="text" value={landmark} name='landmark' onChange={(e) => setLandmark(e.target.value)} placeholder="Type here" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex space-x-[44px] items-center'>
                                    <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white lg:w-[350px] md:w-[200px] w-[100px] h-[56px] " type='submit'>Add Listing</button>
                                    <button className="btn font-primary text-base normal-case bg-white outline outline-1 outline-[#118286] border-none  hover:bg-white text-[#118286] lg:w-[350px] md:w-[200px] w-[100px] h-[56px] " >Cancel</button>
                                    {/* <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white mt-6" onClick={() => navigation.next()}>Add Listing</button> */}
                                    {/* <button className="btn font-primary text-base font-semibold normal-case bg-white outline outline-[#118286] outline-1 border-none hover:bg-white text-[#118286] md:w-[375px] w-[100px] h-[56px] " >Cancel</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default SampleFirst


{/* <Container maxWidth='xs' >
    <h3 className='text-4xl font-primary font-bold text-[#008F97]'>Names</h3>
    <TextField
        label='Name'
        name='name'
        value={name}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
        className="bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"
    />
    <TextField
        label='Address'
        name='address'
        value={address}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
    />
    <TextField
        label='Description'
        name='description'
        value={description}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
    />
    <TextField
        label='Location'
        name='location'
        value={location}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
    />
    {/* <Button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white" variant='contained' fullWidth color='#118286' style={{ marginTop: '1rem' }} onClick={() => navigation.next()}>
    Next
</Button> 
</Container> */}