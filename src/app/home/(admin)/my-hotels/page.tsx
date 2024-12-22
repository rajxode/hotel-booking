
import React from "react";
import axiosInstance from "@/utils/axiosInstance";
import TopNavWrapper from "@/components/TopNavbar/TopNavWrapper";

const MyHotelPage:React.FC = async() => {
    const response = await axiosInstance.get('/hotels/my-hotels');
    const myHotels = response.data.hotels;
    console.log(myHotels);
    return (
        <div className="w-full min-h-screen bg-[#f6f6f6]">
            <TopNavWrapper />
            <div
                className="w-full px-[10%] pt-[10vh]"
            >
                <div className="">
                    My Hotels page
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default MyHotelPage;