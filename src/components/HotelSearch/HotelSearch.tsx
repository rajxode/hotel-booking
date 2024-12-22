
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import { HotelInterface } from "@/types/hotelAndRoom/hotelAndRoomTypes";
import { Skeleton } from "../ui/skeleton";

const HotelSearchComponent : React.FC = () => {
    const searchParams = useSearchParams();
    const city = searchParams.get('city');
    const country = searchParams.get('country');
    const room = searchParams.get('room');
    const guest = searchParams.get('guest');
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');

    const [hotelList, setHotelList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrolled = window.scrollY;
            setIsScrolled(scrolled > 100);
        }
        window.addEventListener('scroll', handleScroll);

        return (() => window.removeEventListener('scroll', handleScroll))
    },[]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axiosInstance.get(`/hotels/search?city=${city?.toLowerCase()}&country=${country?.toLowerCase()}`);
                if(response.data.success) {
                    setHotelList(response.data.hotels);
                }
            } catch(error:any) {
                console.log('error in getting hotels', error.message);
            } finally {
                setIsLoading(false);
            }
        }
        if(city && country) {
            getData();
        }
    },[city,country]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-around relative">
            <div className={`w-full bg-blue-500 flex justify-center items-center px-[2%] md:px-[10%] 
                    ${
                        isScrolled 
                        ? 
                        "fixed top-0 left-0 right-0 h-auto py-2 shadow-lg shadow-slate-700/60"
                        :
                        "min-h-[125px]"
                    }
                `}
            >
                <div className="w-full flex items-start justify-around">
                    <div className="px-4 py-1 rounded border-blue-700 bg-blue-300 text-white mr-2 flex flex-col flex-1">
                        <div className="text-blue-700 text-sm font-semibold">City: </div>
                        <div>{city}</div>
                    </div>
                    <div className="px-4 py-1 rounded border-blue-700 bg-blue-300 text-white mr-2 flex flex-col flex-1">
                        <div className="text-blue-700 text-sm font-semibold">Check In: </div>
                        <div>{checkIn}</div>
                    </div>
                    <div className="px-4 py-1 rounded border-blue-700 bg-blue-300 text-white mr-2 flex flex-col flex-1">
                        <div className="text-blue-700 text-sm font-semibold">Check Out: </div>
                        <div>{checkOut}</div>
                    </div>
                    <div className="px-4 py-1 rounded border-blue-700 bg-blue-300 text-white mr-2 flex flex-col flex-1">
                        <div className="text-blue-700 text-sm font-semibold">Room And Guest: </div>
                        <div>{room} Room, {guest} Guest</div>
                    </div>
                </div>
            </div>
            <div className="w-full px-[2%] md:px-[10%]">
                {
                    isLoading
                    ?
                        <>
                            {
                                new Array(3).fill(0).map((_,i) => (
                                    <Skeleton key={i} className="w-full rounded flex p-3 h-[250px] my-3 bg-gray-200 border-gray-400">
                                        <Skeleton className="h-full min-w-[250px] rounded mr-2 bg-gray-300" />
                                        <div className="w-full flex">
                                            <div className="w-full flex flex-col mr-2">
                                                <Skeleton className="text-2xl font-semibold h-4 bg-gray-400" />
                                                <Skeleton className="mt-1 bg-gray-400 h-4" />
                                                <Skeleton className="mt-1 bg-gray-400 h-4" />
                                            </div>
                                            <Skeleton className="min-w-[125px] lg:min-w-[150px] flex flex-col bg-gray-300" />
                                        </div>
                                    </Skeleton>
                                ))
                            }
                        </>
                    :
                    hotelList.map((hotel:HotelInterface,i) => (
                        <div key={i} className="w-full bg-gray-200 border border-gray-600 rounded flex p-3 h-[250px] my-3">
                            <div className="h-full min-w-[250px] bg-slate-500 rounded mr-2">

                            </div>
                            <div className="w-full flex">
                                <div className="w-full flex flex-col">
                                    <div className="text-2xl font-semibold">{hotel.name}</div>
                                    <div>
                                        <span className="text-blue-400 font-semibold">{hotel.location.city}</span>, {hotel.location.country}
                                    </div>
                                    <div>{hotel.rating  || 0}</div>
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