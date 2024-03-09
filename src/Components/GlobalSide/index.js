import React from 'react'

const GlobalSide = () => {
    return (
        <div>
            <div className='px-32 mt-32 items-center'>
                <div className='flex flex-col gap-7 p-14'>
                    <p>Global Sites</p>
                    <p className='text-5xl font-semibold'>Epicor Worldwide</p>
                    <p className='text-xl text-slate-400'>Epicor has a global presence with customers in more than 150 countries. To learn more about Epicor, visit your local or regional site.</p>
                    <button className='bg-[#e00700] p-2 text-lg rounded-md w-48 text-white'>CONTACT SALES</button>
                </div>
                <div className='text-5xl p-14'>
                    <p>Americas</p>

                </div>
            </div>
        </div>
    )
}

export default GlobalSide