
import React from 'react';
import OfferSection from "@/app/_landingPage/_component/offerSection/OfferSection";
import States from "@/app/_landingPage/_component/offerSection/stateSection/States";

const OffersAndStates:React.FC = () => {
  return (
    <div>
      <div className='w-full min-h-[40vh] p-4'></div>
      <OfferSection />
      <States />      
    </div>
  )
}

export default OffersAndStates;