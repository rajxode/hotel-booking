
import React from "react";
import axiosInstance from "@/utils/axiosInstance";
import TopNavWrapper from "@/components/TopNavbar/TopNavWrapper";
import { cookies } from 'next/headers';
import { HotelInterface } from "@/types/hotelAndRoom/hotelAndRoomTypes";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
            <TopNavWrapper />
            <div
                className="w-full px-[10%]"
            >
                 <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold mb-6">Your Hotels</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myHotels.map((hotel:HotelInterface) => (
                        <Card key={hotel.id} className="overflow-hidden">
                            <CardContent className="p-0">
                            <div className="relative h-48 w-full ">
                                <Image
                                    src={"/placeholder.svg"}
                                    alt={hotel.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-1">{hotel.name}</h2>
                                <p className="text-sm text-muted-foreground">{hotel.location.city}, {hotel.location.country}</p>
                            </div>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default MyHotelPage;