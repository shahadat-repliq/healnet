import React from 'react'

const SearchBar = () => {
    return (
        <div className='w-full flex'>
            <input
                className=' placeholder-primary-color w-full p-4 outline-none rounded-2xl bg-[#55BE96]/10'
                type="text"
                placeholder='Search by name'/>
        </div>
    )
}

export default SearchBar
