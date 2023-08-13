import React from 'react'
import house1 from '../../src/dreamcity/house1.jpeg'
import house2 from '../../src/dreamcity/house2.jpeg'
import house3 from '../../src/dreamcity/house3.jpeg'
import house4 from '../../src/dreamcity/house4.jpeg'
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";


const Listings = () => {
    return (
        <div className='bg-[#F5E0B8]'>
            <div>
                <div className="carousel">
                    <div id="slide1" className="carousel-item relative w-full h-[400px]">
                        <img src={house1} alt="Logo" className='w-full' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-[400px]">
                        <img src={house2} alt="Logo" className='w-full' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-[400px]">
                        <img src={house3} alt="Logo" className='w-full' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-[400px]">
                        <img src={house4} alt="Logo" className='w-full' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 my-6'>
                <div>
                    <h1 className='font-semibold font-monteserrat text-2xl text-yellow-800'>New Town Estate</h1>
                    <p className='mt-4 font-monteserrat text-yellow-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam porro ipsa corrupti eligendi sequi quidem accusamus perspiciatis alias magni, quod atque cum consequuntur, ipsam quis. Ratione eius enim qui necessitatibus.</p>
                </div>
                <div className='mt-4 space-y-3'>
                    <div className='flex space-x-4 items-center'>
                        <span className='text-[#008F97]'><FaLocationDot /></span>
                        <p className='font-semibold font-monteserrat text-xl text-[#008F97]'>Kangile, Behind Royal Valley Estate, Sango, Ilorin, Kwara State.</p>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <span className='text-[#008F97]'><FaCar /></span>
                        <p className='font-semibold text-lg text-[#008F97]'>20 minutes drive from Palms Mall.</p>
                    </div>
                </div>
                <div className='my-3'>
                    <div class="grid grid-cols-2 gap-4">
                        <div className='bg-yellow-500 rounded-sm p-3'>
                            <h1 className='text-yellow-800 font-monteserrat'>Plot</h1>
                            <p className='text-[#008F97] font-semibold font-monteserrat'>150 plots available</p>
                        </div>
                        <div className='bg-yellow-500 rounded-sm p-3'>
                            <h1 className='text-yellow-800 font-monteserrat'>Status</h1>
                            <p className='text-[#008F97] font-semibold font-monteserrat'>For Sale</p>
                        </div>
                        <div className='bg-yellow-500 rounded-sm p-3'>
                            <h1 className='text-yellow-800 font-monteserrat'>Payment type</h1>
                            <p className='text-[#008F97] font-semibold font-monteserrat'>Outright</p>
                        </div>
                        <div className='bg-yellow-500 rounded-sm p-3'>
                            <h1 className='text-yellow-800 font-monteserrat'>Price</h1>
                            <p className='text-[#008F97] font-semibold font-monteserrat'>#6,000,000</p>
                        </div>
                        <div className='bg-yellow-500 rounded-sm p-3'>
                            <h1 className='text-yellow-800 font-monteserrat'>Amenities</h1>
                            <p className='text-[#008F97] font-semibold font-monteserrat'>Gate</p>
                        </div>
                    </div>
                </div>
                <div className='my-3'>
                    <button className="btn w-full font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white">Invest</button>
                </div>
            </div>
        </div>
    )
}

export default Listings