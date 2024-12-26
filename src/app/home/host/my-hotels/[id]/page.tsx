
// 'use client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, Wifi, Car, Utensils, Dumbbell, 
  Edit, PlusCircle, Trash, Settings } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HotelInterface, RoomInterface } from '@/types/hotelAndRoom/hotelAndRoomTypes';
import ImageGalleryDialog from '@/components/ImageSlider/ImageGalleryDialog';
import axiosInstance from '@/utils/axiosInstance';

const hotel: HotelInterface = {
  _id: "1",
  name: "Sunset Beach Villa",
  manager:"",
  description: "Experience luxury and relaxation in our beachfront villa with stunning ocean views.",
  location: { city:"Malibu", country:"California" },
  rooms: [
    { 
      id: "1", name: "Ocean View Suite", maxOccupancy: 2, pricePerNight: 350, 
      images: ["https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"], 
      rating: 4.7, description: "Spacious suite with panoramic ocean views", 
      hotel:"",available: true 
    },
    { 
      id: "2", name: "Family Room", maxOccupancy: 4, pricePerNight: 500, 
      images: ["https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"], 
      rating: 4.5, description: "Perfect for families, with separate living area", 
      hotel:"",available: true 
    },
    { 
      id: "3", name: "Penthouse", maxOccupancy: 2, pricePerNight: 800, 
      images: ["https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"], 
      rating: 4.9, description: "Luxurious penthouse with private pricePerNighterrace", 
      hotel:"",available: true 
    },
  ],
  amenities: ["Free Wi-Fi", "Parking", "Restaurant", "Fitness Center"],
  rating: 4.8,
  images: [
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
    ],
  price: 350,
}

const amenityIcons = {
  "Free Wi-Fi": Wifi,
  "Parking": Car,
  "Restaurant": Utensils,
  "Fitness Center": Dumbbell,
}

export default async function HotelInfo({ params }: { params: { id: string } }) {

  const response = await axiosInstance.get(`/hotels/get-hotel/${params.id}`);
  console.log('response', response.data);
  // const handleUpdateHotel = () => {
  //   console.log("Update hotel")
  // }

  // const handleAddRoom = () => {
  //   console.log("Add room")
  // }

  // const handleUpdateRoom = (roomId: string) => {
  //   console.log("Update room", roomId)
  // }

  // const handleRemoveRoom = (roomId: string) => {
  //   console.log("Remove room", roomId)
  // }

  // const handleRemoveHotel = () => {
  //   console.log("Remove hotel")
  // }

  // const visibleImages = hotel?.images?.slice(0, 4);
  // const imagesLength = hotel?.images?.length || 0;
  // const remainingImagesCount = Math.max(0, imagesLength - 4);

  return (
    <div className='w-full min-h-screen bg-[#f6f6f6]'>
    {/* <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="grid grid-cols-2 gap-2">
          {visibleImages?.map((image, index) => (
            <div key={index} className="relative aspect-square">
              {index === 3 && remainingImagesCount > 0 ? (
                <ImageGalleryDialog
                  images={hotel?.images}
                  triggerContent={
                    <div className="relative aspect-square cursor-pointer">
                      <Image
                        src={image}
                        alt={`${hotel.name} - Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div 
                        className="absolute inset-0 bg-black bg-opacity-50 border-[2px] border-slate-800 
                          flex items-center justify-center rounded-lg"
                      >
                        <span className="text-white text-2xl font-bold">+{remainingImagesCount}</span>
                      </div>
                    </div>
                  }
                />
              ) : (
                <Image
                  src={image}
                  alt={`${hotel.name} - Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
        <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{hotel.name}</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"><Settings className="mr-2 h-4 w-4" /> Manage Hotel</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Hotel Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleUpdateHotel}>
                <Edit className="mr-2 h-4 w-4" /> Update Hotel Info
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleAddRoom}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add New Room
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleRemoveHotel} className="text-red-600">
                <Trash className="mr-2 h-4 w-4" /> Remove Hotel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
          <p className="text-lg mb-4">{hotel.description}</p>
          <p className="text-muted-foreground mb-4">{hotel.location.city}, {hotel.location.country}</p>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="font-semibold">{hotel.rating}</span>
          </div>
          <p className="text-2xl font-bold mb-4">From ${hotel.price} / night</p>
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {hotel?.amenities?.map((amenity) => {
              const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons]
              return (
                <Badge key={amenity} variant="secondary" className="flex items-center gap-1">
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  {amenity}
                </Badge>
              )
            })}
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotel?.rooms?.map((room:RoomInterface) => (
          <>
          <Card key={room?.id}>
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
                <p className="text-sm text-muted-foreground mb-2">{room?.pricePerNight}</p>
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
                <Button variant="outline" size="sm" onClick={() => handleUpdateRoom(room?.id)}>
                  <Edit className="mr-2 h-4 w-4" /> Update
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleRemoveRoom(room?.id)}>
                  <Trash className="mr-2 h-4 w-4" /> Remove
                </Button>
              </div>
            </CardFooter>
          </Card>
          </>
        ))}
      </div>
    </div> */}
    </div>
  )
}