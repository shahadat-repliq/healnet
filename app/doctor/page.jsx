import Card from '@/common/components/ui/Card'
import React from 'react'

const DoctorPage = () => {
  return (
    <div className='flex w-full flex-col gap-4'>
    <span className='text-zinc-800 py-4 text-5xl md:text-5xl'>Our Doctors</span>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}

export default DoctorPage
