
import React from 'react';
import hotelCardImg1 from '/public/images/hotel-1.jpg';
import hotelCardImg2 from '/public/images/hotel-2.jpg';
import hotelCardImg3 from '/public/images/hotel-3.jpg';
import NewReleaseHotelCard from "@/app/_landingPage/_component/newRelease/NewReleaseHotelCard";
import { StaticImageData } from 'next/image';

interface CardData  {
    img: StaticImageData;
    title: string;
    content: string;
}

const hotelCardList:CardData[] = [
   {
    img:hotelCardImg1,
    title: "Luxe Properties",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fuga at corrupti dolores recusandae delectus nesciunt"
   },
   {
    img:hotelCardImg2,
    title: "Luxe Properties",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fuga at corrupti dolores recusandae delectus nesciunt"
   },
   {
    img:hotelCardImg3,
    title: "Luxe Properties",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fuga at corrupti dolores recusandae delectus nesciunt"
   },
]

const NewReleaseCard:React.FC = () => {
    return (
        <div className='absolute -bottom-[30vh] w-full flex justify-center'>
                <div className='w-4/5 min-h-[300px] bg-[#fff0e1] rounded-lg flex shadow px-[3%] py-[1%] justify-between
                     items-center'
                >
                    <div className='flex flex-col w-1/4 h-full py-2'>
                        <div className='font-semibold text-gray-600 mt-2'>
                            New Release
                        </div>
                        <div className='text-4xl font-semibold'>
                            The Luxury Section
                        </div>
                        <div className='my-2 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati, recusandae id 
                            perspiciatis
                        </div>
                        <div className='my-2'>
                            <button className='bg-[#FFC94A] px-3 py-1 rounded-full'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='flex w-[70%] h-full justify-between'>
                        {
                            hotelCardList.map((hotel, index) => <NewReleaseHotelCard 
                                                                    key={index}
                                                                    img={hotel.img}
                                                                    title={hotel.title}
                                                                    content={hotel.content}
                                                                />
                                                            )
                        }
                    </div>
                </div>
            </div>
    )
}

export default NewReleaseCard;