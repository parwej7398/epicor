import { CropPortrait, Instagram, LinkedIn, X } from '@mui/icons-material'
import { Divider, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col gap-12 p-12 px-8 bg-[#205c6b] text-white'>
                <div>
                    <p className='text-4xl font-serif font-semibold px-36'>epicor</p>
                </div>
                <div className='flex justify-between px-36'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl'>COMPANY</p>
                        <Link to={'https://www.epicor.com/en-in/jobs/'}>
                            <p>Careers</p>
                        </Link>
                        <p>Newsroom</p>
                        <p>Locations</p>
                        <p>Contact Sales</p>
                        <p>Brand Guidelines</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl'>PARTNERS</p>
                        <p>Channel Partners</p>
                        <p>ISV Partners</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl'>TOPICS</p>
                        <p>Industry 4.0</p>
                        <p>Industry 4.0</p>
                        <p>Omnichannel Retail</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl'>LEGAL</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Settings</p>
                        <p>Compliance</p>
                    </div>
                </div>
                <Divider className='!bg-gray-400' />
                <div className='px-28'>
                    <Link to={'https://www.linkedin.com/company/epicor'}>
                        <IconButton><LinkedIn className='text-white' /></IconButton>
                    </Link>
                    <Link to={'https://twitter.com/Epicor?s=20'}>
                        <IconButton><X className='text-white' /></IconButton>
                    </Link>
                    <Link to={'https://www.instagram.com/epicor'}>
                        <IconButton><Instagram className='text-white' /></IconButton>
                    </Link>
                    <Link to={'https://www.glassdoor.co.in/Overview/Working-at-Epicor-Software-EI_IE1421.11,26.htm'}>
                        <IconButton><CropPortrait className='text-white' /></IconButton>
                    </Link>
                    <p>© Epicor Software Corporation 2024.</p>
                </div>

            </div>
        </>
    )
}

export default Footer