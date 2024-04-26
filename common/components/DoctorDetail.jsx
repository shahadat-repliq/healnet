'use client'
import Image from 'next/image'
import React from 'react'
import Card from './ui/Card'
import CommentCard from './ui/CommentCard'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'

const DoctorDetail = ({data, totalItems}) => {
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
                        <span className='text-4xl'>{data?.name}</span>
                        <button onClick={() => toast.success("Message sent. Please wait for reply")} className='size-10 relative rounded-full hover:bg-primary-color/20'>
                            <Image
                                className='p-1'
                                src={'/assets/icons/Chat.png'}
                                objectFit="cover"
                                fill
                                alt='doctor'/>
                        </button>

                    </div>

                    <span className='px-4 py-2 bg-[#E0EDE9] text-primary-color w-fit rounded-lg'>{data?.specialty}</span>

                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-primary-color text-2xl'>Education</span>
                        {data?.education?.map((el) => (
                        <div key={el} className='w-full flex flex-col gap-2 p-2 rounded-2xl bg-detail'>
                            <span className='text-teal-600 capitalize'>{el?.degree}</span>
                            <span className='text-[#44A881] capitalize'>{el?.institution || el?.university}</span>
                            <span className='text-[#44A881] capitalize'>{el?.year}</span>
                        </div>
                        ))}
                        
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-primary-color text-2xl'>Experience</span>
                    {data?.experience?.map((el) => (
                        <div key={el} className='w-full flex justify-between gap-2 p-2 rounded-2xl bg-detail'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-teal-600 capitalize'>{el?.position}</span>
                                <span className='text-[#44A881] capitalize'>{el?.hospital}</span>
                            </div>
                            <div className='text-[#44A881] text-sm flex gap-2'>
                            
                               
                            </div>
                        </div>
                        ))}

                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-primary-color text-2xl'>Certifications</span>
                        {data?.certifications?.map((el) => (

                        
                        <div key={el} className='w-full flex  items-center gap-2 p-2 rounded-2xl bg-detail'>
                            <span className='text-teal-600 capitalize'>&#8226;</span>
                            <span className='text-[#44A881] capitalize'>{el}</span>
                        </div>
                        ))}
                    </div>

                    <div className='w-full flex gap-2'>
                        <button onClick={() => toast.success("Appointment booked successfully")} className='bg-[#226149] px-4 py-2 text-white rounded-lg'>Book appointment</button>
                        <button onClick={() => toast.success("Uploaded photos")} className='border-[#3ECF97] px-4 py-2 border-[1px] rounded-lg'>Upload Photo</button>
                    </div>
                </div>
            </div>



            <div className='w-full gap-4 flex-col flex'>
                <span className='text-4xl'>Reviews</span>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    {
                        data?.reviews?.map((el) => (
                            <CommentCard key={el} data={el}/>

                        ))
                    }
                </div>
            </div>
            <div className='w-full gap-4 flex-col flex'>
                <span className='text-4xl'>Suggested Doctors</span>
                <div className='w-full flex flex-col lg:flex-row gap-2'>
                    {data?.suggested_doctors?.map((el) => (
                        <Link className='w-full flex flex-col lg:flex-row gap-2' key={el.id} href={`/doctor/${(el.id)%16}`}>
                            <Card key={el.id} data={el} total={totalItems}/>
                        </Link>
                    ))}
                </div>
            </div>
            <Toaster/>
        </div>
    )
}

export default DoctorDetail