
import mongoose, { Schema, models, model, Types } from "mongoose";

interface HotelInterface {
    name: string;
    description?: string;
    location: string;
    manager: Types.ObjectId;
    rooms?: Types.ObjectId[];
    amenities?:string[];
    rating?:number;
    images?:string[];
}

const hotelSchema = new Schema<HotelInterface>(
    {
        name:{
            type: String,
            required:[true, "Please enter hotel's name"]
        },
        description:{
            type: String,
        },
        location:{
            type: String,
            required: [true, "Please enter a location"]
        },
        manager: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        rooms: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }],
        amenities: [{
            type: String,
        }],
        rating: {
            type: Number,
            default: 0
        },
        images:[{
            type: String,
        }]
    },
    {
        timestamps:true,
    }
)

const Hotel = models.hotels || model<HotelInterface>('hotels', hotelSchema);

export default Hotel;