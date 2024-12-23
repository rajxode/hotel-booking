
import mongoose, { Schema, models, model, Types } from "mongoose";

interface RoomInterface {
    hotel: Types.ObjectId;
    name: string;
    pricePerNight: number;
    available: boolean;
    maxOccupancy: number;
    bookings?:Types.ObjectId[];
    images?:string[];
    rating:number;
    desription?:string;
}

const roomSchema = new Schema<RoomInterface>(
    {
        hotel:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel",
            required:[true, "Hotel not provided"]
        },
        desription:{
            type: String,
        },
        name:{
            type: String,
            required: [true, "Enter room type"]
        },
        pricePerNight:{
            type: Number,
            required: [true, "Please enter per night price of the room"]
        },
        available: {
            type: Boolean,
            required: [true, "Please tell whether the room is available or not"]
        },
        maxOccupancy: {
            type: Number,
            required:[true, "Please enter the maximum occupancy of the room"]
        },
        bookings: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Booking"
        }],
        images:[{
            type: String,
        }],
        rating:{
            type: Number,
            default: 0,
        }
    },
    {
        timestamps:true,
    }
)

const Room = models.rooms || model<RoomInterface>('rooms', roomSchema);

export default Room;