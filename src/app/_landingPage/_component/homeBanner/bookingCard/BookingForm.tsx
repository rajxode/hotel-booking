
"use client";
import React, { useState } from "react";
import { BookingDataType } from "@/types/landingPage/bookingTypes";
import LocationForm from "@/app/_landingPage/_component/homeBanner/bookingCard/bookingFormComponents/LocationForm";
import RoomAndGuestForm from "@/app/_landingPage/_component/homeBanner/bookingCard/bookingFormComponents/RoomAndGuestForm";
import CheckInOutForm from "@/app/_landingPage/_component/homeBanner/bookingCard/bookingFormComponents/CheckInOutForm";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/reduxHooks";
import { authSelector } from "@/redux/reducers/Authentication/authSlice";

const BookingForm = () => {
    const router = useRouter();
    const {user} = useAppSelector(authSelector);
    const inDay : Date = new Date();
    const outDay : Date = new Date(inDay);
    outDay.setDate(outDay.getDate() + 1);
    const [bookingData, setBookingData] = useState<BookingDataType>({
        location:{city:"Delhi",country:"India"},
        checkIn:{date:inDay.toString().slice(3,15),day:inDay?.toString().slice(0,3)},
        checkOut:{date:outDay.toString().slice(3,15),day:outDay?.toString().slice(0,3)},
        roomAndGuest:{room:"1",guest:"2"}
    });

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(user) {
            router.push(`/home/search?city=${bookingData.location.city}&country=${bookingData.location.country}&checkIn=${bookingData.checkIn.date}&checkOut=${bookingData.checkOut.date}&room=${bookingData.roomAndGuest.room}&guest=${bookingData.roomAndGuest.guest}`);
        } else {
            router.push(`/hotel-search?city=${bookingData.location.city}&country=${bookingData.location.country}&checkIn=${bookingData.checkIn.date}&checkOut=${bookingData.checkOut.date}&room=${bookingData.roomAndGuest.room}&guest=${bookingData.roomAndGuest.guest}`);
        }
    }

    return (
        <>
            <div className='w-full h-3/4 flex justify-center items-center'>
                <div className='w-[90%] h-3/5 bg-[#EEEEEE] rounded flex justify-evenly'>
                    <LocationForm bookingData={bookingData} setBookingData={setBookingData} />
                    <CheckInOutForm bookingData={bookingData} setBookingData={setBookingData} />
                    <RoomAndGuestForm bookingData={bookingData} setBookingData={setBookingData} />
                </div>
            </div>

            <div className='absolute -bottom-5 w-full flex justify-center items-center'>
                <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full 
                    shadow px-7 py-2 font-bold tracking-wider text-lg"
                    onClick={handleClick}
                >
                    SEARCH
                </button>
            </div>
        </>
    )
}

export default BookingForm;