
import React from 'react';
import hotelImg from '/public/images/hotel-icon.png';
import Image from 'next/image';
import hotelCardImg1 from '/public/images/hotel-1.jpg';
import hotelCardImg2 from '/public/images/hotel-2.jpg';
import hotelCardImg3 from '/public/images/hotel-3.jpg';

function HomeBanner() {
    
    const inDay = new Date();
    const outDay = new Date(inDay);
    outDay.setDate(outDay.getDate() + 1);

    return (
        <div 
            className='w-full h-[65vh] bg-[url("/images/hero.jpg")] bg-cover bg-center
                flex justify-center items-center relative'
        >
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

                <div className='absolute -bottom-3 w-full flex justify-center items-center'>
                    <button className='bg-blue-600 text-white rounded-full shadow px-5 py-1'>
                        Search
                    </button>
                </div>
            </div>


            <div className='absolute -bottom-[30vh] w-full flex justify-center'>
                <div className='w-4/5 h-[300px] bg-[#fff0e1] rounded flex shadow px-[3%] py-[1%] justify-between items-center'>
                    
                    <div className='flex flex-col w-1/4 h-full py-2'>
                        <div className='font-semibold text-gray-600 mt-2'>
                            New Release
                        </div>
                        <div className='text-4xl font-semibold'>
                            The Luxury Section
                        </div>
                        <div className='my-2 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati, recusandae id perspiciatis
                        </div>
                        <div className='my-2'>
                            <button className='bg-[#FFC94A] px-3 py-1 rounded-full'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='flex w-[70%] h-full justify-between'>

                        <div className="w-[30%] h-full flex flex-col bg-white rounded overflow-hidden shadow">
                            <div className='w-full h-3/5'>
                                <Image src={hotelCardImg1} alt="hotel-image" className='w-full h-full' />
                            </div>
                            <div className='p-2 w-full'>
                                <div className='font-semibold'>Luxe Properties</div>
                                <small className='leading-[5px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam provident molestiae voluptates?</small>
                            </div>
                        </div>

                        <div className="w-[30%] h-full flex flex-col bg-white rounded overflow-hidden shadow">
                            <div className='w-full h-3/5'>
                                <Image src={hotelCardImg2} alt="hotel-image" className='w-full h-full' />
                            </div>
                            <div className='p-2 w-full'>
                                <div className='font-semibold'>Luxe Properties</div>
                                <small className='leading-[5px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam provident molestiae voluptates?</small>
                            </div>
                        </div>
                        
                        <div className="w-[30%] h-full flex flex-col bg-white rounded overflow-hidden shadow">
                            <div className='w-full h-3/5'>
                                <Image src={hotelCardImg3} alt="hotel-image" className='w-full h-full' />
                            </div>
                            <div className='p-2 w-full'>
                                <div className='font-semibold'>Luxe Properties</div>
                                    <small className='leading-[5px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam provident molestiae voluptates?</small>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default HomeBanner;