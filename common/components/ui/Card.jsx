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
                <span className=' text-xl md:text-[28px] text-chip'>John doe</span>
                <span className='text-primary-color text-md md:text-xl'>Cardiology</span>
            </div>
            <span className='w-full overflow-hidden text-sm text-justify text-chip h-15 mb-4'>Lorem
                ipsum dolor sit amet consectetur. Dictum sit mi nibh et augue eu justo hac
                sollicitudin</span>
            <div
                className='w-full flex justify-between items-center bg-[#016B42] p-2  rounded-lg hover:bg-[#016B42]/90'>
                <span className='text-white underline font-light'>More Details</span>
                <Image
                    src={'/assets/icons/External Link White.png'}
                    width={30}
                    height={30}
                    alt='link'/>
            </div>
        </div>
    )
}

export default Card
