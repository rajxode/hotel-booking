
import { notFound } from 'next/navigation';
import { HotelInterface, RoomInterface } from '@/types/hotelAndRoom/hotelAndRoomTypes';
import axiosInstance from '@/utils/axiosInstance';
import HotelViewPageComponent from '@/components/HotelViewPage/HotelViewPageComponent';

// const hotel: HotelInterface = {
//   _id: "1",
//   name: "Sunset Beach Villa",
//   manager:"",
//   description: "Experience luxury and relaxation in our beachfront villa with stunning ocean views.",
//   location: { city:"Malibu", country:"California" },
//   rooms: [
//     { 
//       id: "1", name: "Ocean View Suite", maxOccupancy: 2, pricePerNight: 350, 
//       images: ["https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"], 
//       rating: 4.7, description: "Spacious suite with panoramic ocean views", 
//       hotel:"",available: true 
//     },
//     { 
//       id: "2", name: "Family Room", maxOccupancy: 4, pricePerNight: 500, 
//       images: ["https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"], 
//       rating: 4.5, description: "Perfect for families, with separate living area", 
//       hotel:"",available: true 
//     },
//     { 
//       id: "3", name: "Penthouse", maxOccupancy: 2, pricePerNight: 800, 
//       images: ["https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"], 
//       rating: 4.9, description: "Luxurious penthouse with private pricePerNighterrace", 
//       hotel:"",available: true 
//     },
//   ],
//   amenities: ["Free Wi-Fi", "Parking", "Restaurant", "Fitness Center"],
//   rating: 4.8,
//   images: [
//     "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
//     "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
//     "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
//     "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
//     "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
//     "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
//     ],
//   price: 350,
// }



export default async function HotelInfo({ params }: { params: { id: string } }) {

  const response = await axiosInstance.get(`/hotels/get-hotel/${params.id}`);
  if(!response?.data?.success) {
    notFound();
  }
  const hotel:HotelInterface = response?.data.hotel;
  return (
    <HotelViewPageComponent hotel={hotel} />
  )
}