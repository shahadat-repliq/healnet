'use client'
import React, {useState} from 'react'
import ReviewCard from './ui/ReviewCard'

const Testimonials = () => {
    const reviews = [
        {
            "id": 1,
            "user": "HealthyHelen",
            "rating": 5,
            "comment": "This app is a lifesaver! Booking appointments has never been easier. The inter" +
                    "face is user-friendly, and I appreciate how quickly I can find a doctor that f" +
                    "its my needs.",
            "date": "2024-04-25"
        }, {
            "id": 2,
            "user": "WellnessWarrior",
            "rating": 4,
            "comment": "Great app for managing my health appointments. I love the reminder feature - i" +
                    "t ensures I never miss an appointment again! Would give it 5 stars if it had a" +
                    " feature to track my medical history.",
            "date": "2024-04-25"
        }, {
            "id": 3,
            "user": "HappyPatient88",
            "rating": 5,
            "comment": "Super impressed with this app! It's so convenient to book appointments on the " +
                    "go. The search functionality makes it easy to find specialists, and the bookin" +
                    "g process is seamless. Highly recommended!",
            "date": "2024-04-25"
        }, {
            "id": 4,
            "user": "HealthFanatic21",
            "rating": 4,
            "comment": "I've been using this app for a while now, and it's been a game-changer for man" +
                    "aging my health. The ability to see doctor availability in real-time is fantas" +
                    "tic. Would love to see more integration with health tracking devices in the fu" +
                    "ture!",
            "date": "2024-04-25"
        }, {
            "id": 5,
            "user": "DoctorSeeker123",
            "rating": 5,
            "comment": "As someone who's always on the lookout for the best healthcare options, I can " +
                    "confidently say that this app is a must-have. It's intuitive, fast, and reliab" +
                    "le. Kudos to the developers for creating such a wonderful tool!",
            "date": "2024-04-25"
        }, {
            "id": 6,
            "user": "MedicineMaven",
            "rating": 4,
            "comment": "Impressed with the simplicity and effectiveness of this app. It streamlines th" +
                    "e appointment booking process and saves me a lot of time. It would be perfect " +
                    "if it had a feature to store prescriptions and test results.",
            "date": "2024-04-25"
        }, {
            "id": 7,
            "user": "HealthyLiving2024",
            "rating": 5,
            "comment": "This app has been a lifesaver for me and my family. From finding the right spe" +
                    "cialist to booking last-minute appointments, it does it all. The interface is " +
                    "clean, and the app is incredibly user-friendly. Highly recommend to anyone loo" +
                    "king for a hassle-free way to manage their health!",
            "date": "2024-04-25"
        }, {
            "id": 8,
            "user": "WellnessJunkie77",
            "rating": 4,
            "comment": "I've tried several health apps, and this one stands out for its simplicity and" +
                    " effectiveness. It's helped me stay organized with my appointments and has mad" +
                    "e the whole process much smoother. Looking forward to seeing more features in " +
                    "future updates!",
            "date": "2024-04-25"
        }, {
            "id": 9,
            "user": "DoctorAppointmentPro",
            "rating": 5,
            "comment": "Love this app! It's been a lifesaver for both patients and doctors. The bookin" +
                    "g process is straightforward, and the app provides all the necessary informati" +
                    "on at your fingertips. Thank you for making healthcare more accessible!",
            "date": "2024-04-25"
        }
    ]

    const itemPerPage = 3
    const totalPages = Math.ceil(reviews.length / itemPerPage);

    const [page, setPage] = useState(1)
    const handleClick = () => {
        setPage((prev) => prev + 1)
    }

    return (
        <div className='w-full min-h-screen h-full flex flex-col p-4 gap-4'>
            <span className='text-zinc-800 py-4 text-5xl md:text-7xl'>Testimonials</span>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                {
                    reviews
                        .slice(0, page * itemPerPage)
                        .map((review) => (<ReviewCard key={review.id} data={review}/>))
                }
            </div>
            <div className='w-full flex items-center justify-center'>
                <button
                    onClick={handleClick}
                    disabled={page === totalPages}
                    className='disabled:cursor-not-allowed disabled:opacity-70 p-3 px-6 text-white bg-[#274539] rounded-lg'>
                    Show more
                </button>
            </div>
        </div>
    )
}

export default Testimonials
