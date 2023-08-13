import React from 'react'

const CreateListing = () => {
    return (
        <div className=' bg-[#F5E0B8] min-h-screen'>
            <div>
                <h1 className='font-bold text-3xl text-center p-3'>Create a Listing</h1>
            </div>
            <div>
                <form action="">
                    <div className='form-control mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter a name' />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Price</label>
                        <input type="number" placeholder='Enter the price' />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder='Enter the description' />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Location</label>
                        <input type="text" placeholder='Enter the location' />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Landmark</label>
                        <input type="text" placeholder='Enter the nearest landmark' />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Distance</label>
                        <input type="text" placeholder='Enter the distance to landmark' />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Payment</label>
                        <div>
                            <button type='button'>Installment</button>
                            <button type='button'>Outright</button>
                        </div>
                    </div>
                    {/*                     <label className="formLabel">Sell / Rent</label>
                    <div className="formButtons">
                        <button type="button" className={type === 'sale' ? 'formButtonActive' : 'formButton'} id="type" value='sale' onClick={onMutate}>Sell</button>
                        <button type="button" className={type === 'rent' ? 'formButtonActive' : 'formButton'} id="type" value='rent' onClick={onMutate}>Rent</button>
                    </div> */}
                    <div className='form-control mb-2'>
                        <label htmlFor="">Payment Format</label>
                        <input type="text" placeholder='Enter payment format' />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Plots</label>
                        <input type="number" placeholder='Enter number of plots' min={1} max={100} />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Apartment</label>
                        <input type="number" placeholder='Enter number of apartments' min={1} max={50} />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Amenities</label>
                        <input type="text" placeholder='Enter the amenities available' />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Documents</label>
                        <input type="text" placeholder='Enter documents to be provided' />
                    </div>
                    <div className='form-control mb-2'>
                        <label htmlFor="">Photos</label>
                        <p>The first image will be the cover</p>
                        <input type="file" max='6' accept='.jpg, .png, .jpeg, .avif' multiple required />
                    </div>
                    <button type='submit' className='p-2'>
                        Create Listing
                    </button>
                    <button onClick={createAdmin} className='btn normal-case text-base font-primary bg-[#F5E0B8] hover:bg-[#F5E0B8] border-none text-[#118286]'>Create Admin</button>
                </form>
            </div>
        </div>
    )
}

export default CreateListing