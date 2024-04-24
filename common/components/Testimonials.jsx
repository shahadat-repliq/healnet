import React from 'react'
import ReviewCard from './ui/ReviewCard'

const Testimonials = () => {
  return (
    <div className='w-full min-h-screen h-full flex flex-col p-4 gap-4'>
      <span className='text-zinc-800 py-4 text-5xl md:text-7xl'>Testimonials</span>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
            <ReviewCard/>
            <ReviewCard/> 
            <ReviewCard/> 
            <ReviewCard/> 
            <ReviewCard/>   
            <ReviewCard/> 
      </div>
      <div className='w-full flex items-center justify-center'>
        <button className='p-3 px-6 text-white bg-[#274539] rounded-lg'>
            Show more
        </button>
      </div>
    </div>
  )
}

export default Testimonials
