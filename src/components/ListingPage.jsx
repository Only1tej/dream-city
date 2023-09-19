import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import logo from '../../src/dreamcity/logo-transparent.png'
import logo2 from '../../src/dreamcity/logo-slogan.png'


const ListingPage = ({ listings }) => {
    const location = useLocation()
    console.log(location);
    let datas = location.state.listings
    return (
        <div className='min-h-screen'>
            {/* <div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                <div className='flex flex-col '>
                    <div className='py-4'>
                        <img src={logo} alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                        <img src={logo2} alt="Logo" className='bg-[#F5E0B8] mx-auto mt-1' />
                    </div>

                    <Link to="/listing" className='text-left active:bg-white focus:bg-white bg-white text-[#F48222] active:text-[#F48222] pl-[31px] py-[16px] font-medium text-lg font-primary'>Listings</Link>
                    <Link to="/create-listing" className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Create Listing</Link>
                    <Link to="/create-admin" className='text-left active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px] '>Create Admin</Link>
                </div>
            </div> */}
            {/* (listings?.map((listing, index) => ( */}
            {datas?.map((data, index) => (
                <div key={index}>
                    <h1 className='text-3xl font-bold text-center pt-4'>Welcome to our Listing Page</h1>
                    <h4>Welcome {data?.title}</h4>
                    <div className="card-body">
                        <h2 className="card-title text-[#F48222] text-xl">{data[0].title}</h2>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Description: <span className='font-thin'>{data.description}</span></p>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Location: <span className='font-thin'>{data.location}</span></p>
                    </div>
                </div>
            ))
            }
            <div>
                <h1 className='text-3xl font-bold text-center pt-4'>Welcome to our Listing Page</h1>
                <h4>Welcome {listings.title}</h4>
                <div className="card-body">
                    <h2 className="card-title text-[#F48222] text-xl">{listings.title}</h2>
                    <p className='text-[#F48222] text-sm font-primary font-bold'>Description: <span className='font-thin'>{listings.description}</span></p>
                    <p className='text-[#F48222] text-sm font-primary font-bold'>Location: <span className='font-thin'>{listings.location}</span></p>
                    <div className='flex flex-row'>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Plot: <span className='font-thin'>{listings.plot}</span></p>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Payment Type: <span className='font-thin'>{listings.paymentType}</span></p>
                    </div>
                    <p className='text-[#F48222] text-sm font-primary font-bold'>Certificate of Ownership: <span className='font-thin'>{listings?.certificateOfO === false ? 'No' : 'Yes'}</span></p>
                    <p className='text-[#F48222] text-sm font-primary font-bold'>Global Certificate of Ownership: <span className='font-thin'>{listings.globalCOfO === false ? 'No' : 'Yes'}</span></p>
                    <div className='flex flex-row'>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Agreement: <span className='font-thin'>{listings.agreement === false ? 'No' : 'Yes'}</span></p>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Law Deed: <span className='font-thin'>{listings.lawDeed === false ? 'No' : 'Yes'}</span></p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Sale: <span className='font-thin'>{listings.sale === false ? 'No' : 'Yes'}</span></p>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Survey: <span className='font-thin'>{listings.survey === false ? 'No' : 'Yes'}</span></p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Gate: <span className='font-thin'>{listings.isGated === false ? 'No' : 'Yes'}</span></p>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Garage: <span className='font-thin'>{listings.isGarage === false ? 'No' : 'Yes'}</span></p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>Security Personnel: <span className='font-thin'>{listings.isSecurityPersonnel === false ? 'No' : 'Yes'}</span></p>
                        <p className='text-[#F48222] text-sm font-primary font-bold'>CCTV: <span className='font-thin'>{listings.isCctv === false ? 'No' : 'Yes'}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingPage