'use client'
import React, {useState} from 'react'
import Card from './ui/Card'
import SearchBar from './ui/SearchBar'
import Select from "react-select";
import {colourStyles, DropdownIndicator} from './styles/categoryStyle';
import Pagination from './ui/Pagination';
import {useQuery} from '@tanstack/react-query';
import {getCategories, getDoctors} from '@/controller/controller';
import Loader from './ui/Loader';
import {getPaginationProps} from '@/utils/getPaginationProps';
import {getCategoryList} from '@/utils/getCategoryList';
import useDebounce from '@/hooks/useDebounce';

const DoctorList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [categoryKey, setCategoryKey] = useState(false)
    const itemsPerPage = 4
    const {data, isLoading, isError} = useQuery(
        {queryKey: ['/doctors'], queryFn: getDoctors}
    )

    const categories = useQuery(
        {queryKey: ['/category'], queryFn: getCategories, enabled: categoryKey}
    )

    const convertedCategory = getCategoryList(
        categories
            ?.data
                ?.specialties
    )

    let filteredList = data
        ?.doctors
    if (category) {

        filteredList = data
            ?.doctors
                    ?.filter((el) => (el.specialty.toLowerCase().includes(
                        category
                            ?.value
                                ?.toLowerCase()
                    )))
    }
    if (category.value === "All") {
        filteredList = data
            ?.doctors
    }

    const debouncedSearchKey = useDebounce(searchKey, 500);

    if (debouncedSearchKey) {
        filteredList = data
            ?.doctors
                    ?.filter((el) => (el.name.toLowerCase().includes(
                        debouncedSearchKey
                            ?.toLowerCase()
                    )))
    }


    const {startIndex, endIndex, totalLength} = getPaginationProps(
        currentPage,
        itemsPerPage,
        filteredList
            ?.length
    )

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const currentDoctors = filteredList
        ?.slice(startIndex, endIndex)

    const handleSelect = (selectedOption) => {
        setCategory(selectedOption)

    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchKey(e.target.value)
    }

    return (
        <div id='category' className='w-full min-h-full flex flex-col p-4 gap-4'>
            <span className='text-zinc-800 py-4 text-5xl md:text-7xl'>Doctors</span>

            <div  className='w-full flex flex-col md:flex-row gap-2'>
                <Select
                    className='w-full'
                    onChange={handleSelect}
                    defaultValue={{
                        value: "",
                        label: "Select category"
                    }}
                    onMenuOpen={() => setCategoryKey(true)}
                    options={convertedCategory}
                    styles={colourStyles}
                    components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator
                    }}/>
                <SearchBar searchKey={searchKey} handleSearch={handleSearch}/>
            </div>
            <div
                className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                    currentDoctors
                        ?.map((doctor) => (<Card key={doctor.id} data={doctor} total={data?.doctors.length}/>))
                }
            </div>
            <div className='w-full flex items-center justify-center'>
                {isLoading && <Loader/>}
            </div>
            <div className='w-full flex items-center justify-center'>
                {isError && <span className=' text-red-500 text-lg'>{"An error occured"}</span>}
            </div>
            <Pagination
                totalPages={totalLength}
                onPageChange={onPageChange}
                currentPage={currentPage}/>
        </div>
    )
}

export default DoctorList