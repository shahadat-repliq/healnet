import Link from 'next/link'
import React from 'react'

const Dropdown = () => {
    return (
        <div
            className=' absolute -right-1 flex flex-col gap-2 bg-white/80 backdrop-blur-lg p-3 rounded-md mt-6 text-primary-color border-[1px] border-[#017A4B]/25'>
            <Link className='' href={'/signin'}>
                <span className='rounded-sm p-1 pr-6'>Sign in</span>
            </Link>
            <Link className='' href={'/register'}>
                <span className='rounded-sm p-1 pr-6'>Logout</span>
            </Link>
        </div>
    )
}

export default Dropdown