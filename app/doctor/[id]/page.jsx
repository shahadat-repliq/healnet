'use client'
import DoctorDetail from '@/common/components/DoctorDetail'
import Loader from '@/common/components/ui/Loader'
import {getDoctors} from '@/controller/controller'
import {useQueries, useQuery} from '@tanstack/react-query'
import React from 'react'

const DoctorDetailsPage = ({params}) => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['/doctors'],
        queryFn: getDoctors,
        enabled: !!params.id
    })
    const filteredDoctor = data?.doctors
                ?.find((doctor) => String(doctor.id) === String(params.id))
    return (
        <div className='w-full flex items-center justify-center'>
            {isLoading
                    ? <Loader/>
                    : isError
                        ? <span className=''>An error occured</span>
                        : <DoctorDetail data={filteredDoctor} totalItems={data?.doctors?.length}/>
            }
        </div>
    )
}

export default DoctorDetailsPage
