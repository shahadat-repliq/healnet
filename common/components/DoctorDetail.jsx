'use client'
import Image from 'next/image'
import React from 'react'
import ReviewCard from './ui/ReviewCard'
import Card from './ui/Card'
import CommentCard from './ui/CommentCard'

const DoctorDetail = () => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <div
                className='w-full flex flex-col md:flex-row items-center md:items-start gap-8'>
                <div className='w-full md:w-1/2 pt-[50%] relative bg-silver/10 rounded-2xl'>
                    <Image
                        src={'/assets/doctor.png'}
                        objectFit="contain"
                        fill="fill"
                        className="w-full top-0 left-0"
                        alt='doctor'/>
                </div>
                <div className='w-full md:w-1/2 h-full flex flex-col gap-2 overflow-y-scroll max-h-screen'>
                    <div className='w-full flex items-center gap-2'>
                        <span className='text-5xl'>John Doe</span>
                        <div className='size-10 relative rounded-full hover:bg-primary-color/20'>
                            <Image
                                className='p-1'
                                src={'/assets/icons/Chat.png'}
                                objectFit="cover"
                                fill
                                alt='doctor'/>
                        </div>

                    </div>

                    <span className='px-4 py-2 bg-[#E0EDE9] text-primary-color w-fit rounded-lg'>Cardiology</span>

                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-primary-color text-2xl'>Education</span>
                        <div className='w-full flex flex-col gap-2 p-2 rounded-2xl bg-detail'>
                            <span className='text-teal-600 capitalize'>Doctor of MD</span>
                            <span className='text-[#44A881] capitalize'>medical school</span>
                            <span className='text-[#44A881] capitalize'>2001</span>
                        </div>
                        <div className='w-full flex flex-col gap-2 p-2 rounded-2xl bg-detail'>
                            <span className='text-teal-600 capitalize'>Doctor of MD</span>
                            <span className='text-[#44A881] capitalize'>medical school</span>
                            <span className='text-[#44A881] capitalize'>2001</span>
                        </div>
                        <div className='w-full flex flex-col gap-2 p-2 rounded-2xl bg-detail'>
                            <span className='text-teal-600 capitalize'>Doctor of MD</span>
                            <span className='text-[#44A881] capitalize'>medical school</span>
                            <span className='text-[#44A881] capitalize'>2001</span>
                        </div>
                        <div className='w-full flex flex-col gap-2 p-2 rounded-2xl bg-detail'>
                            <span className='text-teal-600 capitalize'>Doctor of MD</span>
                            <span className='text-[#44A881] capitalize'>medical school</span>
                            <span className='text-[#44A881] capitalize'>2001</span>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-primary-color text-2xl'>Experience</span>
                        <div className='w-full flex justify-between gap-2 p-2 rounded-2xl bg-detail'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-teal-600 capitalize'>Doctor of MD</span>
                                <span className='text-[#44A881] capitalize'>medical school</span>
                            </div>
                            <div className='text-[#44A881] text-sm'>
                                <span>2001-2005</span>
                            </div>
                        </div>

                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-primary-color text-2xl'>Certifications</span>
                        <div className='w-full flex  items-center gap-2 p-2 rounded-2xl bg-detail'>
                            <span className='text-teal-600 capitalize'>&#8226;</span>
                            <span className='text-[#44A881] capitalize'>American Board of Internal Medicine (ABIM) - Cardiology</span>
                        </div>
                    </div>

                    <div className='w-full flex gap-2'>
                        <button className='bg-[#226149] px-4 py-2 text-white rounded-lg'>Book appointment</button>
                        <button className='border-[#3ECF97] px-4 py-2 border-[1px] rounded-lg'>Upload Photo</button>
                    </div>
                </div>
            </div>



            <div className='w-full gap-4 flex-col flex'>
                <span className='text-4xl'>Reviews</span>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                </div>
            </div>
            <div className='w-full gap-4 flex-col flex'>
                <span className='text-4xl'>Suggested Doctors</span>
                <div className='w-full flex flex-col lg:flex-row gap-2'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default DoctorDetail