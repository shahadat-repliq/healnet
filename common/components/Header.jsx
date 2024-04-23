'use client'

import Image from 'next/image';
import React, {useState} from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div
            className='w-full max-h-20 flex rounded-2xl bg-[#adadad]/10 p-4 gap-1 items-center justify-between sm:'>
            <div className='relative size-12 flex'>
                <Image src={'/assets/logo.svg'} width={30} height={30} alt="logo"/>
            </div>
            <div
                className=' hidden sm:flex w-full  items-center gap-4 justify-end text-primary-color text-sm md:text-base'>
                <div className='flex gap-2'>
                    <span>Category</span>
                    <span>Consultant</span>
                    <span>Contact</span>
                </div>
                <div className='flex gap-2'>
                    <button className='p-2 border-b-[1px] border-primary-color'>Sign in</button>
                    <button
                        className='p-2 text-primary-color bg-[#48FDB7]/30 border-[#55BE96] border-[1px] rounded-lg'>Get started</button>
                </div>
            </div>
            <div className='relative flex  justify-end sm:hidden'>
                {
                    isOpen
                        ? <button onClick={() => setIsOpen(!isOpen)}><Image src={'/assets/icons/menu.png'} width={30} height={30} alt="logo"/></button>
                        : <button onClick={() => setIsOpen(!isOpen)}><Image src={'/assets/icons/Close.png'} width={30} height={30} alt="logo"/></button>
                }

            </div>
        </div>
    );
};

export default Header;
