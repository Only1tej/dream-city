import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import logo from '../../src/dreamcity/Logo.png'

const DrawerPage = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
            <div className="bg-[#F5E0B8]">
                <IconButton>
                    <MenuIcon size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
                </IconButton>
                <Drawer anchor='left' open={isDrawerOpen} >
                    <Box width='250px' textAlign='center' role='presentation' className='bg-[#F5E0B8] min-h-screen'>
                        <Typography variant='h6' component='div'>
                            <div className='flex flex-col space-y-4'>
                                <img src={logo} alt="Logo" className='w-1/2 h-1/2 mx-auto' />
                                <a href="/create-admin" className=' rounded active:bg-white text-[#118286] active:text-[#F48222]'>Create Admin</a>
                                <a href="/listing" className='active:bg-white text-[#118286] active:text-[#F48222]'>Listings</a>
                                <a href="/create-listing" className='active:bg-white text-[#118286] active:text-[#F48222]'>Create Listing</a>
                            </div>

                        </Typography>
                    </Box>
                </Drawer>
            </div>
        </>
    )
}

export default DrawerPage;