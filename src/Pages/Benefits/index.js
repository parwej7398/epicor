import React from 'react'
import Grow_Efficiently from '../../Asset/st-engineer-manufacturing-tool-pc.png'
import Drive_Supply_Chain_Agility from '../../Asset/st-employee-boxes-mms.png'
import Deepen_Customer_Relationships from '../../Asset/st-employee-devices-sell.png'

const Benefits = () => {
    return (
        <>
            <div id='Benefits' className='flex p-10 flex-col gap-10 text-center px-32'>
                <p className='text-5xl text-center font-semibold'>Benefits to Manufacturers</p>
                <p className='text-xl'>Market Research company IDC reported that Epicor customers benefit, on average, by more than five times their investment costs.</p>
                <div className='flex  justify-between px-32'>
                    <div className='*:text-xl *:font-semibold text-[#053b54ff]'>
                        <p>14.5%</p>
                        <p>Higher Total Revenue</p>
                    </div>
                    <div className='*:text-xl *:font-semibold text-[#053b54ff]'>
                        <p>373%</p>
                        <p>3-Year ROI</p>
                    </div>
                    <div className='*:text-xl *:font-semibold text-[#053b54ff]'>
                        <p>9 mos.</p>
                        <p>Payback Period</p>
                    </div>
                    <div className='*:text-xl *:font-semibold text-[#053b54ff]'>
                        <p>94%</p>
                        <p>Orders Delivered On Time</p>
                    </div>
                </div>
                <p className=' rounded-xl ml-[34rem] bg-[#278271ff] w-44 p-3 items-center text-center text-white'>GET THE REPORT</p>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center px-36'>
                    <div><img src={Grow_Efficiently} alt="" /></div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-5xl font-semibold'>Grow Efficiently</p>
                        <p className='text-lg text-slate-500'>Accelerate your growth with business solutions that continually innovate with the latest technology including IoT, AI, and ML.</p>
                        <div className='text-lg text-slate-500'>
                            <p>• Drive automation throughout the business from the top floor to the plant floor.</p>
                            <p>• Empower your workforce with collaborative experiences, intelligent insight, and    productivity tools.</p>
                            <p>• Streamline operations with a foundation of best practices for manufacturers, easily extended as your business needs change.</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center px-36'>
                    <div><img src={Drive_Supply_Chain_Agility} alt="" className='w-[80rem]' /></div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-5xl font-semibold'>Drive Supply Chain Agility</p>
                        <p className='text-lg text-slate-500'>Leverage advanced tools in forecasting, MRP II, planning and scheduling alongside flexible business insights to anticipate supply needs and supplier performance.</p>
                        <div className='text-lg text-slate-500'>
                            <p>• Ensure visibility across your extended enterprise for a more sustainable and flexible supply chain.</p>
                            <p>• Digitally collaborate with suppliers across all activities from RFQ to Purchase Receipt, all while benchmarking success.</p>
                            <p>• More tightly manage inventories with "at the point of activity" tracking via mobile devices.</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center px-36'>
                    <div><img src={Deepen_Customer_Relationships} alt="" /></div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-5xl font-semibold'>Deepen Customer Relationships</p>
                        <p className='text-lg text-slate-500'>Strengthen customer connections to increase revenues and expand profits with innovative digital solutions.</p>
                        <div className='text-lg text-slate-500'>
                            <p>• Enhance customer relationships with eCommerce and dealer portals enabled with visual configure, price, quote (CPQ).</p>
                            <p>• Be more responsive and grow revenues by leveraging data insights for manufacturers.</p>
                            <p>• Know your costs to deliver competitive pricing without compromising your bottom line.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </>
    )
}

export default Benefits