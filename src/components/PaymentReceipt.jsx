import React from 'react'
import { useLocation } from 'react-router-dom';


const PaymentReceipt = () => {
    const { state } = useLocation()

    return (
        <>
            <div className=' bg-[#F5E0B8] flex flex-col pt-9 items-center w-[600px] h-[450px] rounded-3xl mx-auto my-10'>
                <h2 className='text-4xl text-[#118286] font-primary font-bold my-5'>Payment Receipt</h2>
                <p className='text-[#F48222] text-xl font-primary font-bold mb-5'>User Phone Number: {state.userPhone}</p>
                <p className='text-[#F48222] text-xl font-primary font-bold mb-5'>Amount: {state.amount}</p>
                <p className='text-[#F48222] text-xl font-primary font-bold mb-5'>ID: {state.listingId}</p>
                <p className='text-[#F48222] text-xl font-primary font-bold mb-5'>Date: {state.date}</p>
                <p className='text-[#F48222] text-xl font-primary font-bold mb-5'>Transaction Refrence ID: {state.transactionRef}</p>
            </div>
        </>
    )
}

export default PaymentReceipt