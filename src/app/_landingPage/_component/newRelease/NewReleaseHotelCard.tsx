
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
    img: StaticImageData;
    title: string;
    content: string;
}

const NewReleaseHotelCard:React.FC<CardProps> = ({img, title, content}) => {
    return (
        <div className="w-[30%] h-full flex flex-col bg-white rounded overflow-hidden shadow">
            <div className='w-full h-3/5'>
                <Image src={img} alt="hotel-image" className='w-full h-full' />
            </div>
            <div className='p-2 w-full'>
                <div className='font-semibold'>{title}</div>
                <small className='leading-[5px]'>
                    {content}
                </small>
            </div>
        </div>
    )
}

export default NewReleaseHotelCard;