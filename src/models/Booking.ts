
import mongoose, { Schema, models, model, Types } from "mongoose";

interface BookingInterface {
    hotel: Types.ObjectId;
    user: Types.ObjectId;
    room: Types.ObjectId;
    checkInDate: Date;
    checkOutDate: Date;
    totalPrice: number;
    status: "pending" | "confirmed" | "cancelled";
}

const bookingSchema = new Schema<BookingInterface>(
    {
        hotel:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel",
            required:[true, "Hotel details not provided"]
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:[true, "User details not provided"]
        },
        room:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room",
            required:[true, "Room details not provided"]
        },
        checkInDate: {
            type: Date,
            required:[true, "Please select the checkIn date"]
        },
        checkOutDate:{
            type: Date,
            required:[true, "Please enter the checkout date"]
        },
        totalPrice: {
            type: Number,
            required:[true, "Provide the total Price"]
        },
        status: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "cancelled",
            ],
            default: "pending"
        }
    },
    {
        timestamps:true,
    }
)

const Booking = models.bookings || model<BookingInterface>('bookings', bookingSchema);

export default Booking;