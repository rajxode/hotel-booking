
import React from 'react';
import OfferHotelSlider from "@/app/_landingPage/_component/offerSection/OfferHotelSlider";

const OfferSection:React.FC = () => {
    return (
        <div className='w-full h-[70vh] flex justify-center items-center'>
            <div className='w-4/5 bg-white rounded-lg shadow p-6 flex'>
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-start items-center">
                        <div className="text-3xl font-semibold mr-4">
                            Offers
                        </div>
                        <div className="ml-3 flex items-center font-semibold underline underline-offset-4">
                            Hotels
                        </div>
                    </div>
                    <OfferHotelSlider />
                </div>
            </div>
        </div>
    )
}

export default OfferSection;