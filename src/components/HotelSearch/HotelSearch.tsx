
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";

const HotelSearchComponent : React.FC = () => {
    const searchParams = useSearchParams();
    const city = searchParams.get('city');
    const country = searchParams.get('country');
    const room = searchParams.get('room');
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');

    const [hotelList, setHotelList] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axiosInstance.get(`/hotels/search?city=${city?.toLowerCase()}&country=${country?.toLowerCase()}`);
            if(response.data.success) {
                setHotelList(response.data.hotels);
            }
        }
        if(city && country) {
            getData();
        }
    },[city,country]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-around">
            <div className="w-full bg-blue-500 flex justify-center items-center px-[2%] md:px-[10%]">
                <div className="w-full flex">
                    <div>{city}</div>
                    <div>{country}</div>
                    <div>{checkIn}</div>
                    <div>{checkOut}</div>
                </div>
            </div>
            <div className="w-full px-[2%] md:px-[10%]">
                {
                    hotelList.map((hotel:any,i) => (
                        <div key={i} className="w-full bg-gray-200 border border-gray-600 rounded flex p-3 h-[250px] my-3">
                            <div className="h-full min-w-[250px] bg-slate-500 rounded mr-2">

                            </div>
                            <div className="w-full flex">
                                <div className="w-full flex flex-col">
                                    <div className="text-2xl font-semibold">{hotel.name}</div>
                                    <div>
                                        <span className="text-blue-400 font-semibold">{hotel.location.city}</span>, {hotel.location.country}
                                    </div>
                                    <div>{hotel.ratings  || 0}</div>
                                </div>
                                <div className="min-w-[125px] bg-white lg:min-w-[150px] flex flex-col">
                                    <div></div>
                                    <div>Rs. {hotel.price || 0}</div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HotelSearchComponent;