
import React from "react";
import Image from "next/image";
import hotelImage from "/public/images/offer.jpg";
import { Card } from "@/components/ui/card";

const OfferHotelCard = () => {
    return (
        <Card className="w-[500px] h-[175px] mb-4 drop-shadow-md p-2 flex flex-col justify-between"
        >
            <div className="w-full flex justify-between h-4/5">
                <div className="h-full w-[125px] rounded-sm overflow-hidden">
                    <Image
                        src={hotelImage}
                        alt="offerCard" 
                    />
                </div>
                <div className="h-full flex flex-col w-full max-w-[350px] p-1 rounded-sm">
                    <div className="w-full flex justify-end text-xs text-gray-400">
                        T&C'S APPLY
                    </div>
                    <div className="w-full flex text-lg font-semibold">
                        LIVE NOW: Unmissable Deals for your Int'I Trips
                    </div>
                    <div className="w-12 border-b-2 border-yellow-400 my-1"></div>
                    <div className="w-full flex text-sm text-gray-400">
                        on the Widest Range of Credit Cards.
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end h-[15%] items-center text-sm font-semibold text-blue-600">
                BOOK NOW
            </div>
        </Card>
    )
}

export default OfferHotelCard;