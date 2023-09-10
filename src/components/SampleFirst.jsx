import React, { useState } from 'react'
import { useForm } from 'react-hooks-helper'
import { Link } from 'react-router-dom'
import { Container, TextField, Button, Box } from '@material-ui/core'
import { ThemeProvider } from "@mui/styles";
import { PrimaryMainTheme } from "./PrimaryMainTheme";
import logo from '../../src/dreamcity/logo-transparent.png'
import logo2 from '../../src/dreamcity/logo-slogan.png'
import ImageUploader from './ImageUploader';
// import { faSquarePlus } from "react-icons/fa6";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { FaSquarePlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'


{/* <FontAwesomeIcon icon={faSquarePlus} style={{ color: "#080808", }} /> */ }


// const SampleFirst = ({ formData, setForm, navigation }) => {
const SampleFirst = ({ onSubmit, onSaveListing }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [landmark, setLandmark] = useState('')
    const [plot, setPlot] = useState('')
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
    // console.log('formData :>> ', formData);

    // const defaultData = {
    //     // payment: '',
    //     // paymentFormat: '',
    //     // initialDeposit: '',
    //     // outright: '',
    //     survey: false,
    //     isGated: false,
    //     isCctv: false,
    //     isSecurityPersonnel: false,
    //     isGarage: false,
    //     globalCOfO: true,
    //     certificateOfO: false,
    //     lawDeed: false,
    //     agreement: false,
    //     rent: false,
    //     lease: false,
    //     sale: true,
    // }
    // const [formInfo, setForm] = useForm(defaultData)
    // console.log('formInfo :>> ', formInfo);
    const handleSubmit = (e) => {
        e.preventDefault()
        //     onSubmit(formData)
    }
    // const formData = {
    //     survey, isGated, isCctv, isSecurityPersonnel, isGarage, globalCOfO, certificateOfO, lawDeed, agreement, rent, lease, sale
    // }

    // const [state, setState] = useState({
    //     survey: false,
    //     isGated: false,
    //     isCctv: false,
    //     isSecurityPersonnel: false,
    //     isGarage: false,
    //     // globalCOfO: true,
    //     // certificateOfO: false,
    //     // lawDeed: false,
    //     agreement: false,
    //     rent: false,
    //     lease: false,
    //     sale: true,
    // });

    // const setForm = (e) => {
    //     setState((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.checked,
    //     }));
    //     let boolean = null
    //     if (e.target.value === 'true') {
    //         boolean = true
    //     } else if (e.target.value === 'false') {
    //         boolean = false
    //     }
    // };


    // const [isToggled, setIsToggled] = useState(false);
    // const [lawDeed, setLawDeed] = useState(false)


    // const lawDeed = () => {
    //     setLawDeed((prevState) => !prevState);
    // };
    // const toggleState = () => {
    //     setIsToggled((prevToggled) => !prevToggled);
    // };

    //     return (
    //         <div>
    //             <p>Boolean State: {isToggled ? 'True' : 'False'}</p>
    //             <button onClick={toggleState}>Toggle</button>
    //         </div>
    //     );
    // }

    // export default BooleanStateExample;



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
        if (document === '') {
            return
        }
        if (paymentType === '') {
            return
        }
        if (amenities === '') {
            return
        }
        // const formData = { survey, isGated, isCctv, isSecurityPersonnel, isGarage, globalCOfO, certificateOfO, lawDeed, agreement, rent, lease, sale }
        const listings = { title, description, location, landmark, images, plot, amenities, paymentType, document, survey, isGated, isCctv, isSecurityPersonnel, isGarage, globalCOfO, certificateOfO, lawDeed, agreement, rent, lease, sale }
        // const listings = { title, description, location, landmark, images, plot, globalCOfO, certificateOfO, lawDeed }
        e.preventDefault()
        onSaveListing(listings)
        navigate('/listing')
    }

    const handleImageUpload = (e) => {
        if (images.length >= 6) {
            return;
        }
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImages((prevImages) => [...prevImages, reader.result])
        }
    };

    const isImageLimitReached = images.length >= 6;
    const renderCarousel = () => {
        return (
            <div className="carousel rounded-3xl">
                {images.map((image, index) => (
                    <div key={index} className="carousel-item w-[100px] h-[100px]">
                        <img src={image} alt="Property Pictures" min='4' max='6' className='w-[280px] ' />
                    </div>
                ))}
            </div>
        )
    };
    const navigate = useNavigate()

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
                                        <input type="file" min='4' max='6' accept='.jpg, .png, .jpeg, .avif' required onChange={handleImageUpload} disabled={isImageLimitReached} />
                                        <p className='text-sm text-[#F48222]'>The images must not exceed six(6)</p>
                                        {/* <button onClick={() => setImages([])}>Clear Images</button> */}
                                        <div>{renderCarousel()}</div>
                                    </div>
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
                                            <label htmlFor="paymentType" className='text-[#F48222] text-base font-medium'>Payment Type</label>
                                            <input type="text" value={paymentType} name='paymentType' disabled required onChange={(e) => setPaymentType(e.target.value)} placeholder="Enter the payment type" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" />
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
                                            {/* <label htmlFor="sale" className='text-[#F48222] text-base font-medium'>Sale</label>
                                            <input type="text" value={sale} name='sale' required onChange={(e) => setSale(e.target.value)} placeholder="Type here" className="input input-bordered w-full bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]" /> */}
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

export default SampleFirst


{/* <Container maxWidth='xs' >
    <h3 className='text-4xl font-primary font-bold text-[#008F97]'>Names</h3>
    <TextField
        label='Name'
        name='name'
        value={name}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
        className="bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"
    />
    <TextField
        label='Address'
        name='address'
        value={address}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
    />
    <TextField
        label='Description'
        name='description'
        value={description}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
    />
    <TextField
        label='Location'
        name='location'
        value={location}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
    />
    {/* <Button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white" variant='contained' fullWidth color='#118286' style={{ marginTop: '1rem' }} onClick={() => navigation.next()}>
    Next
</Button> 
</Container> */}
{/* <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white mt-6" onClick={() => navigation.next()}>Add Listing</button> */ }
{/* <button className="btn font-primary text-base font-semibold normal-case bg-white outline outline-[#118286] outline-1 border-none hover:bg-white text-[#118286] md:w-[375px] w-[100px] h-[56px] " >Cancel</button> */ }