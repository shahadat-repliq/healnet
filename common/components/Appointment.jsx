'use client'
import {appointmentSchema} from '@/schema/form'
import {useFormik} from 'formik'
import React, {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast'
import {colourStyles, DropdownIndicator} from './styles/categoryStyle';
import Select from "react-select";
import {useQuery} from '@tanstack/react-query';
import {getDoctors} from '@/controller/controller'
import Loader from './ui/Loader'
import Link from 'next/link'
import {getDoctorList, getTime} from '@/utils/convertList'

const Appointment = () => {

    const [doctorKey, setDoctorKey] = useState(false)

    const {data, isLoading, isError} = useQuery({
        queryKey: ['/doctors'],
        queryFn: getDoctors,
        enabled: !!doctorKey
    })
    const {
        values,
        handleChange,
        handleSubmit,
        errors,
        setFieldValue,
        touched,
        isSubmitting
    } = useFormik({
        initialValues: {
            phone: '',
            doctor: '',
            time: ''
        },
        validationSchema: appointmentSchema,
        onSubmit: (values, {resetForm}) => {
            toast.success("Appointment booked successfully")
            setFieldValue('doctor', '');
            setFieldValue('time', '');
            resetForm()
        }

    })

    const convertedDoctors = getDoctorList(
        data
            ?.doctors
    )
    const filteredDoctor = data
        ?.doctors
                ?.find(
                    (el) => el
                        ?.name
                            ?.toLowerCase() === values
                                ?.doctor
                                    ?.toLowerCase()
                )

    const convertedTimeList = getTime(
        filteredDoctor
            ?.availability
    )

    const selectedValue = (options, value) => {
        return options
            ? options.find(el => el.value === value) || null
            : null
    }
    return (
        <div className='w-full flex items-center justify-center flex-col pt-4'>
            <div className='w-full flex items-center justify-center flex-col mb-4 gap-2'>
                <span className='text-3xl sm:text-5xl md:text-7xl'>Book appointment</span>
                <span className='text-primary-color text-xs sm:text-sm md:text-lg text-center'>
                    Reach out, we&apos;re here to help. Contact us for any questions, concerns, or
                    assistance you may need.
                </span>
            </div>
            {
                isLoading && <div className='w-full flex items-center justify-center'>
                        <Loader/></div>
            }
            {
                isError && <div className='w-full flex items-center justify-center text-red-600'>
                        An error occurred, stand by please</div>
            }
            <div
                className='w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-service/25 via-[#AFF0D6]/50 to-service/25 p-4'>
                <form
                    onSubmit={handleSubmit}
                    className=' bg-form max-w-md w-full p-4 rounded-xl gap-4 flex flex-col'>
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
                        <label htmlFor="name" className='text-2xl text-primary-color'>Doctor</label>
                        <Select
                            value={selectedValue(convertedDoctors, values.doctor)}
                            className='mb-2'
                            onChange={value => setFieldValue('doctor', value.value)}
                            defaultValue={{
                                value: "",
                                label: "Select Doctors"
                            }}
                            onMenuOpen={() => setDoctorKey(true)}
                            options={convertedDoctors}
                            styles={colourStyles}
                            components={{
                                IndicatorSeparator: () => null,
                                DropdownIndicator
                            }}/> {errors.doctor && (<p className="text-red-600 text-sm">{errors.doctor}</p>)}
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="time" className='text-2xl text-primary-color'>Timings</label>
                        <Select
                            isDisabled={!values.doctor}
                            value={selectedValue(convertedTimeList, values.time)}
                            className='mb-2'
                            onChange={value => setFieldValue('time', value.value)}
                            defaultValue={{
                                value: "",
                                label: "Select Timings"
                            }}
                            options={convertedTimeList}
                            styles={colourStyles}
                            components={{
                                IndicatorSeparator: () => null,
                                DropdownIndicator
                            }}/> {
                            errors.time && touched.time
                                ? (<p className="text-red-600 text-sm">{errors.time}</p>)
                                : null
                        }
                    </div>

                    <button
                        disabled={isSubmitting}
                        type='submit'
                        className='bg-[#274539] text-white text-2xl px-4 py-2 rounded-lg'>Submit</button>
                </form>
                <Link href={'/'} className='mt-8 underline'>
                    <span >Back to home</span>
                </Link>
            </div>

            <Toaster/>
        </div>
    )
}

export default Appointment
