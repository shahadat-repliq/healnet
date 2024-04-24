import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <div
            className='w-full h-full flex flex-col p-2 bg-card rounded-lg gap-2 items-center'>
            <Image
                objectFit='cover'
                src={'/assets/doctor.png'}
                width={320}
                height={320}
                alt='doctors'/>
            <div className='w-full flex justify-between items-center'>
                <span className='text-[28px]'>John doe</span>
                <span className='text-primary-color text-xl'>Cardiology</span>
            </div>
            <span className='w-full overflow-hidden text-sm text-justify text-primary-color h-20'>Stay protected with our comprehensive vaccination services</span>
            <div
                className='w-full flex justify-between items-center bg-[#C9ECDE] p-2  rounded-lg hover:bg-emerald-500/20'>
                <span className='text-primary-color'>More Details</span>
                <Image
                    src={'/assets/icons/External Link.png'}
                    width={30}
                    height={30}
                    alt='link'/>
            </div>
        </div>
    )
}

export default Card
