import React from 'react'

const ContactUs = () => {
    const Contact = [
        {
            id: 1,
            images: 'https://assets.epicor.com/m/36bf100c83cafbe8/original/contact-global-contacts-teal-icon-fill.svg',
            contect: 'Id like to contact an Epicor office near me.'
        },
        {
            id: 2,
            images: 'https://assets.epicor.com/m/7aa170f3797a3abb/original/Contact-Help-Teal-Icon.svg',
            contect: 'Id a customer and need support.'
        },
        {
            id: 3,
            images: 'https://assets.epicor.com/m/1259bf4f613abba7/original/Contact-Demo-Teal-Icon.svg',
            contect: 'Id like to schedule a product demo.'
        },
        {
            id: 4,
            images: 'https://assets.epicor.com/m/551db371562f7f52/original/Contact-Quote-Teal-Icon.svg',
            contect: 'Id like to request pricing information.'
        },
        {
            id: 5,
            images: 'https://assets.epicor.com/m/5f59137f22d55ed9/original/Contact-Partner-Teal-Icon.svg',
            contect: 'Im interested in becoming a partner.'
        }
    ]
    return (
        <>
            <div className='flex flex-col gap-5 px-44 mt-32 p-24 text-white bg-[#093747]'>
                <p>Contact</p>
                <p className='text-5xl font-semibold'>Contact Epicor</p>
                <p className='text-xl w-[50%]'>Whether you'd like to request a demo, talk about curating an Epicor solution to meet your business needs, or have a question about our products and services, we're here to help. Select an option below or call <span className='text-[#97bdcc]'>+91 96########</span> .</p>
                <div className='flex gap-5'>
                    <button className='bg-[#e00700] p-2 text-lg rounded-md w-48'>CHAT  WITH  SALES</button>
                    <button className='bg-[#327e9c] p-2 text-lg rounded-md w-36'>CONTACT FORM</button>
                </div>
            </div>
            <div className='grid grid-cols-3 justify-between px-36 p-20 gap-10 bg-slate-300'>
                {Contact.map((event) => (
                    <div key={''} className='flex flex-col gap-8 items-center border p-10 rounded-xl shadow-md bg-white'>
                        <img src={event.images} alt="" className='size-20' />
                        <p className='text-2xl text-[#12465e] text-center'>{event.contect}</p>
                    </div>
                ))}

            </div>
        </>

    )
}

export default ContactUs