import React, { useState } from 'react'
import logo from '../../src/dreamcity/logo-transparent.png'
import logo2 from '../../src/dreamcity/logo-slogan.png'
import { Link, useNavigate } from 'react-router-dom'


const PaymentForm = ({ onSaveListing }) => {

    const [userPhone, setUserPhone] = useState('')
    const [listingId, setListingId] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [transactionRef, setTransactionRef] = useState('')

    const navigate = useNavigate()

    const handleSave = (e) => {
        if (userPhone === '') {
            return
        }
        if (listingId === '') {
            return
        }
        if (amount === '') {
            return
        }
        if (date === '') {
            return
        }
        if (transactionRef === '') {
            return
        }
        const paymentDetails = { userPhone, listingId, amount, date, transactionRef }
        e.preventDefault()
        onSaveListing(paymentDetails)
        navigate('/payment-receipt')
    }

    return (
        <div>
            <div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                <div className='flex flex-col'>
                    <div className='py-4'>
                        <img src={logo} alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                        <img src={logo2} alt="Logo" className='bg-[#F5E0B8] mx-auto mt-1' />
                    </div>
                    <Link to="/listing" className='text-left sm:text-base text-sm active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Listings</Link>
                    <Link to="/create-listing" className='text-left sm:text-base text-sm active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Create Listing</Link>
                    <Link to="/create-admin" className='text-left sm:text-base text-sm active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Create Admin</Link>
                    <Link to="/payment" className='text-left active:bg-white focus:bg-white bg-white text-[#F48222] active:text-[#F48222] pl-[31px] py-[16px] font-medium sm:text-lg text-sm font-primary'>Payment</Link>
                </div>
            </div>
            <div className='sm:w-[500px] md:w-[650px] lg:w-[800px] pl-[28px] pt-[18px] pr-[32px] pb-[24px] lg:ml-[315px] ml-[200px]'>
                <form onSubmit={e => {
                    e.preventDefault()
                    navigate("/payment-receipt", {
                        replace: false,
                        state: {
                            userPhone, listingId, amount, date, transactionRef
                        }
                    })
                }}>
                    <div className="min-h-screen bg-white">
                        <div>
                            <div className='pt-[13px]'>
                                <h1 className='text-[40px] text-[#008F97] font-bold font-primary'>Payment Form</h1>
                                <p className='text-[#F48222] text-sm'>Please fill out all required informations.</p>
                            </div>
                            <div className='flex flex-col space-y-10'>
                                <div className='flex-1'>
                                    <div className="form-control grid grid-cols-2 gap-4 pt-[44px]">
                                        <div>
                                            <label htmlFor="userPhone" className='text-[#F48222] text-base font-medium'>User Phone Number</label>
                                            <input type="text" value={userPhone} name='userPhone' required onChange={(e) => setUserPhone(e.target.value)} placeholder="Enter the phone number" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="listingId" className='text-[#F48222] text-base font-medium'>ID</label>
                                            <input type="text" value={listingId} name='listingId' required onChange={(e) => setListingId(e.target.value)} placeholder="Enter ID" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="amount" className='text-[#F48222] text-base font-medium'>Amount</label>
                                            <input type="text" value={amount} name='amount' required onChange={(e) => setAmount(e.target.value)} placeholder="Enter the amount" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="date" className='text-[#F48222] text-base font-medium'>Date</label>
                                            <input type="text" value={date} name='date' required onChange={(e) => setDate(e.target.value)} placeholder="Enter date" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="transactionRef" className='text-[#F48222] text-base font-medium'>Transaction Reference ID</label>
                                            <input type="text" value={transactionRef} name='transactionRef' required onChange={(e) => setTransactionRef(e.target.value)} placeholder="Enter the reference ID" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex space-x-[44px] items-center'>
                                    <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white lg:w-[350px] md:w-[200px] w-[100px] h-[56px] " type='submit'>Submit</button>
                                    <button className="btn font-primary text-base normal-case bg-white outline outline-1 outline-[#118286] border-none  hover:bg-white text-[#118286] lg:w-[350px] md:w-[200px] w-[100px] h-[56px] " >Cancel</button>
                                    {/* {onClick = { handleSave }} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentForm