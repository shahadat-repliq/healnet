import React from 'react'
import syringe from '@/public/assets/icons/Syringe.png'
import ambulence from '@/public/assets/icons/Siren.png'
import pill from '@/public/assets/icons/Pill.png'
import mind from '@/public/assets/icons/Mind Map.png'
import ServiceCard from './ui/ServiceCard'

const Services = () => {
    const services = [
        {
            name: 'Vaccination',
            icon: syringe,
            description: "Stay protected with our comprehensive vaccination services. From routine immun" +
                    "izations to specialized vaccines, safeguard your health with ease."
        }, {
            name: 'Ambulence',
            icon: ambulence,
            description: "Fast and reliable emergency ambulance services at your fingertips. Trust us fo" +
                    "r prompt response and expert care during critical times"
        }, {
            name: 'Pharmaceuticals',
            icon: pill,
            description: "Experience convenience and savings with our Pharmacy Services Card. Access dis" +
                    "counted medications and personalized consultations at trusted pharmacies."
        }, {
            name: 'Book a therapist',
            icon: mind,
            description: "Find peace of mind by booking a therapist with ease. Connect with trusted prof" +
                    "essionals for support and guidance on your mental health journey"
        }
    ]
    return (
        <div className='w-full flex flex-col p-4 gap-4'>
            <span className='text-zinc-800 text-5xl py-4 md:text-7xl'>Services we provide</span>
            <div
                className='w-full min-h-screen h-full grid grid-cols-1 sm:grid-cols-2 gap-2 '>
                {services.map((service) => (<ServiceCard key={service.name} props={service}/>))}
            </div>
        </div>
    )
}

export default Services
