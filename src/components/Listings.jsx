import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, Link, useParams } from 'react-router-dom'
import logo from '../../src/dreamcity/logo-transparent.png'
import logo2 from '../../src/dreamcity/logo-slogan.png'
import CreateListings from './CreateListings'
import { useLocation } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Confirmation from './Confirmation'
import Rough from './Rough'



const Listings = ({ formData, listings, setListings, setAdminCreated, setForm }) => {
    const [theList, setTheList] = useState([])
    const [search, setSearch] = useState('')
    const { state } = useLocation()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [landmark, setLandmark] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [showMyModal, setShowMyModal] = useState(false)
    const [selectedToDelete, setSelectedToDelete] = useState(null)


    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
    }

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

    const handleCloseModal = () => { setShowMyModal(false) }

    // Function to handle the search
    const handleSearch = () => {
        // const filteredListings = listings.filter((listing) =>

    };
    // console.log(searchResults);

    function removeListing(id) {
        const newListings = listings.filter((listing) => listing.id !== id);
        setListings(newListings);
    }

    useEffect(() => {
        const filteredListings = theList.filter((listing) =>
            listing.title.toLowerCase().includes(search.toLowerCase())
        );

        if (filteredListings.length > 0) { setSearchResults(filteredListings) }
        else setSearchResults(theList);

        console.log('the list ', theList)
        console.log('listing ', listings)
        // }, [listings])
    }, [search, theList])

    useEffect(() => {
        setTheList(listings);
    }, [listings])

    // useEffect(() => {
    //     setSampler(sampleData);
    // }, [])

    // console.log("the listing: ", listings)
    // console.log("the theList: ", theList)

    return (
        <>
            {/* <div className='flex flex-row max-h-screen lg:overflow-hidden md:overflow-auto bg-white'> */}
            <div className='flex flex-row md:flex md:flex-row max-h-screen lg:h-full bg-white ' >
                <div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                    <div className='flex flex-col '>
                        <div className='py-4'>
                            <img src={logo} alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                            <img src={logo2} alt="Logo" className='bg-[#F5E0B8] mx-auto mt-1' />
                        </div>
                        <Link to="/listing" className='text-left active:bg-white focus:bg-white bg-white text-[#F48222] active:text-[#F48222] pl-[31px] py-[16px] font-medium text-lg font-primary'>Listings</Link>
                        <Link to="/create-listing" className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Create Listing</Link>
                        <Link to="/create-admin" className='text-left active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px] '>Create Admin</Link>
                        <Link to="/payment" className='text-left sm:text-base text-sm active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Payment</Link>

                    </div>
                </div>
                <div className='sm:w-[500px] md:w-[650px] lg:w-[800px] pl-[28px] pt-[18px] pr-[32px] pb-[24px] lg:ml-[315px] ml-[200px]  '>
                    <div>
                        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="input input-bordered w-[275px] md:w-[468px] h-[33px] rounded-none bg-white" />
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-64 " >
                        {theList?.length === 0 ?
                            (
                                <div>
                                    <p className='lg:ml-[150px] md:ml-[40px] ml-[10px] mt-[150px] w-[400px] text-[#118286] bg-[#F5E0B8] p-2 rounded-md text-2xl font-semibold font-primary text-center'>There is no property listing for sale.
                                        <br /> To create a property listing, click <Link to="/create-listing">here.</Link></p>
                                    <Rough />
                                </div>
                            )
                            :
                            (theList?.map((listing) => (
                                // (searchResults?.map((listing) => (
                                <div key={listing.id} className=' w-[350px] h-[350px] mt-[40px] mr-[40px]'>
                                    <div className="w-[300px] h-[300px] shadow-xl rounded-3xl bg-[#F5E0B8]">
                                        <figure>
                                            <div className='w-[300px] h-[200px]'>
                                                <Carousel responsive={responsive} className='rounded-t-3xl'>
                                                    {listing?.images?.map((image, index) => (
                                                        <div key={index} className="carousel-image w-[300px] h-[200px]">
                                                            <img src={image} alt={`Image ${index}`} className='h-[100%] w-[300px] rounded-t-3xl' />
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            </div>
                                        </figure>
                                        <div className='p-2 bg-[#F5E0B8] rounded-b-3xl'>
                                            <Link to={`/listing/${listing.id}`} className="" >
                                                <h2 className="font-bold text-xl break-words">{listing.title}</h2>
                                                <p className='font-semibold text-[#F48222] text-sm font-primary break-words'><span className='text-[#118286]'>Description:</span> {listing.description}</p>
                                                <p className='font-bold'><span className='text-[#118286]'>Price:</span> &#8358;{listing.price}</p>
                                            </Link>
                                            <button type="button" className='font-primary font-bold text-bold border-solid rounded-lg bg-[#9deef1] text-[#5a371a] flex justify-between py-2 px-3 items-center ' onClick={() => {
                                                setSelectedToDelete(listing)
                                                setShowMyModal(true)
                                            }}>
                                                Remove
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            )))}
                    </div >
                </div>
            </div>
            <Confirmation onClose={handleCloseModal} visible={showMyModal} setListings={setListings} listings={listings} listing={selectedToDelete} />
        </>
    )

}
export default Listings



// < div key = { index } className = 'w-[285px] h-[239px] mt-[40px] mr-[40px]' >
//                                 <div className='w-[285px] h-[160px] rounded-t-xl carousel carousel-center'>
//                                     {/* {state?.images?.map((image, index) => (
//                                     <div key={index} className='' >
//                                         <img src={image} alt={`Image ${index}`} width='100' />
//                                     </div>
//                                 ))} */}
//                                     {
//                                         listing?.images?.map((image, index) => (
//                                             <div key={index} className='' >
//                                                 <img src={image} alt={`Image ${index}`} width='100' />
//                                             </div>
//                                         ))}
//                                     {/* //Show only one image */}
//                                     {/* {state?.images?.length > 0 && (
//                                 <div className=''>
//                                 <img src={state.images[0]} alt={`Image 0`} width='100' className='carousel-item' />
//                                 </div>
//                                 )} */}
//                                     {/* <Carousel responsive={responsive}>
//                                     {images?.map((image, index) => (
//                                         <div key={index} className="carousel-image">
//                                             <img src={image} alt={`Image ${index}`} />
//                                         </div>
//                                     ))}
//                                 </Carousel> */}
//                                 </div>
//                                 <div className=' bg-[#F5E0B8] rounded-b-xl p-1'>
//                                     {/* <p className='text-[#118286] text-sm font-primary font-semibold'>{listing.title}</p> */}
//                                     {/* <p className='text-[#118286] font-primary font-normal'>{listing.description}</p>
//                                     <p className='text-[#118286] text-xs font-primary font-normal'>{listing.location}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{listing.landmark}</p> */}
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.title}{listing?.title}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.description}{listing?.description}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.location}{listing?.location}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.landmark}{listing?.landmark}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.plot}{listing.plot}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.document}{listing.document}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.paymentType}{listing.paymentType}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.amenities}{listing.amenities}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.sale}{listing.sale}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>Agreement is {listing.agreement}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.lawDeed}{listing.lawDeed}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.isGated}{listing.isGated}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.survey}{listing.survey}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.isCctv}{listing.isCctv}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.isSecurityPersonnel}{listing.isSecurityPersonnel}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.globalCOfO}{listing.globalCOfO}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.isGarage}{listing.isGarage}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.globalCOfO}{listing.globalCOfO}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.certificateOfO}{listing.certificateOfO}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.rent}{listing.rent}</p>
//                                     <p className='text-[#F48222] text-sm font-primary font-bold'>{state?.sale}{listing.sale}</p>
//                                 </div>
//                             </div >

{/* <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-48 grid-cols-2"> */ }
{/* <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-64 space-y-48 md:space-y-24"> */ }


//                     const handleSearch = () => {
//     const filteredListings = listings.filter((listing) =>
//                     listing.title.toLowerCase().includes(searchTerm.toLowerCase())
//                     );
//                     setSearchResults(filteredListings);
// };
// (listings?.filter((listing) =>
//     search.toLowerCase() === '' ? listing : listing.title.toLowerCase().includes(search.toLowerCase())
// )
// )

// (searchResults.length === 0 ? (
//     <p>No results found.</p>
// ) : (


{/* 

 {
                                    search? {

                            < ul >
                                {
                                    searchResults.map((listing, index) => (
                                        // <li>
                                        //     <h3>{listing.title}</h3>
                                        //     <p>{listing.description}</p>
                                        // </li>
                                        <div key={index} className='w-[285px] h-[239px] mt-[40px] mr-[40px]'>
                                            <div className="card lg:card-side flex flex-column shadow-xl w-[950px] h-[350px] bg-[#9eecef]">
                                                <figure>
                                                    <div className='w-[350px] h-[350px] rounded-t-xl'>
                                                        <Carousel responsive={responsive}>
                                                            {listing?.images?.map((image, index) => (
                                                                <div key={index} className="carousel-image w-[350px] h-[350px]">
                                                                    <img src={image} alt={`Image ${index}`} className='h-[100%] w-[350px]' />
                                                                </div>
                                                            ))}
                                                        </Carousel>
                                                    </div>
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title text-[#F48222] text-xl">{listing.title}</h2>
                                                    <p className='text-[#F48222] text-sm font-primary font-bold'>Description: <span className='font-thin'>{listing.description}</span></p>
                                                    <p className='text-[#F48222] text-sm font-primary font-bold'>Location: <span className='font-thin'>{listing.location}</span></p>
                                                    <div className='flex flex-row'>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>Plot: <span className='font-thin'>{listing.plot}</span></p>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>Payment Type: <span className='font-thin'>{listing.paymentType}</span></p>
                                                    </div>
                                                    <p className='text-[#F48222] text-sm font-primary font-bold'>Certificate of Ownership: <span className='font-thin'>{listing?.certificateOfO === false ? 'No' : 'Yes'}</span></p>
                                                    <p className='text-[#F48222] text-sm font-primary font-bold'>Global Certificate of Ownership: <span className='font-thin'>{state?.globalCOfO}{listing.globalCOfO === false ? 'No' : 'Yes'}</span></p>
                                                    <div className='flex flex-row'>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>Agreement: <span className='font-thin'>{state?.agreement}{listing.agreement === false ? 'No' : 'Yes'}</span></p>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>Law Deed: <span className='font-thin'>{state?.lawDeed}{listing.lawDeed === false ? 'No' : 'Yes'}</span></p>
                                                    </div>
                                                    <div className='flex flex-row'>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>Sale: <span className='font-thin'>{state?.sale}{listing.sale === false ? 'No' : 'Yes'}</span></p>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>Survey: <span className='font-thin'>{listing.survey === false ? 'No' : 'Yes'}</span></p>
                                                    </div>
                                                    <div className='flex flex-row'>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>Gate: <span className='font-thin'>{state?.isGated}{listing.isGated === false ? 'No' : 'Yes'}</span></p>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>Garage: <span className='font-thin'>{state?.isGarage}{listing.isGarage === false ? 'No' : 'Yes'}</span></p>
                                                    </div>
                                                    <div className='flex flex-row'>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>Security Personnel: <span className='font-thin'>{state?.isSecurityPersonnel}{listing.isSecurityPersonnel === false ? 'No' : 'Yes'}</span></p>
                                                        <p className='text-[#F48222] text-sm font-primary font-bold'>CCTV: <span className='font-thin'>{state?.isCctv}{listing.isCctv === false ? 'No' : 'Yes'}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </ul>}
// */}

// import React from 'react'
