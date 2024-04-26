import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({data, total}) => {
    return (
        <div
            className='w-full h-full lg:h-[460px] flex flex-col p-2 bg-card rounded-lg gap-2 items-center relative'>
            <Image
                objectFit='cover'
                src={'/assets/doctor.png'}
                width={320}
                height={320}
                alt='doctors'/>
            <div className='w-full flex justify-between gap-2'>
                <span className=' text-lg leading-none md:leading-tight text-chip  w-60 overflow-hidden'>{data?.name.substring(0,11)}...</span>
                <span className='text-primary-color text-xs md:text-md text-end'>{data?.specialty}</span>
            </div>
            <span className='w-full overflow-hidden text-xs text-justify text-chip max-h-full h-full mb-4'>Lorem
                ipsum dolor sit amet consectetur. Dictum sit mi nibh et augue eu justo hac
                sollicitudin</span>
            <Link href={`/doctor/${(data?.id)%total}`} className='w-full'>
            <div
                className='peer w-full flex justify-between items-center bg-[#016B42] p-2  rounded-lg hover:bg-[#016B42]/90'>
                <span className='text-white hover:underline font-light text-sm md: text-md'>More Details</span>
                <Image
                    src={'/assets/icons/External Link White.png'}
                    width={25}
                    height={25}
                    alt='link'/>
            </div>
            </Link>
        </div>
    )
}

export default Card
