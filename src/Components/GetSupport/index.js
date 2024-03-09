import React from 'react'
import Support from '../../Asset/web_size_crop_JPG-corp-businesswoman-wearing-headset.jpg'
import award from '../../Asset/web_size_crop_JPG-corp-stevie-awards-emblem-logo.jpg'
import { Button } from '@mui/material'

const GetSupport = () => {
    const title = [
        {
            id: 1,
            headding: 'Support Requests',
            paragraph: 'EpicCare offers proactive insights for an optimised self-service/assisted-service model. If you require more help, engage with an experienced, industry-wise support analyst.',
            button: 'LOG IN TO EPPICCARE'
        },
        {
            id: 2,
            headding: 'Product Documentation and Downloads',
            paragraph: 'Stay up to date with the latest product downloads and documentation from EpicWeb. The EpicWeb portal helps you stay current with Epicor solutions and tools.',
            button: 'LOG IN TO EPPICWEB'
        },
        {
            id: 3,
            headding: 'Cloud Status',
            paragraph: 'Cloud Trust Center at status.epicor.com posts cloud notifications like scheduled maintenance or updates in the event of a rare outage. Subscribe to email or RSS feed alerts for your cloud products and datacenters.',
            button: 'STATUS.EPICOR.COM'
        },
        {
            id: 4,
            headding: 'Contact Your Account Manager',
            paragraph: 'If you’re having trouble registering for a portal or have a question about your account, get in touch with your customer account manager directly. If you’re unsure who to contact, chat with us and we’ll find the right person.',
            button: 'FIND MY ACCOUNT MANAGER'
        },
        {
            id: 5,
            headding: 'Single Sign-on With Epicor Identity',
            paragraph: 'Streamline your log ins with our single sign-on service Epicor Identity (IdP). Securely access the EpicCare support portal and the EpicWeb product site using one set of credentials.',
            button: 'REGISTER FOR SINGLE SIGH-ON'
        },
    ]
    return (
        <>
            <div className='flex px-32 mt-32 bg-[#093747] items-center'>
                <div className='flex flex-col w-[60%] gap-7 p-14 text-white bg-[#093747]'>
                    <p>Support</p>
                    <p className='text-5xl font-semibold'>We’re Here for You</p>
                    <p className='text-xl'>Get the product knowledge and industry expertise you need to keep your business running smoothly. Epicor Support helps you stay on track—choose self-service resources or speak with an experienced team member.</p>
                    <button className='bg-[#e00700] p-2 text-lg rounded-md w-48'>LOGIN TO EPICCARE</button>
                </div>
                <div className='w-[40%]'>
                    <img src={Support} alt="" className='rounded-xl' />
                </div>
            </div>
            <div className='flex justify-between px-36 p-10'>
                <div className='flex flex-col w-[60%] gap-7 p-14'>
                    <p className='text-5xl font-semibold'>24/7 Support</p>
                    <p className='text-lg text-slate-400'>The award-winning EpicCare support portal is available 24/7, empowering you with information and resources on your schedule. Find answers easily on your own, and get assistance when you need it. EpicCare is your site for self-help resources, account information, support case updates, and other productivity-boosting tools.</p>
                    <button className='bg-[#327e9c] p-2 rounded-md w-60 text-white'>LEARN MORE IN EPICCARE</button>
                </div>
                <div className='w-[40%]'>
                    <img src={award} alt="" className='rounded-xl' />
                </div>
            </div>
            <div className='text-5xl font-semibold px-36 p-10'>
                <p>Epicor Resources</p>
            </div>
            <div key={''} className='grid grid-cols-2 justify-between px-36 p-20 gap-10'>
                {title.map((event) => (
                    <div className='flex flex-col justify-center gap-6'>
                        <p className='text-3xl font-semibold'>{event.headding}</p>
                        <p className='text-slate-400'>{event.paragraph}</p>
                        <Button className='!bg-[#327e9c] !text-white !w-60 !font-semibold !rounded-xl'>{event.button}</Button>
                    </div>

                ))}
            </div>
            <div className='flex flex-col gap-5'>
                <div>
                    <p className='text-5xl font-bold text-center'>Frequently Asked Questions</p>
                </div>
                <div className='px-36 flex flex-col gap-5 p-10'>
                    <div>
                        <select name="" id="" className='w-full p-4 border *:border-none *:p-2'>
                            <option value="" className='text-lg'>How can I speak to a person?</option>
                            <option value="" className='text-lg'>Once you’re logged in to EpicCare, you can find support, billing, and contacts for your products. Your plan may include unlimited online, chat and/or phone problem resolution support.</option>
                            <option value="" className='text-lg'>If you have already completed the steps above or are still having trouble accessing EpicCare, chat with an account manager or email us at <span className='text-sky-900'>customercare@epicor.com</span> .</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className='w-full p-4 border *:border-none'>
                            <option value="">Where can I find documentation?</option>
                            <option value="">Product documentation is in EpicWeb, where you can search and navigate all of the documentation available for your Epicor solution. Or, if you are signed in to EpicCare, EpicWeb can be found in the Solutions Portal dropdown in the upper right corner. If you have already completed the steps above and are still having trouble, contact your Customer Account Manager (CAM) or email us at customercare@epicor.com.</option>
                            <option value="">Types of documentation you may find for your product in EpicWeb include:</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className='w-full p-4 border *:border-none'>
                            <option value="">How can I speak to a person?</option>
                            <option value="">Once you’re logged in to EpicCare, you can find support, billing, and contacts for your products. Your plan may include unlimited online, chat and/or phone problem resolution support.</option>
                            <option value="">If you have already completed the steps above or are still having trouble accessing EpicCare, chat with an account manager or email us at <span className='text-sky-900'>customercare@epicor.com</span> .</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className='w-full p-4 border *:border-none'>
                            <option value="">How can I speak to a person?</option>
                            <option value="">Once you’re logged in to EpicCare, you can find support, billing, and contacts for your products. Your plan may include unlimited online, chat and/or phone problem resolution support.</option>
                            <option value="">If you have already completed the steps above or are still having trouble accessing EpicCare, chat with an account manager or email us at <span className='text-sky-900'>customercare@epicor.com</span> .</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className='w-full p-4 border *:border-none'>
                            <option value="">How can I speak to a person?</option>
                            <option value="">Once you’re logged in to EpicCare, you can find support, billing, and contacts for your products. Your plan may include unlimited online, chat and/or phone problem resolution support.</option>
                            <option value="">If you have already completed the steps above or are still having trouble accessing EpicCare, chat with an account manager or email us at <span className='text-sky-900'>customercare@epicor.com</span> .</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className='w-full p-4 border *:border-none'>
                            <option value="">How can I speak to a person?</option>
                            <option value="">Once you’re logged in to EpicCare, you can find support, billing, and contacts for your products. Your plan may include unlimited online, chat and/or phone problem resolution support.</option>
                            <option value="">If you have already completed the steps above or are still having trouble accessing EpicCare, chat with an account manager or email us at <span className='text-sky-900'>customercare@epicor.com</span> .</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className='w-full p-4 border *:border-none'>
                            <option value="">How can I speak to a person?</option>
                            <option value="">Once you’re logged in to EpicCare, you can find support, billing, and contacts for your products. Your plan may include unlimited online, chat and/or phone problem resolution support.</option>
                            <option value="">If you have already completed the steps above or are still having trouble accessing EpicCare, chat with an account manager or email us at <span className='text-sky-900'>customercare@epicor.com</span> .</option>
                        </select>
                    </div>
                </div>
            </div>
        </>

    )
}

export default GetSupport