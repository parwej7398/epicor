import { Public, Search } from '@mui/icons-material'
import { Divider, IconButton } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='bg-[#022b3bff] text-white px-[10%] z-50 fixed top-o w-full'>
                <div className='flex items-center justify-between p-4'>
                    <div><p className='text-4xl font-serif font-semibold'>epicor</p></div>
                    <div className='bg-white rounded-md'>
                        <input type="search" className='w-[35rem]' /><IconButton ><Search /></IconButton>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IconButton ><Search className='text-white' /></IconButton>
                        <Link to={'/globalside'}><IconButton ><Public className='text-white' /></IconButton></Link>
                        <button className='p-2 rounded-md bg-[#053b54]' onClick={() => navigate('/contectus')}>CONTACT US</button>
                        <button className='p-2 rounded-md bg-[#339db8]' onClick={() => navigate('/getsupport')}>GET SUPPORT</button>
                    </div>
                </div>
                <Divider className='!bg-gray-700' />
                <div className='flex justify-center gap-12 p-3 *:text-xl'>
                    <div className='flex flex-col relative py-2 group'>
                        <div className='cursor-pointer'>Solutions</div>
                        <ul className='absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-1 !text-xl !text-black border shadow bg-gray-300 hidden group-hover:block'>
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>By Industry</p>
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>By Technology Initiative</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>By Current Software</p>
                        </ul>
                    </div>
                    <div className='flex flex-col relative py-2 group'>
                        <div className='cursor-pointer'>Products</div>
                        <ul className='absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-1 !text-xl !text-black border shadow bg-gray-300 hidden group-hover:block'>
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>All Products A to Z</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Bussiness Intelligration</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Data Management and Integration</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Digital Commerce</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Enterprise Resource Planning (ERP)</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Finacial Management</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Manufacturing Execution (MES)</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Supply Chain Management (SCM)</p>
                        </ul>
                    </div>
                    <div className='flex flex-col relative py-2 group'>
                        <div className='cursor-pointer'>Customers</div>
                        <ul className='absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-1 !text-xl !text-black border shadow bg-gray-300 hidden group-hover:block'>
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Customer Support</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Epicor Learning</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Professional Services</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Epicor Insights</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Security Services</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Upgrades & Migrations</p>
                        </ul>
                    </div>
                    <div className='flex flex-col relative py-2 group'>
                        <div className='cursor-pointer'>Resources</div>
                        <ul className='absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-1 !text-xl !text-black border shadow bg-gray-300 hidden group-hover:block'>
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Blog</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>eBook and White Papers</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Events</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Prodcast</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Success Stories</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Videos</p>
                        </ul>
                    </div>
                    <div className='flex flex-col relative py-2 group'>
                        <div className='cursor-pointer'>Company</div>
                        <ul className='absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-1 !text-xl !text-black border shadow bg-gray-300 hidden group-hover:block'>
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Why Epicor?</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Contact</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Careers</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Newsroom</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Leadership</p>
                        </ul>
                    </div>
                    <div className='flex flex-col relative py-2 group'>
                        <div className='cursor-pointer'>Partners</div>
                        <ul className='absolute cursor-pointer top-10 w-96 h-screen z-50 p-4 *:p-1 !text-xl !text-black border shadow bg-gray-300 hidden group-hover:block'>
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>ISV Partners</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Channel Partners</p><br />
                            <p className='text-sky-700 hover:bg-white hover:rounded-md hover:w-full'>Influencers</p>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header