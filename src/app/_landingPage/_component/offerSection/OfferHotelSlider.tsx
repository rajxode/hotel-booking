
"use client";
import React from "react";
import SliderWrapper from '@/components/Slider/SliderWrapper';
import OfferHotelCard from "./OfferHotelCard";

const OfferHotelSlider:React.FC = () => {
    return (
        <div>
            <div className="flex jusitfy-center items-center w-full">
                <div className="w-full mt-2">
                <SliderWrapper>
                    {
                        new Array(6).fill(1).map((_,i) => (
                            <>
                                <OfferHotelCard />
                                <OfferHotelCard />
                            </>
                        ))
                    }
                </SliderWrapper>
                </div>
            </div>
        </div>
    )
}

export default OfferHotelSlider;