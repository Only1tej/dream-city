import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/dreamcity/logo-transparent.png'
import logo2 from '../../src/dreamcity/logo-slogan.png'
import SampleFirst from './SampleFirst'
import { useLocation } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SampleFirstSubmit = ({ formData, listings }) => {
    const { state } = useLocation()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [location, setLocation] = useState('')
    const [landmark, setLandmark] = useState('')
    // console.log('formData :>> ', formData);
    // console.log("Location data", location)
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(title, description, location, landmark)
    }

    // imports


    // render


    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 1,
    //         slidesToSlide: 1,
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 1,
    //         slidesToSlide: 1,
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1,
    //     },
    // };


    return (
        <>
            {/* <div className='flex flex-row max-h-screen lg:overflow-hidden md:overflow-auto bg-white'> */}
            <div className='flex flex-row md:flex md:flex-row max-h-screen  lg:h-full bg-white ' >
                <div className='w-[315px] h-full fixed min-h-screen bg-[#F5E0B8]'>
                    <div className='flex flex-col '>
                        <div className='py-4'>
                            <img src={logo} alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                            <img src={logo2} alt="Logo" className='bg-[#F5E0B8] mx-auto mt-1' />
                        </div>
                        <Link to="/create-admin" className='text-left active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px] '>Create Admin</Link>
                        <Link to="/listing" className='text-left active:bg-white focus:bg-white bg-white text-[#F48222] active:text-[#F48222] pl-[31px] py-[16px] font-medium text-lg font-primary'>Listings</Link>
                        <Link to="/create-listing" className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Create Listing</Link>
                    </div>
                </div>
                <div className='mt-[18px] mr-[33px] ml-[333px] mb-[19px]'>
                    <div>
                        <input type="search" placeholder="Search" className="input input-bordered w-[275px] md:w-[468px] h-[33px] rounded-none bg-white" />
                    </div>

                    {/* <div className="listings">
                        <h2>Listings</h2>
                        <ul>
                            {listings.map((listing, index) => (
                                <li key={index}>
                                    <Link to={`/listing/${index}`}>{listing.title}</Link>
                                    <Link to={`/listing/${index}`}>{listing.description}</Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div class="grid lg:grid-cols-4  md:grid-cols-3 gap-x-12 grid-cols-2">
                        {listings.map((listing, index) => (
                            <div className='w-[285px] h-[239px] mt-[40px] mr-[200px]'>
                                <div className='w-[285px] h-[160px] rounded-t-xl carousel carousel-center'>
                                    {state?.images?.map((image, index) => (
                                        <div key={index} className='' >
                                            <img src={image} alt={`Image ${index}`} width='100' />
                                        </div>
                                    ))}
                                    {
                                        listing?.images?.map((image, index) => (
                                            <div key={index} className='' >
                                                <img src={image} alt={`Image ${index}`} width='100' />
                                            </div>
                                        ))}
                                    {/* //Show only one image */}
                                    {/* {state?.images?.length > 0 && (
                                <div className=''>
                                    <img src={state.images[0]} alt={`Image 0`} width='100' className='carousel-item' />
                                </div>
                            )} */}
                                    {/* <Carousel responsive={responsive}>
                                        {images?.map((image, index) => (
                                            <div key={index} className="carousel-image">
                                                <img src={image} alt={`Image ${index}`} />
                                            </div>
                                        ))}
                                    </Carousel> */}
                                </div>
                                <div className=' bg-[#F5E0B8] rounded-b-xl p-1'>
                                    <p className='text-[#118286] text-sm font-primary font-semibold'>{listing.title}</p>
                                    <p className='text-[#118286] font-primary font-normal'>{state?.description}{listing.description}</p>
                                    <p className='text-[#118286] text-xs font-primary font-normal'> {state?.location}{listing.location}</p>
                                    <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.landmark}{listing.landmark}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SampleFirstSubmit

