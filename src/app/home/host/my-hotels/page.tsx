
import React from "react";
import axiosInstance from "@/utils/axiosInstance";
import { cookies } from "next/headers";
import { HotelInterface } from "@/types/hotelAndRoom/hotelAndRoomTypes";
import SingleHotelCard from "./_components/SingleHotelCard";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

const MyHotelPage: React.FC = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;
  let myHotels = [];
  const response = await axiosInstance.get("/hotels/my-hotels", {
    headers: {
      Cookie: `accessToken=${token}`,
    },
  });
  if (response.data.success) {
    myHotels = response.data.hotels;
  }
  return (
    <div className="w-full min-h-screen bg-[#f6f6f6]">
      <div className="w-full px-[10%]">
        <div className="container mx-auto px-4 py-8">
          <div
            className="w-full flex justify-between items-center mb-6"
          >
            <h1 className="text-2xl font-bold">Your Hotels</h1>
            <div>
                <Link 
                    href="/home/host/my-hotels/add-hotel" 
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center"
                >
                    <CirclePlus className="mr-2 h-4 w-4" /> Add Hotel
                </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myHotels.map((hotel: HotelInterface) => (
              <SingleHotelCard key={hotel._id} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHotelPage;
