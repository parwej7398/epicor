import React from 'react'
import audiotonixs from '../../Asset/customer-audiotonix-logo-dark-gray.png'
import tuffaloy from '../../Asset/customer-tuffaloy-logo-dark-gray.png'
import betco from '../../Asset/customer-betco-logo-dark-gray.png'
import onoff from '../../Asset/customer-onoff-logo-dark-gray.png'
import stephen from '../../Asset/customer-stephen-gould-logo-dark-gray.png'
import { useNavigate } from 'react-router-dom'

const Overview = () => {
    const navigate = useNavigate()
    return (
        <>
            <div id='Overview' className='flex justify-between px-36 p-10'>
                <div className='w-[50%] flex flex-col gap-4'>
                    <p className='text-5xl font-semibold'>Made With Manufacturers, For Manufacturers</p>
                    <p className='text-slate-500'>Ready to take your manufacturing business to the next level? Epicor can help you get crystal-clear on where your business is right now and where it needs to go next. Our innovative solutions, powered by cognitive ERP, are designed to help you supercharge efficiency, turn your data into action, and stand out from the competition. Plus, with Epicor, you'll work with experts in your specific <span className='text-blue-600'>industry</span>  or <span className='text-blue-600'>manufacturing mode.</span> </p>
                </div>

                <div className='flex flex-col gap-4 *:border-sky-400 *:border *:p-3 *:rounded-md *:font-semibold'>
                    <div className='flex border gap-5 justify-between *:font-semibold items-center' >
                        <div><button onClick={() => navigate("/https://drift-lp-19510799.drift.click/40bfbd3b-589d-45e2-9b55-6c017169e5b3")}>Brochure: Epicor for Manufacturings </button></div>
                        <div><p className=' !text-sky-700'>▶</p></div>
                    </div>
                    <div className='flex border gap-5 justify-between *:font-semibold items-center'>
                        <div><p>Cybersecurity in Manufacturing </p></div>
                        <div><p className=' !text-sky-700'>▶</p></div>
                    </div>
                    <div className='flex border gap-5 justify-between *:font-semibold items-center'>
                        <div><p>Webinar Series: Critical Tech for Manufacturers  </p></div>
                        <div><p className=' !text-sky-700'>▶</p></div>
                    </div>
                    <div className='flex border gap-5 justify-between *:font-semibold items-center'>
                        <div>    <p>Article: Data Analytics for Modern ERP </p></div>
                        <div><p className=' !text-sky-700'>▶</p></div>
                    </div>
                    <div className='flex border gap-5 justify-between *:font-semibold items-center'>
                        <div><p>More Resources </p></div>
                        <div><p className=' !text-sky-700'>▶</p></div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-32 p-10'>
                <img src={audiotonixs} alt="" />
                <img src={tuffaloy} alt="" />
                <img src={betco} alt="" />
                <img src={onoff} alt="" />
                <img src={stephen} alt="" />
            </div>
        </>

    )
}

export default Overview