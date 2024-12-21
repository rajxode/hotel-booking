
import React, { useState } from "react";
import { Props, LocationType } from "@/types/landingPage/bookingTypes";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { locationData } from "@/utils/constantData/searchCityData";


const LocationForm:React.FC<Props> = ({bookingData, setBookingData}) => {
    const[searchLoc, setSearchLoc] = useState("");
    const handleLocChange = (item:LocationType) => {
        setSearchLoc("");
        setBookingData({
            ...bookingData,
            location:{
                city: item.city,
                country: item.country
            }
        })
    }
    return (
        <div className='w-1/4 flex flex-col justify-around p-2 border-r border-gray-400'>
            <Popover>
                <PopoverTrigger asChild>
                    <div className='text-sm cursor-pointer'>
                        Location
                        &nbsp;
                        <span className='text-blue-400'><i className="fa-solid fa-chevron-down"></i></span>
                    </div>
                </PopoverTrigger>
                <div className='text-xl'>
                    {bookingData?.location?.city}
                </div>
                <div className='text-sm'>
                    {bookingData?.location.country}
                </div>
                <PopoverContent className="p-0 ">
                    <div className="w-full p-2 text-gray-300">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex items-center">
                                <span className="mr-2">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Find Hotel"
                                    value={searchLoc}
                                    onChange={(e) => setSearchLoc(e.target.value)}
                                    className="focus:outline-none text-black w-[85%]"
                                />
                            </div>
                            <div>
                                <span 
                                    className="mx-1 text-xs cursor-pointer"
                                    onClick={() => setSearchLoc("")}
                                >
                                    CLEAR
                                </span>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className="p-2 max-h-[350px] overflow-y-scroll">
                        {
                            searchLoc
                            &&
                            <>
                                {
                                    locationData
                                    .filter((item) => {
                                        return item.city.toLocaleLowerCase().includes(searchLoc.toLocaleLowerCase())
                                    })
                                    .map((item,i) => (
                                        <div key={i} className="my-2 font-base cursor-pointer hover:bg-gray-200"
                                            onClick={() => handleLocChange(item)}
                                        >
                                            <span className="mr-2"><i className="fa-solid fa-location-dot"></i></span>
                                            <span>{item.city}, City in {item.country}</span>
                                        </div>
                                    ))
                                }
                            </>
                        }
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default LocationForm;