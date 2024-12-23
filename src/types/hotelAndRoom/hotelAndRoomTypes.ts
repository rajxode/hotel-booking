
interface Location {
    city: string;
    country: string;
}

export interface BookingInterface {
    hotel: string;
    user: string;
    room: string;
    checkInDate: Date;
    checkOutDate: Date;
    totalPrice: number;
    status: "pending" | "confirmed" | "cancelled";
}

export interface RoomInterface {
    id:string;
    hotel:string;
    name: string;
    pricePerNight: number;
    available: boolean;
    maxOccupancy: number;
    bookings?:BookingInterface[];
    images:string[];
    description:string;
    rating?:number;
}


export interface HotelInterface {
    id:string;
    name: string;
    description?: string;
    location: Location;
    manager: string;
    rooms?: RoomInterface[];
    amenities?:string[];
    rating?:number;
    images:string[];
    price:number;
}