
import React from "react";
import Link from "next/link";
import { HotelInterface } from "@/types/hotelAndRoom/hotelAndRoomTypes";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface PropType {
    hotel: HotelInterface;
}

const SingleHotelCard:React.FC<PropType> = ({hotel}) => {
    return (
        <Link href={`/home/host/my-hotels/${hotel?._id}`}>
            <Card className="overflow-hidden">
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
        </Link>
    )
}

export default SingleHotelCard;