import React, { useState } from 'react'
import SampleFirst from './SampleFirst'
import { useLocation } from 'react-router-dom'

const SampleFirstSubmit = ({ formData }) => {
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



    return (
        <>
            <div className='mt-[18px] mr-[33px] ml-[19px] mb-[19px]'>
                <div>
                    <input type="search" placeholder="Search" className="input input-bordered w-[468px] h-[33px] rounded-none" />
                </div>

                <div className='w-[285px] h-[239px] mt-[40px]'>
                    <div className='w-[200px] rounded-t-xl'>
                        {state?.images?.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Image ${index}`} width='100' className='flex flex-row' />
                            </div>
                        ))}
                    </div>
                    <div className=' bg-[#F5E0B8] rounded-b-xl p-1'>
                        <p className='text-[#118286] text-sm font-primary font-semibold'>{state?.title}</p>
                        <p>Description: {state?.description}</p>
                        <p className='text-[#118286] text-xs font-primary font-normal'> {state?.location}</p>
                        <p>Nearest Landmark: {state?.landmark}</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SampleFirstSubmit