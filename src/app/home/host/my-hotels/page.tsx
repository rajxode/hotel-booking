
import React from "react";
import axiosInstance from "@/utils/axiosInstance";
import { cookies } from 'next/headers';
import { HotelInterface } from "@/types/hotelAndRoom/hotelAndRoomTypes";
import SingleHotelCard from "./_components/SingleHotelCard";

const MyHotelPage:React.FC = async() => {
    const cookieStore = cookies();
    const token = cookieStore.get('accessToken')?.value;
    let myHotels = [];
    const response = await axiosInstance.get('/hotels/my-hotels', {
        headers: {
            Cookie: `accessToken=${token}`
        }
    });
    if(response.data.success) {
        myHotels = response.data.hotels;
    }
    return (
        <div className="w-full min-h-screen bg-[#f6f6f6]">
            <div
                className="w-full px-[10%]"
            >
                 <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold mb-6">Your Hotels</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myHotels.map((hotel:HotelInterface) => <SingleHotelCard key={hotel._id} hotel={hotel} />)}
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default MyHotelPage;