
import React from "react";
import Image from "next/image";
import { StateCardPropType } from "@/types/landingPage/offerTypes";


const StateCard:React.FC<StateCardPropType> = ({state}) => {
    const { imgSrc, name, desc } = state;
    return (
        <div className="w-[32%] h-[70px] mr-2 my-3 flex justify-around p-1">
            <div className="h-full w-[62px] rounded-full overflow-hidden">
                <Image
                    src={imgSrc}
                    alt="delhi"
                    className="w-full h-full rounded-full"
                />
            </div>
            <div className="h-full w-full max-w-[300px] flex flex-col">
                <div className="w-full text-lg font-semibold">
                    {name}
                </div>
                <div className="w-full text-sm text-slate-500">
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default StateCard;