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
            <div className='md:flex lg:'>
                <form action="">
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Name</label>
                        <input type="text" placeholder='Enter a name' className=' bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:bg-[#F5E0B8] outline outline-[#118286] p-3 rounded-lg' />
                    </div>
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Price</label>
                        <input type="number" className='p-3 rounded-lg' placeholder='Enter the price' />
                    </div>
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Description</label>
                        <input type="text" className='p-3 rounded-lg' placeholder='Enter the description' />
                    </div>
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Location</label>
                        <input type="text" className='p-3 rounded-lg' placeholder='Enter the location' />
                    </div>
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Landmark</label>
                        <input type="text" className='p-3 rounded-lg' placeholder='Enter the nearest landmark' />
                    </div>
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Distance</label>
                        <input type="text" className='p-3 rounded-lg' placeholder='Enter the distance to landmark' />
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
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Payment Format</label>
                        <input type="text" className='p-3 rounded-lg' placeholder='Enter payment format' />
                    </div>
                    <div className='flex'>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Plots</label>
                            <input type="number" className='p-3 rounded-lg' placeholder='Enter number of plots' min={1} max={100} />
                        </div>
                        <div className='form-control mb-2 w-[500px] p-2'>
                            <label htmlFor="" className='text-lg'>Apartment</label>
                            <input type="number" className='p-3 rounded-lg' placeholder='Enter number of apartments' min={1} max={50} />
                        </div>
                    </div>
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Amenities</label>
                        <input type="text" className='p-3 rounded-lg' placeholder='Enter the amenities available' />
                    </div>
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Documents</label>
                        <input type="text" className='p-3 rounded-lg' placeholder='Enter documents to be provided' />
                    </div>
                    <div className='form-control mb-2 w-[500px] p-2'>
                        <label htmlFor="" className='text-lg'>Purchase Type</label>
                        <div>
                            <input type="checkbox" name='lease' id='lease' />
                            <label htmlFor="lease">Lease</label>
                        </div>
                        <div>
                            <input type="checkbox" name='rent' id='rent' />
                            <label htmlFor="rent">Rent</label>
                        </div>
                        <div>
                            <input type="checkbox" name='sale' id='sale' />
                            <label htmlFor="sale">Sale</label>
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