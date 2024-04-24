import React from 'react'
import Header from "@/common/components/Header";
import Image from "next/image";
import Landing from './Landing';
import DoctorList from './DoctorList';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Contact from './Contact';

const HomePage = () => {
    return (
        <div className='w-full flex flex-col gap-2 relative'>
            {/* <Image
                    className=' absolute z-0 inset-0 opacity-50'
                    priority="priority"
                    src={"/assets/bg.svg"}
                    fill
                    objectFit="contain"
                    alt=""/> */
            }
            <Header/>
            <Landing/>
            <DoctorList/>
            <Services/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HomePage
