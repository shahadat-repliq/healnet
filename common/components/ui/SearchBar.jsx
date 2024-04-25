import Image from 'next/image';
import React from 'react';

const SearchBar = () => {
    return (
        <div className='relative w-full flex items-center'>
            <input
                className='placeholder-primary-color/90 text-primary-color w-full p-[14px] pr-12 outline-none rounded-2xl bg-[#55BE96]/10'
                type="text"
                placeholder='Search by name'/>
            <Image
                className='absolute right-4 top-[4.5] '
                src='/assets/icons/Search.png'
                width={25}
                height={25}
                alt='search'/>
        </div>
    );
}

export default SearchBar;
