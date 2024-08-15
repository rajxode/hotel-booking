
import React from 'react';
import HotelsList from "@/app/_landingPage/_component/HotelsList";
import States from "@/app/_landingPage/_component/States";

const HotelsListAndStates:React.FC = () => {
  return (
    <div>
      <div className='w-full h-[40vh] bg-gray-200'>
      </div>

      <HotelsList />
      <States />      
    </div>
  )
}

export default HotelsListAndStates;