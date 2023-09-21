import React from 'react'
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logo from '../../src/dreamcity/logo-transparent.png'
import logo2 from '../../src/dreamcity/logo-slogan.png'


const ListingPage = ({ listings }) => {
    const navigate = useNavigate()
    const { id } = useParams()
    // const location = useLocation()
    // console.log(location);
    // let datas = location.state.listings

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const back = () => {
        navigate(-1)
    }

    const listing = listings.find((listing) => listing.id === id)

    return (
        <div className='min-h-screen'>
            <div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                <div className='flex flex-col '>
                    <div className='py-4'>
                        <img src={logo} alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                        <img src={logo2} alt="Logo" className='bg-[#F5E0B8] mx-auto mt-1' />
                    </div>

                    <Link to="/listing" className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Listings</Link>
                    <Link to="/create-listing" className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Create Listing</Link>
                    <Link to="/create-admin" className='text-left active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px] '>Create Admin</Link>
                    <Link to="/payment" className='text-left sm:text-base text-sm active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Payment</Link>

                </div>
            </div>
            <div className='sm:w-[500px] md:w-[650px] lg:w-[800px] pl-[28px] pt-[18px] pr-[32px] pb-[24px] lg:ml-[315px] ml-[200px]'>
                <div>
                    <button className='ml-[180px] lg:ml-[900px] md:ml-[450px] sm:ml-[300px] py-1 px-3 text-[#118286] text-lg font-bold font-primary bg-[#F5E0B8] rounded-lg ' onClick={back}>Back</button>
                    <p className='font-bold font-primary text-4xl text-center text-[#F48222] mb-5'>{listing?.title}</p>
                    <figure>
                        <div className='lg:w-[900px] h-[450px] sm:w-[350px] md:w-[500px] '>
                            <Carousel responsive={responsive}>
                                {listing?.images?.map((image, index) => (
                                    <div key={index} className="carousel-image lg:w-[900px] h-[450px] sm:w-[350px] md:w-[500px]">
                                        <img src={image} alt={`Image ${index}`} className='h-[100%] lg:w-[900px] sm:w-[350px] md:w-[500px] rounded-3xl' />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </figure>
                    <div className='lg:w-[900px] sm:w-[350px] md:w-[500px]'>
                        <div className="card-body bg-[#9eecef] rounded-3xl mt-2">

                            <p className='text-[#F48222] text-lg font-primary font-bold'>Description: <span className='font-medium'>{listing?.description}</span></p>
                            <p className='text-[#F48222] text-lg font-primary font-bold'>Location: <span className='font-medium'>{listing?.location}</span></p>
                            <div className='flex flex-row'>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>Plot: <span className='font-medium'>{listing?.plot}</span></p>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>Payment Type: <span className='font-medium'>{listing?.paymentType}</span></p>
                            </div>
                            <p className='text-[#F48222] text-lg font-primary font-bold'>Price: <span className='font-medium'>&#8358;{listing?.price}</span></p>
                            <p className='text-[#F48222] text-lg font-primary font-bold'>Certificate of Ownership: <span className='font-medium'>{listing?.certificateOfO === false ? 'No' : 'Yes'}</span></p>
                            <p className='text-[#F48222] text-lg font-primary font-bold'>Global Certificate of Ownership: <span className='font-medium'>{listing?.globalCOfO === false ? 'No' : 'Yes'}</span></p>
                            <div className='flex flex-row'>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>Agreement: <span className='font-medium'>{listing?.agreement === false ? 'No' : 'Yes'}</span></p>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>Law Deed: <span className='font-medium'>{listing?.lawDeed === false ? 'No' : 'Yes'}</span></p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>Sale: <span className='font-medium'>{listing?.sale === false ? 'No' : 'Yes'}</span></p>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>Survey: <span className='font-medium'>{listing?.survey === false ? 'No' : 'Yes'}</span></p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>Gate: <span className='font-medium'>{listing?.isGated === false ? 'No' : 'Yes'}</span></p>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>Garage: <span className='font-medium'>{listing?.isGarage === false ? 'No' : 'Yes'}</span></p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>Security Personnel: <span className='font-medium'>{listing?.isSecurityPersonnel === false ? 'No' : 'Yes'}</span></p>
                                <p className='text-[#F48222] text-lg font-primary font-bold'>CCTV: <span className='font-medium'>{listing?.isCctv === false ? 'No' : 'Yes'}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // } */}
                {/* )) */}
                {/* } */}
            </div>
        </div>
    )
}

export default ListingPage