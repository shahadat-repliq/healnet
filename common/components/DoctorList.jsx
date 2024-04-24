import React from 'react'
import Card from './ui/Card'
import SearchBar from './ui/SearchBar'

const DoctorList = () => {
  return (
    <div className='w-full min-h-full flex flex-col p-4 gap-4'>
      <span className='text-zinc-800 py-4 text-5xl md:text-7xl'>Doctors</span>

      <div className='w-full flex flex-col gap-2'>
            <SearchBar/>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
      </div>
    </div>
  )
}

export default DoctorList
