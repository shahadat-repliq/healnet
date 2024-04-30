import Image from 'next/image';
import React from 'react';

const ServiceCard = ({props}) => {
    return (
        <div
            className={`bg-service ${props.name == 'Ambulence' || props.name == 'Pharmaceuticals'
                ? 'row-span-1 sm:row-span-2'
                : 'row-span-1'} flex items-center justify-center gap-2 flex-col p-4 rounded-lg text-primary-color border-[1px] border-[#55BE96]/30`}>
            <Image width={50} height={50} src={props.icon} alt={props.name}/>
            <span className='text-xl md:text-3xl'>{props.name}</span>
            <span className=' text-center text-xs sm:text-sm'>{props.description}</span>
        </div>
    );
};

export default ServiceCard;
