
import { Props } from "@/types/landingPage/bookingTypes";
import React from "react";

const CheckInOutForm:React.FC<Props> = ({bookingData, setBookingData}) => {
    return (
        <>
            <div className='w-1/4 flex flex-col justify-around p-2 border-gray-400 border-r' >
                <div className='text-sm'>
                    Check-In
                    &nbsp;
                    <span className='text-blue-400'><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                <div className='text-xl'>
                    {bookingData?.checkIn?.date}
                </div>
                <div className='text-sm'>
                    {bookingData?.checkIn?.day}
                </div>
            </div>
            <div className='w-1/4 flex flex-col justify-around p-2 border-gray-400 border-r' >
                <div className='text-sm'>
                    Check-Out
                    &nbsp;
                    <span className='text-blue-400'><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                <div className='text-xl'>
                    {bookingData?.checkOut?.date}
                </div>
                <div className='text-sm'>
                    {bookingData?.checkOut?.day}
                </div>
            </div>
        </>
    )
}

export default CheckInOutForm;