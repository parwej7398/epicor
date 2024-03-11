import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { IconButton } from '@mui/material'
import { ChatBubble } from '@mui/icons-material'
import epicer from '../Asset/download.jpeg'

const Layout = ({ children }) => {
    return (
        <div className='flex relative flex-col'>
            <Header />
            {children}
            <div className='lg:fixed lg:right-8 lg:bottom-8 bg-[#12465e] rounded-md'>
                <img src={epicer} alt="" className='size-14 rounded-lg' />
                {/* <IconButton><ChatBubble className='!size-10 !text-white' /></IconButton> */}
            </div>
            <Footer />
        </div>
    )
}

export default Layout