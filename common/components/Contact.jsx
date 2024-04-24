import React from 'react'

const Contact = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <div className='w-full flex items-center justify-center flex-col mb-4 gap-2'>
                <span className='text-5xl md:text-7xl'>Contact us</span>
                <span className='text-primary-color text-sm md:text-lg text-center'>
                    Reach out, we&apos;re here to help. Contact us for any questions, concerns, or
                    assistance you may need.
                </span>
            </div>

            <div
                className='w-full flex flex-col items-center justify-center bg-gradient-to-r from-service/25 via-[#AFF0D6]/50 to-service/25 p-4'>
                <div className=' bg-form max-w-md w-full p-4 rounded-xl gap-4 flex flex-col'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-2xl text-primary-color'>Name</label>
                        <input
                            className='text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50'
                            type="text"
                            name='name'
                            placeholder='Enter your name'/>
                        <span className='text-sm text-[#FF9B9B]'>Please enter your name</span>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-2xl text-primary-color'>Email</label>
                        <input
                            className='text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50'
                            type="text"
                            name='name'
                            placeholder='Enter your email'/>

                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-2xl text-primary-color'>Phone</label>
                        <input
                            className='text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50'
                            type="text"
                            name='name'
                            placeholder='Enter your phone'/>

                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-2xl text-primary-color'>Message</label>
                        <textarea
                            className='text-primary-color placeholder-primary-color p-4 resize-none bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50'
                            type="text"
                            name='name'
                            placeholder='Enter your message'/>

                    </div>
                    <button className='bg-[#274539] text-white text-2xl px-4 py-2 rounded-2xl'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
