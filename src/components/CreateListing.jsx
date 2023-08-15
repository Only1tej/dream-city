import React, { useState } from 'react'

const CreateListing = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        photos: {},
    })
    const { name, price, description, location, landmark, distance, payment, paymentFormat, plots, apartment, amenities, document, purchaseType, initialDeposit, duration, installment, outright, isGated, isCctv, isSecurityPersonnel, isGarage, certificateOfO, lawDeed, agreement, lease, rent, sale, photos } = formData
    return (
        <div className=' bg-[#F5E0B8] min-h-screen'>
            <div>
                <h1 className='font-bold text-3xl text-center p-3'>Create a Listing</h1>
            </div>
            <div className='md:flex lg:flex justify-center'>
                <form action="">
                    <div className='flex'>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Name</label>
                            <input type="text" placeholder='Enter a name' className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286] p-3 rounded-lg' />
                        </div>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Price</label>
                            <input type="number" className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286]  p-3 rounded-lg' placeholder='Enter the price' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Description</label>
                            <input type="text" className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286]  p-3 rounded-lg' placeholder='Enter the description' />
                        </div>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Location</label>
                            <input type="text" className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286]  p-3 rounded-lg' placeholder='Enter the location' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Landmark</label>
                            <input type="text" className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286]  p-3 rounded-lg' placeholder='Enter the nearest landmark' />
                        </div>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Distance</label>
                            <input type="text" className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286]  p-3 rounded-lg' placeholder='Enter the distance to landmark' />
                        </div>
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="" className='text-lg'>Payment</label>
                        <div>
                            {/* <button type='button' value={installment}>Installment</button> */}
                            <details className="dropdown">
                                <summary className="m-1 btn btn-ghost rounded-btn">Installment</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Initial Deposit</a></li>
                                    <li><a>Duration</a></li>
                                </ul>
                            </details>
                            <button type='button' className='btn btn-ghost rounded-btn'>Outright</button>
                        </div>
                    </div>
                    {/*                     <label className="formLabel">Sell / Rent</label>
                    <div className="formButtons">
                        <button type="button" className={type === 'sale' ? 'formButtonActive' : 'formButton'} id="type" value='sale' onClick={onMutate}>Sell</button>
                        <button type="button" className={type === 'rent' ? 'formButtonActive' : 'formButton'} id="type" value='rent' onClick={onMutate}>Rent</button>
                    </div> */}
                    <div className='lg:flex'>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Payment Format</label>
                            <input type="text" className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286]  p-3 rounded-lg' placeholder='Enter payment format' />
                        </div>
                        <div className='flex'>
                            <div className='form-control mb-2 w-[250px] p-2'>
                                <label htmlFor="" className='text-lg'>Plots</label>
                                <input type="number" className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286]  p-3 rounded-lg' placeholder='Enter number of plots' min={1} max={100} />
                            </div>
                            <div className='form-control mb-2 w-[250px] p-2'>
                                <label htmlFor="" className='text-lg'>Apartment</label>
                                <input type="number" className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286]  p-3 rounded-lg' placeholder='Enter number of apartments' min={1} max={50} />
                            </div>
                        </div>
                    </div>
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Amenities</label>
                        <input type="text" className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-1 focus:outline-[#118286]  p-3 rounded-lg' placeholder='Enter the amenities available' />
                    </div>
                    <div className='lg:flex lg:space-x-4'>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Documents</label>
                            <div className='flex space-x-8'>
                                <div>
                                    <input type="checkbox" name='cOfO' id='cOfO' />
                                    <label htmlFor="cOfO" className='ml-2'>Certificate of Occupancy</label>
                                </div>
                                <div>
                                    <input type="checkbox" name='lawDeed' id='lawDeed' />
                                    <label htmlFor="lawDeed" className='ml-2'>Law Deed</label>
                                </div>
                                <div>
                                    <input type="checkbox" name='agreement' id='agreement' />
                                    <label htmlFor="agreement" className='ml-2'>Agreement</label>
                                </div>
                            </div>
                        </div>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Purchase Type</label>
                            <div className='flex space-x-8'>
                                <div>
                                    <input type="checkbox" name='lease' id='lease' />
                                    <label htmlFor="lease" className='ml-2'>Lease</label>
                                </div>
                                <div>
                                    <input type="checkbox" name='rent' id='rent' />
                                    <label htmlFor="rent" className='ml-2'>Rent</label>
                                </div>
                                <div>
                                    <input type="checkbox" name='sale' id='sale' />
                                    <label htmlFor="sale" className='ml-2'>Sale</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="" className='text-lg'>Photos</label>
                        <p>The first image will be the cover</p>
                        <input type="file" min='4' max='6' accept='.jpg, .png, .jpeg, .avif' multiple required />
                    </div>
                    <button type='submit' className='btn normal-case text-base font-primary bg-[#F5E0B8] hover:bg-[#F5E0B8] border-none text-[#118286]'>Create Listing</button>
                </form>
            </div>
        </div>
    )
}

export default CreateListing