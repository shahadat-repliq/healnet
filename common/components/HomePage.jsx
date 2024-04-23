import React from 'react'
import Header from "@/common/components/Header";
import Image from "next/image";
import Landing from './Landing';

const HomePage = () => {
    return (
        <div className='w-full flex flex-col gap-2 h-full'>
            < div className="absolute inset-0 z-0 h-screen">
                <Image className=' opacity-50' priority src={"/assets/bg.svg"} layout="fill" objectFit="cover" alt=""/>
            </div>
            <Header/>
            <Landing/>
        </div>
    )
}

export default HomePage
