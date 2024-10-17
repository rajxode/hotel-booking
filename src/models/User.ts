
import mongoose, { Schema, models, model, Types } from "mongoose";

interface UserInterface {
    name: string;
    email: string;
    password: string;
    role: "customer" | "manager";
    phone?: string;
    address?: string;
    bookings: Types.ObjectId[];
}

const userSchema = new Schema<UserInterface>(
    {
        name:{
            type: String,
            required:[true, "Please provide name"]
        },
        email:{
            type: String,
            required: [true,"Please enter email address"],
            unique: true, 
        },
        password:{
            type: String,
            required: [true, "Please enter a password"]
        },
        role: {
            type: String,
            enum:[
                "manager",
                "customer"
            ],
            required:[true, "Please enter the role."],
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        bookings: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking"
        }]
    },
    {
        // timestamp
        timestamps:true,
    }
)

const User = models.users || model<UserInterface>('users', userSchema);

export default User;