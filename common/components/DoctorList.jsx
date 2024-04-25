'use client'
import React, { useState } from 'react'
import Card from './ui/Card'
import SearchBar from './ui/SearchBar'
import Select from "react-select";
import {colourOptions, colourStyles, DropdownIndicator} from './styles/categoryStyle';
import Image from 'next/image';
import Pagination from './ui/Pagination';

const DoctorList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <div className='w-full min-h-full flex flex-col p-4 gap-4'>
            <span className='text-zinc-800 py-4 text-5xl md:text-7xl'>Doctors</span>

            <div className='w-full flex flex-col md:flex-row gap-2'>
                <Select
                    className='w-full'
                    defaultValue={{
                        value: "",
                        label: "Select category"
                    }}
                    options={colourOptions}
                    styles={colourStyles}
                    components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator
                    }}/>
                <SearchBar/>
            </div>
            <div
                className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Pagination totalPages={5} onPageChange={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}

export default DoctorList