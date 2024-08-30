
import React from 'react';
import OfferSection from "@/app/_landingPage/_component/offerSection/OfferSection";
import States from "@/app/_landingPage/_component/States";

const OffersAndStates:React.FC = () => {
  return (
    <div>
      <div className='w-full h-[40vh] bg-gray-200 p-4'></div>
      <OfferSection />
      <States />      
    </div>
  )
}

export default OffersAndStates;