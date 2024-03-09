import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { IconButton } from '@mui/material'
import { ChatBubble } from '@mui/icons-material'

const Layout = ({ children }) => {
    return (
        <div className='flex relative flex-col'>
            <Header />
            {children}
            <div className='lg:fixed lg:right-5 lg:bottom-5 bg-[#12465e] rounded-md'>
                <IconButton><ChatBubble className='!size-10 !text-white' /></IconButton>
            </div>
            <Footer />
        </div>
    )
}

export default Layout