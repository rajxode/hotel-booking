
import React from "react";
import { Props } from "@/types/landingPage/bookingTypes";

const RoomAndGuestForm:React.FC<Props> = ({bookingData, setBookingData}) => {
    return (
        <div className='w-1/4 flex flex-col justify-around p-2' >
            <div className='text-sm'>
                Room and Guest
                &nbsp;
                <span className='text-blue-400'><i className="fa-solid fa-chevron-down"></i></span>
            </div>
            <div className='flex flex-start'>
                <div>
                    <span className='text-xl font-bold'>{bookingData?.roomAndGuest?.room}</span><span> Room</span>
                </div>
                &nbsp;
                <div>
                    <span className='text-xl font-bold'>{bookingData?.roomAndGuest?.guest}</span><span> Guests</span>
                </div>
            </div>
        </div>
    )
}

export default RoomAndGuestForm;