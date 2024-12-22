
import { BookingInterface } from "@/types/hotelAndRoom/hotelAndRoomTypes";

export interface UserInterface {
    name: string;
    email: string;
    password: string;
    role: "customer" | "manager";
    phone?: string;
    address?: string;
    bookings: BookingInterface[];
}