import React from 'react'
import aerospace from '../../Asset/MFG-Aerospace-and-Defense-Teal-Specialty-Icon.png'
import Automotive from '../../Asset/MFG-Automotive-Teal-Specialty-Icon.png'
import Construction from '../../Asset/MFG-Construction-and-Engineering-Teal-Specialty-Icon.png'
import Electronics from '../../Asset/MFG-Electronics-and-High-Tech-Teal-Specialty-Icon.png'
import Fabricated from '../../Asset/MFG-Fabricated-Metals-Teal-Specialty-Icon.png'
import Furniture from '../../Asset/MFG-Furniture-and-Fixtures-Teal-Specialty-Icon.png'
import Industrial from '../../Asset/MFG-Industrial-Machinery-Teal-Specialty-Icon.png'
import Medical from '../../Asset/MFG-Medical-Devices-Teal-Specialty-Icon.png'
import Metal from '../../Asset/DIST-Metal-Service-Teal-Specialty-Icon.png'
import Rubber from '../../Asset/thul-1975C6E4-18A6-480A-8316D7A5A57D4FA5.png'

const Industry = () => {
    return (
        <>
            <div id='Industry' className='pt-14'>
                <div><p className='text-5xl text-center font-semibold'>Specialist Industries</p></div>
                <div className='grid grid-cols-3 gap-10 px-32 p-10 *:p-5 *:rounded-xl *:shadow-md *:shadow-teal-700 *:text-xl *:font-semibold *:cursor-pointer'>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={aerospace} alt="" className='size-10' /></div>
                        <div><p>Aerospace and Defense</p></div>
                    </div>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={Automotive} alt="" className='size-10' /></div>
                        <div><p>Automotive</p></div>
                    </div>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={Construction} alt="" className='size-10' /></div>
                        <div><p>Construction and Engineering</p></div>
                    </div>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={Electronics} alt="" className='size-10' /></div>
                        <div><p>Electronics & High Tech</p></div>
                    </div>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={Fabricated} alt="" className='size-10' /></div>
                        <div><p>Fabricated Metals</p></div>
                    </div>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={Furniture} alt="" className='size-10' /></div>
                        <div><p>Furniture & Fixtures</p></div>
                    </div>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={Industrial} alt="" className='size-10' /></div>
                        <div><p>Industrial Machinery</p></div>
                    </div>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={Medical} alt="" className='size-10' /></div>
                        <div><p>Medical Device</p></div>
                    </div>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={Metal} alt="" className='size-10' /></div>
                        <div><p>Metal Service Centers</p></div>
                    </div>
                    <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                        <div><img src={Rubber} alt="" className='size-10' /></div>
                        <div><p>Rubber and Plastics</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Industry