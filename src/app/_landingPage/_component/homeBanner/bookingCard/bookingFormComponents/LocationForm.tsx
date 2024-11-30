
import React from "react";
import { Props } from "@/types/landingPage/bookingTypes";

const LocationForm:React.FC<Props> = ({bookingData, setBookingData}) => {
    return (
        <div className='w-1/4 flex flex-col justify-around p-2 border-r border-gray-400' >
            <div className='text-sm'>
                Location
                &nbsp;
                <span className='text-blue-400'><i className="fa-solid fa-chevron-down"></i></span>
            </div>
            <div className='text-xl'>
                {bookingData?.location?.city}
            </div>
            <div className='text-sm'>{bookingData?.location.country}</div>
        </div>
    )
}

export default LocationForm;