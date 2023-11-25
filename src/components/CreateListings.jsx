import React, { useState, useEffect } from 'react'
// import { useForm } from 'react-hooks-helper'
import { Link } from 'react-router-dom'
import logo from '../../src/dreamcity/logo-transparent.png'
import logo2 from '../../src/dreamcity/logo-slogan.png'
import { FaSquarePlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Spinner from './Spinner'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Rough from './Rough';
import { createListing, reset } from '../features/listings/listingSlice';

// import { Image } from 'cloudinary-react'
// import cloudinary from '../cloudinaryConfig'



// const SampleFirst = ({ formData, setForm, navigation }) => {
const CreateListings = ({ onSubmit, onSaveListing }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [landmark, setLandmark] = useState('')
    const [plot, setPlot] = useState('')
    const [price, setPrice] = useState('')
    const [amenities, setAmenities] = useState([])
    const [document, setDocument] = useState([])
    const [paymentType, setPaymentType] = useState('Installment')
    const [images, setImages] = useState([]);
    const [survey, setSurvey] = useState(false)
    const [isGated, setIsGated] = useState(false)
    const [isCctv, setIsCctv] = useState(false)
    const [isSecurityPersonnel, setIsSecurityPersonnel] = useState(false)
    const [isGarage, setIsGarage] = useState(false)
    const [globalCOfO, setGlobalCOfO] = useState(true)
    const [certificateOfO, setCertificateOfO] = useState(false)
    const [lawDeed, setLawDeed] = useState(false)
    const [agreement, setAgreement] = useState(false)
    const [rent, setRent] = useState(false)
    const [lease, setLease] = useState(false)
    const [sale, setSale] = useState(false)
    const [imageSelected, setImageSelected] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.listings)


    const handleSubmit = (e) => {
        e.preventDefault()
        //     onSubmit(formData)
    }

    useEffect(() => {
        if (isError) {
            console.error("this is the error message: ", message)
        }

        if (isSuccess) {
            dispatch(reset())
            navigate('/listing')
        }
        dispatch(reset())
    }, [dispatch, isSuccess, isError, navigate, message]
    )

    const id = uuidv4()
    const unique_id = id.slice(0, 5)

    const handleSave = (e) => {
        if (images.length === 0) {
            return
        }
        if (title === '') {
            return
        }
        if (description === '') {
            return
        }
        if (location === '') {
            return
        }
        if (landmark === '') {
            return
        }
        if (plot === '') {
            return
        }
        if (price === '') {
            return
        }
        if (document === '') {
            return
        }
        if (paymentType === '') {
            return
        }
        if (amenities === '') {
            return
        }
        const listings = { title, description, location, landmark, images, plot, price, amenities, paymentType, document, survey, isGated, isCctv, isSecurityPersonnel, isGarage, globalCOfO, certificateOfO, lawDeed, agreement, rent, lease, sale, id: unique_id }
        e.preventDefault()
        // onSaveListing(listings)
        // console.log(listings);
        dispatch(createListing({ listings }))
        navigate('/listing')
        console.log(listings);
        // dispatch(createListing({ title, description, location, landmark, images, plot, price, amenities, paymentType, document, survey, isGated, isCctv, isSecurityPersonnel, isGarage, globalCOfO, certificateOfO, lawDeed, agreement, rent, lease, sale, id: unique_id }))
    }

    // const { user, isLoading, isSuccess, isError, message, ...rest } = useSelector(state => state.auth)
    if (isLoading) {
        return <Spinner />
    }



    // const handleImageUpload = (e) => {
    //     if (images.length >= 6) {
    //         return;
    //     }

    //     const file = e.target.files[0];

    //     function getBase64(file, callback) {
    //         const reader = new FileReader();

    //         reader.addEventListener('load', () => {
    //             callback(reader.result);
    //         });

    //         reader.readAsDataURL(file);
    //     }

    //     getBase64(file, function (base64Data) {
    //         // Here you can have your code which uses Base64 for its operation
    //         console.log("Base64 of file is", base64Data);

    //         // Move setImages inside the load event listener
    //         setImages((prevImages) => [...prevImages, base64Data]);
    //     });
    // };



    // const uploadImage = (files) => {
    //     const formData = new FormData()
    //     formData.append("file", imageSelected)
    //     formData.append("upload_preset", "nmvblrg4")

    //     axios.post('https://api.cloudinary.com/v1_1/dc7rhipsj/image/upload', formData)
    //         .then((response) => {
    //             console.log(response)
    //         })
    // }

    // const ImageUpload = () => {
    //     const [images, setImages] = useState([]);

    /** */

    // const handleImageUpload = async (e) => {
    //     if (images.length >= 6) {
    //         return;
    //     }
    //     const files = e.target.files;

    //     // Iterate over selected files
    //     for (const file of files) {
    //         const formData = new FormData();
    //         // formData.append('file', file);
    //         // formData.append('upload_preset', 'nmvblrg4'); // Set your Cloudinary upload preset

    //         // Upload file to Cloudinary////////

    //         // const response = await axios.post('https://api.cloudinary.com/v1_1/dc7rhipsj/image/upload', formData);
    //         // const data = await response.json();
    //         // console.log(data);
    //         // const imageUrl = data.secure_url;

    //         // setImages((prevImages) => [...prevImages, imageUrl]);
    //     }
    // };

    const handleImageUpload = async (e) => {
        if (images.length >= 6) {
            return;
        }
        const files = e.target.files;
        console.log("the files: ", files)

        console.log("the files: ", files.FileList)

        // for (const file of files) {
        //     const formData = new FormData();
        //     formData.append('file', file);

        // }
        // console.log("individual file: ", formData)
    }

    /** */
    // return (
    //     <div>
    //         <input type="file" multiple onChange={handleImageUpload} />
    //         {images.map((image, index) => (
    //             <img key={index} src={image} alt={`Image ${index}`} />
    //         ))}
    //     </div>
    // );
    // };

    // export default ImageUpload;

    const isImageLimitReached = images.length >= 6;
    const renderCarousel = () => {
        return (
            <div className="carousel rounded-3xl">
                {images.map((image, index) => (
                    <div key={index} className="carousel-item w-[100px] h-[100px]">
                        <img src={image} alt="Property Pictures" min='1' max='6' className='w-[280px] ' />
                    </div>
                ))}
            </div>
        )
    };



    return (

        <div className=' max-h-screen  bg-white'>
            <div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                <div className='flex flex-col'>
                    <div className='py-4'>
                        <img src={logo} alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                        <img src={logo2} alt="Logo" className='bg-[#F5E0B8] mx-auto mt-1' />
                    </div>
                    <Link to="/listing" className='text-left sm:text-base text-sm active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Listings</Link>
                    <Link to="/create-listing" className='text-left active:bg-white focus:bg-white bg-white text-[#F48222] active:text-[#F48222] pl-[31px] py-[16px] font-medium sm:text-lg text-sm font-primary'>Create Listing</Link>
                    <Link to="/create-admin" className='text-left sm:text-base text-sm active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Create Admin</Link>
                    <Link to="/payment" className='text-left sm:text-base text-sm active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Payment</Link>
                </div>
            </div>
            <div className='sm:w-[500px] md:w-[650px] lg:w-[800px] pl-[28px] pt-[18px] pr-[32px] pb-[24px] lg:ml-[315px] ml-[200px]  '>
                <form onSubmit={e => {
                    e.preventDefault()
                    navigate("/listing", {
                        // replace: true,
                        state: {
                            name: "raji",
                            title, description, location, landmark, images, plot, amenities, paymentType, document, lawDeed
                        }
                    })
                    // handleSubmit()
                }}>
                    <div className="min-h-screen bg-white">
                        <div>
                            <div className='pt-[13px]'>
                                <h1 className='text-[40px] text-[#008F97] font-bold font-primary'>Create Listing</h1>
                                <p className='text-[#F48222] text-sm'>Please fill out all required informations.</p>
                            </div>
                            <div className='flex flex-col space-y-10'>
                                <div className='flex-1'>
                                    <div className='pt-[44px]'>
                                        {/* <FaSquarePlus style={{ color: "#7C6A0A" }} onChange={handleImageUpload} type='file' /> */}
                                        <input type="file" min='1' max='6' accept='.jpg, .png, .jpeg, .avif' required onChange={handleImageUpload} disabled={isImageLimitReached} />
                                        <p className='text-sm text-[#F48222]'>The images must not exceed six(6)</p>
                                        {/* <button onClick={() => setImages([])}>Clear Images</button> */}
                                        <div>{renderCarousel()}</div>
                                    </div>
                                    <div>
                                        <input type="file" multiple onChange={handleImageUpload} />
                                        {images.map((image, index) => (
                                            <img key={index} src={image} alt={`Image ${index}`} />
                                        ))}
                                    </div>
                                    <div>
                                        <Rough />
                                    </div>
                                    {/* <div>
                                        <input type="file" name="cloud" min='1' max='6' accept='.jpg, .png, .jpeg, .avif' onChange={(e) => {
                                            setImageSelected(e.target.files[0])
                                        }} />
                                        <button onClick={uploadImage}>Upload Image</button>
                                        <Image style={{ width: 100 }} cloudName="dc7rhipsj" publicId="https://res.cloudinary.com/dc7rhipsj/image/upload/v1700153355/obzckgfwondnrdx94man.jpg" />
                                    </div> */}
                                    <div className="form-control grid grid-cols-2 gap-4 pt-[44px]">
                                        <div>
                                            <label htmlFor="title" className='text-[#F48222] text-base font-medium'>Title of property</label>
                                            <input type="text" value={title} name='title' required onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="description" className='text-[#F48222] text-base font-medium'>Description</label>
                                            <input type="text" value={description} name='description' required onChange={(e) => setDescription(e.target.value)} placeholder="Enter the description" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="location" className='text-[#F48222] text-base font-medium'>Location</label>
                                            <input type="text" value={location} name='location' required onChange={(e) => setLocation(e.target.value)} placeholder="Enter the location" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="landmark" className='text-[#F48222] text-base font-medium'>Nearest Landmark</label>
                                            <input type="text" value={landmark} name='landmark' required onChange={(e) => setLandmark(e.target.value)} placeholder="Enter the nearest landmark" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="plot" className='text-[#F48222] text-base font-medium'>Plot(s)</label>
                                            <input type="number" min={1} value={plot} name='plot' required onChange={(e) => setPlot(e.target.value)} placeholder="Enter the number of plots" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                        <div>
                                            <label htmlFor="price" className='text-[#F48222] text-base font-medium'>Price</label>
                                            <div>
                                                {/* <span>&#8358;</span> */}
                                                <input type="text" value={(price)} name='price' required onChange={(e) => setPrice(e.target.value)} min='1' max='999000000' placeholder="Enter the price" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label htmlFor="amenities" className='text-[#F48222] text-base font-medium'>Amenities</label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Survey/Layout</span>
                                                <input type="checkbox" className="checkbox" onChange={(e) => setSurvey((prevState) => !prevState)} />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Gate</span>
                                                <input type="checkbox" className="checkbox" onChange={(e) => setIsGated((prevState) => !prevState)} />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">CCTV</span>
                                                <input type="checkbox" className="checkbox" onChange={(e) => setIsCctv((prevState) => !prevState)} />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Security Personnel</span>
                                                <input type="checkbox" className="checkbox" onChange={(e) => setIsSecurityPersonnel((prevState) => !prevState)} />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Garage</span>
                                                <input type="checkbox" className="checkbox" onChange={(e) => setIsGarage((prevState) => !prevState)} />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label htmlFor="document" className='text-[#F48222] text-base font-medium'>Documents</label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Global C of O</span>
                                                <input type="checkbox" checked='checked' onChange={(e) => setGlobalCOfO((prevState) => !prevState)} className="checkbox" />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Certificate of Ownership</span>
                                                <input type="checkbox" className="checkbox" onChange={(e) => setCertificateOfO((prevState) => !prevState)} />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Law Deed</span>
                                                <input type="checkbox" className="checkbox" onChange={e => setLawDeed((prevState) => !prevState)} />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Agreement</span>
                                                <input type="checkbox" className="checkbox" onChange={(e) => setAgreement((prevState) => !prevState)} />
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="sale" className='text-[#F48222] text-base font-medium'>Sale</label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Sale</span>
                                                <input type="checkbox" onChange={(e) => setSale((prevState) => !prevState)} className="checkbox" />
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="paymentType" className='text-[#F48222] text-base font-medium'>Payment Type</label>
                                            <input type="text" value={paymentType} name='paymentType' disabled required onChange={(e) => setPaymentType(e.target.value)} placeholder="Enter the payment type" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex space-x-[44px] items-center'>
                                    <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white lg:w-[350px] md:w-[200px] w-[100px] h-[56px] " onClick={handleSave} type='submit'>Add Listing</button>
                                    <button className="btn font-primary text-base normal-case bg-white outline outline-1 outline-[#118286] border-none  hover:bg-white text-[#118286] lg:w-[350px] md:w-[200px] w-[100px] h-[56px] " >Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default CreateListings