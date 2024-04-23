import React from 'react'

const Landing = () => {
    return (
        <div className='w-full flex h-full items-start justify-center px-10 md:px-16'>
            <div
                className='w-full h-full flex gap-2 items-center  flex-col text-primary-color op-100'>
                <span className='leading-none text-[88px] md:text-[148px]'>HealNet</span>
                <span className='text-black text-2xl md:text-7xl text-center'>Transforming Healthcare, One Connection at a Time</span>
                <span className='text-black text-sm md:text-2xl text-center'>Seamlessly connecting you to
                    trusted healthcare providers. Book appointments, track your wellness journey,
                    and take control of your health—all in one place</span>

                <div className='w-full flex gap-4 items-center justify-center'>
                    <button className='text-white rounded-lg px-6 py-3 bg-gradient-to-b from-[#474747] via-[#212121] to-[#212121]'>Take a tour</button>
                    <button className='rounded-lg px-6 py-3 bg-gradient-to-b from-[#32f8ac] to-[#55BE96]/80 border-primary-color/50 border-[1px] text-primary-color'>Book a date</button>
                </div>
            </div>
        </div>
    )
}

export default Landing
