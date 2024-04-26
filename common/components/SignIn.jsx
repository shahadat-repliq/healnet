'use client'
import React from 'react'
import {useFormik} from "formik"
import toast, {Toaster} from 'react-hot-toast'
import {loginFormSchema} from '@/schema/form'
import {useRouter} from 'next/navigation'
import Link from 'next/link'

const SignIn = () => {
    const router = useRouter()
    const onSubmit = () => {
        toast.success("Logged in successfully")
        const handler = setTimeout(() => {
            router.push('/')
        }, 1000)
        return() => clearTimeout(handler)
    }
    const {values, handleChange, handleSubmit, errors} = useFormik({
        initialValues: {
            phone: "",
            password: ""
        },
        validationSchema: loginFormSchema,
        onSubmit
    });
    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-service/25 via-[#AFF0D6]/50 to-service/25">
            <form
                onSubmit={handleSubmit}
                className=" text-blue-200 w-80 md:w-96 h-full bg-form p-4 rounded-2xl flex flex-col gap-2">
                <span className="text-4xl text-primary-color">Sign in</span>

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

                <Link href={'/register'} className='w-full underline text-primary-color justify-end flex items-center text-sm'>Don&apos;t have an account? Register now</Link>
                <button
                    type="submit"
                    className="bg-[#274539] text-white text-xl px-4 py-2 rounded-lg mt-2">
                    Sign in
                </button>
            </form>
            <Toaster/>
        </div>
    )
}

export default SignIn