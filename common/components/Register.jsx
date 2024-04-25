'use client'
import React from 'react'
import {useFormik} from "formik"
import toast, {Toaster} from 'react-hot-toast'
import {registerFormSchema} from '@/schema/form'
import {useRouter} from 'next/navigation'

const Register = () => {
    const router = useRouter()
    const onSubmit = () => {
        toast.success("Registered successfully")
        const handler = setTimeout(() => {
            router.push('/signin')
        }, 2000)
        return() => clearTimeout(handler)
    }
    const {
        values,
        handleChange,
        handleSubmit,
        errors,
        touched
    } = useFormik({
        initialValues: {
            email: "",
            phone: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: registerFormSchema,
        onSubmit: onSubmit
    });

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-service/25 via-[#AFF0D6]/50 to-service/25">
            <form
                onSubmit={handleSubmit}
                className=" text-blue-200 w-80 md:w-96 h-full bg-form p-4 rounded-2xl flex flex-col gap-2">
                <span className="text-4xl text-primary-color">Register</span>
                <div className="w-full h-full flex flex-col gap-2 ">
                    <label htmlFor="email" className='text-lg text-primary-color'>Email</label>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        className="text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50"
                        type="text"
                        name="email"
                        placeholder="Enter your email"/> {
                        errors.email && touched.email && (
                            <p className="text-red-600 text-sm">{errors.email}</p>
                        )
                    }
                </div>
                <div className="w-full h-full flex flex-col gap-2 ">
                    <label htmlFor="phone" className='text-lg text-primary-color'>Phone</label>
                    <input
                        value={values.phone}
                        onChange={handleChange}
                        className="text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50"
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone"/> {errors.phone && (<p className="text-red-600 text-sm">{errors.phone}</p>)}
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                    <label htmlFor="password" className='text-lg text-primary-color'>Password</label>
                    <input
                        value={values.password}
                        onChange={handleChange}
                        className="text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50"
                        type="password"
                        name="password"
                        placeholder="Enter your password"/> {errors.password && (<p className="text-red-600 text-sm">{errors.password}</p>)}
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                    <label htmlFor="confirm_password" className='text-lg text-primary-color'>Confirm Password</label>
                    <input
                        value={values.confirm_password}
                        onChange={handleChange}
                        className="text-primary-color placeholder-primary-color p-4 bg-contact-input rounded-lg border-[1px] border-primary-color/25 focus:outline-primary-color/50"
                        type="password"
                        name="confirm_password"
                        placeholder="Retype your password"/> {
                        errors.confirm_password && (
                            <p className="text-red-600 text-sm">{errors.confirm_password}</p>
                        )
                    }
                </div>
                <button
                    type="submit"
                    className="bg-[#274539] text-white text-xl px-4 py-2 rounded-lg mt-2">
                    Create Account
                </button>
            </form>
            <Toaster/>
        </div>
    )
}

export default Register