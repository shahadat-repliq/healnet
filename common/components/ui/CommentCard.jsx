import Image from 'next/image'
import React from 'react'

const CommentCard = ({data}) => {
    console.log(data)
    return (
        <div
            className='w-full flex flex-col gap-4 p-4 h-[200px] bg-[#E0EBE6] border-[1px] border-[#57D496]/35 rounded-2xl'>
            <div className='flex gap-4 rounded-lg'>
              <div className='size-14 relative '>
                <Image
                    src={'/assets/doctor.png'}
                    objectFit='cover'
                    fill
                    alt='image'/>
                     </div>
                <div className='flex flex-col w-full'>
                    <span className='text-lg text-primary-color'>John Doe</span>
                    <span className=' text-primary-color text-xs'>20-08-2024</span>

                </div>
                <span className='text-white h-fit p-2 bg-chip/75 rounded-lg text-center'>{data?.rating}</span>
            </div>
            <span
                className='text-[#00975D] w-full overflow-hidden text-sm mb-2'>
                {data?.comment}
            </span>
        </div>
    )
}

export default CommentCard
