
import React from 'react';
import Image from 'next/image';
import hotelImg from '/public/images/hotel-icon.png';
import BookingForm from '@/app/_landingPage/_component/homeBanner/bookingCard/BookingForm';

const BookingCard:React.FC = () => {
    return (
        <div
                className='w-[90%] md:w-4/5 lg:w-3/5 h-1/2 bg-white rounded-md
                    shadow-md flex flex-col justify-between relative opacity-95 mb-5'
            >
                <div className='absolute -top-10 w-full flex justify-center'>
                    <div className='w-4/5 h-[80px] bg-gray-100 rounded flex justify-center items-center'>
                        <Image src={hotelImg} alt='hotel-icon' width={50} height={50} />
                        <h1 className='text-2xl font-semibold ml-4 flex items-center'>
                            My Hotel Booking Site
                        </h1>
                    </div>
                </div>

                <div className='w-full h-1/5'>
                </div>
                <BookingForm />
            </div>
    )
}

export default BookingCard;