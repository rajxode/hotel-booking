
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";

interface cardProp {
    imageSrc: StaticImageData;
    cardHeading: string;
    cardDescri: string;
}

const OfferHotelCard :React.FC <cardProp> = (props) => {
    return (
        <Card className="w-[500px] h-[175px] mb-4 drop-shadow-md p-2 flex flex-col justify-between"
        >
            <div className="w-full flex justify-between h-4/5">
                <div className="h-full w-[125px] rounded-sm overflow-hidden">
                    <Image
                        src={props.imageSrc}
                        alt="offerCard" 
                    />
                </div>
                <div className="h-full flex flex-col w-full max-w-[350px] p-1 rounded-sm">
                    <div className="w-full flex justify-end text-xs text-gray-400">
                        T&C'S APPLY
                    </div>
                    <div className="w-full flex text-lg font-semibold">
                        {props.cardHeading}
                    </div>
                    <div className="w-12 border-b-2 border-yellow-400 my-1"></div>
                    <div className="w-full flex text-sm text-gray-400">
                        {props.cardDescri}
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