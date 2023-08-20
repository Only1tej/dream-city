import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import logo from '../../src/dreamcity/DCAN_logo_sm.png'

const DrawerPage = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
            <div className="bg-[#F5E0B8]">
                <IconButton>
                    <MenuIcon size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
                </IconButton>
                <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} >
                    <Box p={2} width='250px' textAlign='center' role='presentation'>
                        <Typography variant='h6' component='div'>
                            <div className='flex flex-col space-y-2'>
                                <img src={logo} alt="Logo" className='w-1/2 h-1/2 mx-auto' />
                                <a href="/" className='p-2 rounded bg-[#008F97] text-white'>Home</a>
                                <a href="/create-admin" className='p-2 rounded bg-[#008F97] text-white'>Create Admin</a>
                                <a href="/create-listing" className='p-2 rounded bg-[#008F97] text-white'>Create Listing</a>
                            </div>

                        </Typography>
                    </Box>
                </Drawer>
            </div>
        </>
    )
}

export default DrawerPage;