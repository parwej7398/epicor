import React from 'react'
import Manufacturing from '../../Asset/thul-2ED8DFF2-674B-4C53-A30793ECAEFD7565.png'
import Process from '../../Asset/thul-3B0194C3-C275-4A40-AD596CB6E36D0A44.png'
import Make_to_Order from '../../Asset/MFG-Make-to-Order-Petrol-Specialty-Icon.png'

const ManufactringModes = () => {
    return (
        <div id='ManufactringModes' className='pt-10'>
            <p className='text-5xl text-center font-semibold'>Manufacturing Modes</p>
            <div className='grid grid-cols-3 gap-10 px-32 p-10 *:p-5 *:rounded-xl *:shadow-md *:shadow-teal-700 *:text-xl *:font-semibold'>
                <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                    <div><img src={Manufacturing} alt="" className='size-10' /></div>
                    <div><p>Discrete Manufacturing</p></div>
                </div>
                <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                    <div><img src={Make_to_Order} alt="" className='size-10' /></div>
                    <div><p>Make-to-Order Manufacturing</p></div>
                </div>
                <div className='flex items-center border hover:bg-[#a9ded0ff]'>
                    <div><img src={Process} alt="" className='size-10' /></div>
                    <div><p>Process Manufacturing</p></div>
                </div>
            </div>
        </div>
    )
}

export default ManufactringModes