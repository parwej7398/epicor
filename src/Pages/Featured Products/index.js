import React from 'react'

const FeatureProducts = () => {
    return (
        <div id='FeatureProducts'>
            <div className='text-center text-5xl font-bold p-5'>
                <p>Feature Products</p>
            </div>
            <div className='grid grid-cols-2 p-10 justify-between px-36 gap-10 *:border *:p-5 *:rounded-xl *:shadow-md'>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Epicor Virtual Agent</p>
                    <p>Use voice or text to automate tasks or get instant answers from your ERP data. Epicor Virtual Agent uses natural language processing powered by Microsoft Azure AI.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Epicor Kinetic</p>
                    <p>Grow, thrive, and compete in a global marketplace with Kinetic—industry-tailored, cognitive ERP that helps you work smarter and stay connected.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Epicor Grow</p>
                    <p>Connect, extract, and visualise your data effortlessly with Grow. Low-code and no-code functions make this cloud BI solution intuitive for everyone.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Epicor EDI</p>
                    <p>Take on global business-to-business integration in a way that drives efficiency and compliance. Epicor EDI is powerful alone or integrated with your ERP solution.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Epicor ECM</p>
                    <p>Epicor ECM enterprise content management simplifies document management with business process automation tools that help teams work smarter and more efficiently.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Epicor Commerce</p>
                    <p>Epicor Commerce, powered by Magento,® empowers you to give B2B buyers what they want, increasing their loyalty along with your profitability.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Epicor CMS</p>
                    <p>Epicor CMS is a purpose-built ERP for automotive manufacturers, with tools and controls that meet strict delivery requirements and rigorous production deadlines.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Epicor Advanced MES</p>
                    <p>Automatically capture data with machines and sensors from the shop floor. Empower your employees with visual data, boosting accountability and responsiveness.</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureProducts