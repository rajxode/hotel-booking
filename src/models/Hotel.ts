
import mongoose, { Schema, models, model, Types } from "mongoose";

interface Location {
    city: string;
    country: string;
}

interface HotelInterface {
    name: string;
    description?: string;
    location: Location;
    manager: Types.ObjectId;
    rooms?: Types.ObjectId[];
    amenities?:string[];
    rating?:number;
    images?:string[];
    price:number;
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
            city:{
                type:String,
                required:[true,"Please enter city name"]
            },
            country:{
                type:String,
                required:[true,"Please enter country name"]
            }
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
        }],
        price:{
            type: Number,
            default: 0
        }
    },
    {
        timestamps:true,
    }
)

const Hotel = models.hotels || model<HotelInterface>('hotels', hotelSchema);

export default Hotel;