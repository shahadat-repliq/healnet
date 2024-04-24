import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const contact = ['+88017000000', '754424543', '111/1/A Distillery Road', 'white chapel, DMD', 'DHK']
    const link = ['Facebook', 'Instagram', 'Whatsapp', 'Gmail', 'X']
    const navigate = ['Home', 'About', 'Doctors', 'Category', 'Contact us']
    const login = ['User Login', 'Employee Login', 'Doctor Login', 'Admin Login']
    return (
        <div
            className=' text-primary-color w-full flex flex-col md:flex-row gap-2 bg-gradient-to-t from-[#3ECF97]/15 to-transparent rounded-xl p-4 items-center justify-center'>
            <div className='w-1/5 flex flex-col gap-2  items-center justify-center p-4'>
                <Image src={'/assets/logo.svg'} width={50} height={50} alt='logo'/>
                <span className='text-primary-color text-3xl'>HealNet</span>
            </div>
            <div className='w-4/5 grid grid-cols-2 md:grid-cols-4 gap-2'>
                <div className='w-full flex flex-col gap-2 '>
                    <span className='text-2xl'>Contact</span>
                    {
                        contact.map(
                            (el) => (<span className='text-[10px] sm:text-xs' key={el}>{el}</span>)
                        )
                    }
                </div>
                <div className='w-full flex flex-col gap-2 items-end md:items-start'>
                    <span className='text-2xl'>Link</span>
                    {
                        link.map(
                            (el) => (<span className='text-[10px] sm:text-xs' key={el}>{el}</span>)
                        )
                    }
                </div>
                <div className='w-full flex flex-col gap-2 '>
                    <span className='text-2xl'>Navigate</span>
                    {
                        navigate.map(
                            (el) => (<span className='text-[10px] sm:text-xs' key={el}>{el}</span>)
                        )
                    }
                </div>
                <div className='w-full flex flex-col gap-2 items-end md:items-start'>
                    <span className='text-2xl'>Login</span>
                    {
                        login.map(
                            (el) => (<span className='text-[10px] sm:text-xs' key={el}>{el}</span>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer
