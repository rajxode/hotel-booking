
import React from 'react';
import Image from 'next/image';
import hotelImg from '/public/images/hotel-icon.png';

const BookingCard:React.FC = () => {

    const inDay : Date = new Date();
    const outDay : Date = new Date(inDay);
    outDay.setDate(outDay.getDate() + 1);

    return (
        <div
                className='w-[90%] md:w-4/5 lg:w-3/5 h-1/2 bg-white rounded-md
                    shadow-md flex flex-col justify-between relative opacity-95'
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

                <div className='w-full h-3/4 flex justify-center items-center'>
                    <div className='w-[90%] h-3/5 bg-[#EEEEEE] rounded flex justify-evenly'>
                        <div className='w-1/4 flex flex-col justify-around p-2 border-r border-gray-400' >
                            <div className='text-sm'>Location</div>
                            <div className='text-xl'>
                                Delhi
                            </div>
                            <div className='text-sm'>India</div>
                        </div>
                        <div className='w-1/4 flex flex-col justify-around p-2 border-gray-400 border-r' >
                            <div className='text-sm'>Check-In</div>
                            <div className='text-xl'>
                                {inDay.toString().slice(3,15)}
                            </div>
                            <div className='text-sm'>
                                {inDay?.toString().slice(0,3)}
                            </div>
                        </div>
                        <div className='w-1/4 flex flex-col justify-around p-2 border-gray-400 border-r' >
                            <div className='text-sm'>Check-Out</div>
                            <div className='text-xl'>
                                {outDay.toString().slice(3,15)}
                            </div>
                            <div className='text-sm'>
                                {outDay?.toString().slice(0,3)}
                            </div>
                        </div>
                        <div className='w-1/4 flex flex-col justify-around p-2' >
                            <div className='text-sm'>No. Of Guest</div>
                            <div className='text-xl'>
                                Delhi
                            </div>
                            <div className='text-sm'>
                                India
                            </div>
                        </div>
                    </div>
                </div>

                <div className='absolute -bottom-5 w-full flex justify-center items-center'>
                    <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full shadow px-7 py-2 
                        font-bold tracking-wider text-lg">
                        SEARCH
                    </button>
                </div>
            </div>
    )
}

export default BookingCard;