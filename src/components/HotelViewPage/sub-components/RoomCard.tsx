import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RoomInterface } from "@/types/hotelAndRoom/hotelAndRoomTypes";
import { Edit, Star, Trash } from "lucide-react";
import Image from "next/image";

const RoomCard: React.FC<{ room: RoomInterface }> = ({ room }) => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative h-48">
          <Image
            src={room?.images[0]}
            alt={room?.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{room?.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">
            {room?.pricePerNight}
          </p>
          <p className="mb-2">maxOccupancy: {room?.maxOccupancy} guests</p>
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{room?.rating}</span>
          </div>
          <p className="text-lg font-bold">₹ {room?.pricePerNight} / night</p>
        </div>
      </CardContent>
      <CardFooter className="bg-muted flex items-center justify-center w-full">
        <div className="flex justify-between w-full items-center">
          <Button
            variant="outline"
            size="sm"
            // onClick={() => handleUpdateRoom(room?.id)}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </Button>
          <Button
            variant="outline"
            size="sm"
            // onClick={() => handleRemoveRoom(room?.id)}
          >
            <Trash className="mr-2 h-4 w-4" /> Remove
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
