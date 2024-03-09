import React from 'react'
import manufacturing from '../../Asset/ba-workers-manufacturing-plant-mms.jpeg'
import Overview from '../OverView'
import Industry from '../Industry'
import ManufactringModes from '../ManufacturingModes'
import Benefits from '../Benefits'
import FeatureProducts from '../Featured Products'
import KineticResources from '../Kinetic Resources'
import Contect from '../Contect'

const Manufacturing = () => {

    const handleClick = (id) => {
        const element = document.getElementById(id)
        element && element.scrollIntoView({ behavior: "smooth", block: 'center' })
    }


    return (
        <>
            <div className='lg:flex pt-[7.7rem]'>
                <div className='flex flex-col gap-6 lg:px-36 p-10 bg-[#042e3dff] text-white'>
                    <p>Manufacturing</p>
                    <div>
                        <button className='bg-[#47798fff] lg:p-1 rounded-md'>Manufacturing</button>
                    </div>
                    <p className='lg:text-5xl text-xl font-bold'>Transforming Manufacturing</p>
                    <p className='lg:text-xl'>The insights you need to drive growth, boost profits, and explore the potential of the connected shop floor.</p>
                    <div className='lg:flex  gap-2'>
                        <button className='p-2 bg-[#e00700ff] rounded-md' onClick={() => handleClick("Contect")}>ASK OUR MANUFACTURING EXPERTS</button>
                        <button className='p-2 bg-[#327e9cff] rounded-md'>CHAT WITH SALES</button>
                    </div>
                </div>
                <div className='!lg:hidden'>
                    <img src={manufacturing} alt="" className='size-full ' />
                </div>

            </div>
            <div className='flex justify-center py-2 top-32 sticky px-[10%] gap-4 bg-white'>
                <button className='p-2 px-4 hover:bg-slate-100 hover:rounded-md' onClick={() => handleClick("Overview")}>Overview</button>
                <button className='p-2 px-4 hover:bg-slate-100 hover:rounded-md' onClick={() => handleClick("Industry")}>Industry</button>
                <button className='p-2 px-4 hover:bg-slate-100 hover:rounded-md' onClick={() => handleClick("ManufactringModes")}>ManufactringModes</button>
                <button className='p-2 px-4 hover:bg-slate-100 hover:rounded-md' onClick={() => handleClick("Benefits")}>Benefits</button>
                <button className='p-2 px-4 hover:bg-slate-100 hover:rounded-md' onClick={() => handleClick("FeatureProducts")}>FeatureProducts</button>
                <button className='p-2 px-4 hover:bg-slate-100 hover:rounded-md' onClick={() => handleClick("KineticResources")}>KineticResources</button>
                <button className='p-2 px-4 hover:bg-slate-100 hover:rounded-md' onClick={() => handleClick("Contect")}>Contect</button>
            </div>
            <Overview />
            <Industry />
            <ManufactringModes />
            <Benefits />
            <FeatureProducts />
            <KineticResources />
            <Contect />
        </>
    )
}

export default Manufacturing