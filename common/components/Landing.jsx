import Link from 'next/link'
import React from 'react'

const Landing = () => {
    return (
        <div className='w-full flex items-center justify-center py-4 px-10 md:px-16'>
            <div
                className='w-full flex gap-2 items-center  flex-col text-primary-color op-100'>
                <span className='leading-none text-[88px] md:text-[148px]'>HealNet</span>
                <span className='text-black text-2xl md:text-7xl text-center'>Transforming Healthcare, One Connection at a Time</span>
                <span className='text-black text-sm md:text-2xl text-center'>Seamlessly
                    connecting you to trusted healthcare providers. Book appointments, track your
                    wellness journey, and take control of your health—all in one place</span>

                <div className='w-full flex gap-4 items-center justify-center'>
                    <Link href={'/doctor'}>
                        <button
                            className='text-white rounded-lg px-4 md:px-6 py-2 md:py-3 bg-gradient-to-b from-[#474747] via-[#212121] to-[#212121]'>Take a tour</button>
                    </Link>
                    <button
                        className='rounded-lg px-4 md:px-6 py-2 md:py-3 bg-gradient-to-b from-primary-color to-[#004C2F] border-primary-color/50 border-[1px] text-white'>Book a date</button>
                </div>
            </div>
        </div>
    )
}

export default Landing
