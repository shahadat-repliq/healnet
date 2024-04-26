'use client'
import Card from '@/common/components/ui/Card'
import Pagination from '@/common/components/ui/Pagination'
import {getDoctors} from '@/controller/controller'
import {getPaginationProps} from '@/utils/getPaginationProps'
import {useQuery} from '@tanstack/react-query'
import {usePathname} from 'next/navigation'
import React, {useState} from 'react'

const DoctorPage = () => {
    const currentUrl = usePathname()
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8
    const {data, isError, isLoading} = useQuery({
        queryKey: ['/doctors'],
        queryFn: getDoctors,
        enabled: !!currentUrl
    })

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const {startIndex, endIndex, totalLength} = getPaginationProps(
        currentPage,
        itemsPerPage,
        data
            ?.doctors
                ?.length
    )

    const currentDoctors = data
        ?.doctors
                ?.slice(startIndex, endIndex)
    return (
        <div className='flex w-full flex-col gap-4'>
            <span className='text-zinc-800 py-4 text-5xl md:text-5xl'>Our Doctors</span>
            <div
                className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                    currentDoctors
                        ?.map((el) => (
                            <Card
                                key={el.id}
                                data={el}
                                total={data
                                    ?.doctors
                                        ?.length}/>
                        ))
                }
            </div>
            <Pagination
                totalPages={totalLength}
                onPageChange={onPageChange}
                currentPage={currentPage}/>
        </div>
    )
}

export default DoctorPage
