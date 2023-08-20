import React from 'react'
import { Container, TextField, Button, Box } from '@material-ui/core'
import { ThemeProvider } from "@mui/styles";
import { PrimaryMainTheme } from "./PrimaryMainTheme";
import DrawerPage from './Drawer';
import logo from '../../src/dreamcity/logo-transparent.png'
import logo2 from '../../src/dreamcity/logo-slogan.png'


const SampleFirst = ({ formData, setForm, navigation }) => {
    const { name, address, description, location } = formData
    console.log('formData :>> ', formData);
    return (
        <ThemeProvider theme={PrimaryMainTheme} >
            <div className='flex flex-row md:flex md:flex-column'>
                <div className='w-[315px] h-full fixed bg-[#F5E0B8]'>
                    <div className='flex flex-col space-y-4'>
                        <div>
                            <img src={logo} alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                            <img src={logo2} alt="Logo" className='bg-[#F5E0B8] mx-auto mt-1' />
                        </div>
                        <a href="/create-admin" className='text-center active:bg-white text-[#118286] active:text-[#F48222]'>Create Admin</a>
                        <a href="/listing" className='text-center active:bg-white text-[#118286] active:text-[#F48222]'>Listings</a>
                        <a href="/create-listing" className='text-center active:bg-white text-[#118286] active:text-[#F48222]'>Create Listing</a>
                    </div>
                </div>
                <div className="hero min-h-screen bg-white">
                    <div className="form-control">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white mt-6" onClick={() => navigation.next()}>Next</button>
                </div>
            </div>
        </ThemeProvider>
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