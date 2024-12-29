import React from "react";
import {
  HotelInterface,
  RoomInterface,
} from "@/types/hotelAndRoom/hotelAndRoomTypes";
import {
  Star,
} from "lucide-react";
import DropdownComponent from "./sub-components/DropdownComponent";
import HotelAmenity from "./sub-components/HotelAmenity";
import HotelImages from "./sub-components/HotelImages";
import RoomCard from "./sub-components/RoomCard";

const HotelViewPageComponent: React.FC<{ hotel: HotelInterface }> = ({
  hotel,
}) => {
  return (
    <div className="w-full min-h-screen bg-[#f6f6f6]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <HotelImages images={hotel?.images} hotelName={hotel?.name} />
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">{hotel.name}</h1>
              <DropdownComponent />
            </div>
            <p className="text-lg mb-4">{hotel.description}</p>
            <p className="text-muted-foreground mb-4">
              {hotel.location.city}, {hotel.location.country}
            </p>
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span className="font-semibold">{hotel.rating}</span>
            </div>
            <p className="text-2xl font-bold mb-4">
              From ${hotel.price} / night
            </p>
            <HotelAmenity amenities={hotel?.amenities} />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotel?.rooms?.map((room: RoomInterface) => (
            <RoomCard key={room?._id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelViewPageComponent;
