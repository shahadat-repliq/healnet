'use client'
import {contactFormSchema} from '@/schema/form'
import {useFormik} from 'formik'
import React from 'react'
import toast, {Toaster} from 'react-hot-toast'

const Contact = () => {
    const {values, handleChange, handleSubmit, errors} = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: contactFormSchema,
        onSubmit: (values, {resetForm}) => {
                resetForm()
                toast.success("Message sent successfully")}
            

    })
    return (
        <div id='contact' className='w-full flex items-center justify-center flex-col'>
            <div className='w-full flex items-center justify-center flex-col mb-4 gap-2'>
                <span className='text-5xl md:text-7xl'>Contact us</span>
                <span className='text-primary-color text-sm md:text-lg text-center'>
                    Reach out, we&apos;re here to help. Contact us for any questions, concerns, or
                    assistance you may need.
                </span>
            </div>

            <div
                className='w-full flex flex-col items-center justify-center bg-gradient-to-r from-service/25 via-[#AFF0D6]/50 to-service/25 p-4'>
                <form
                    onSubmit={handleSubmit}
                    className=' bg-form max-w-md w-full p-4 rounded-xl gap-4 flex flex-col'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-2xl text-primary-color'>Name</label>
                        <input
                            className='text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50'
                            type="text"
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                            placeholder='Enter your name'/> {errors.name && (<p className="text-red-600 text-sm">{errors.name}</p>)}
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-2xl text-primary-color'>Email</label>
                        <input
                            className='text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50'
                            type="email"
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            placeholder='Enter your email'/> {errors.email && (<p className="text-red-600 text-sm">{errors.email}</p>)}

                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-2xl text-primary-color'>Phone</label>
                        <input
                            className='text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50'
                            type="tel"
                            name='phone'
                            value={values.phone}
                            onChange={handleChange}
                            placeholder='Enter your phone'/> {errors.phone && (<p className="text-red-600 text-sm">{errors.phone}</p>)}
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-2xl text-primary-color'>Message</label>
                        <textarea
                            className='text-primary-color placeholder-primary-color p-4 resize-none bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50'
                            type="text"
                            name='message'
                            value={values.message}
                            onChange={handleChange}
                            placeholder='Enter your message'/> {errors.message && (<p className="text-red-600 text-sm">{errors.message}</p>)}
                    </div>
                    <button
                        type='submit'
                        className='bg-[#274539] text-white text-2xl px-4 py-2 rounded-lg'>Submit</button>
                </form>
            </div>
            <Toaster/>
        </div>
    )
}

export default Contact
