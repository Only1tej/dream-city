import React from 'react'
import { useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Admins = ({ adminDetail }) => {
    // const { state } = useLocation()
    console.log(adminDetail);
    // console.log(state?.firstName);
    // console.log(state?.lastName);
    // console.log(state?.email);
    // console.log(state?.phoneNumber);
    // console.log(state?.photos);
    // console.log(state?.id);

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

    return (
        <div>
            <p>Welcome to the admin group</p>
            <div>
                <p>First Name: {adminDetail?.firstName}</p>
                <p>Last Name: {adminDetail?.lastName}</p>
                <p>Email: {adminDetail?.email}</p>
                <p>Phone Number: {adminDetail?.phoneNumber}</p>
                <p>Photo: {adminDetail?.photos}</p>
                <figure>
                    <div className='w-[300px] h-[200px]'>
                        <Carousel responsive={responsive} className='rounded-t-3xl'>
                            {adminDetail?.photos?.map((photo, index) => (
                                <div key={index} className="carousel-image w-[300px] h-[200px]">
                                    <img src={photo} alt={`Photo ${index}`} className='h-[100%] w-[300px] rounded-t-3xl' />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default Admins