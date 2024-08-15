
import { Schema, models, model } from "mongoose";

interface UserInterface {
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema<UserInterface>(
    {
        name:{
            type: String,
            required:[true, 'Please provide name']
        },
        email:{
            type: String,
            required: [true,'Please enter email address'],
            unique: true, 
        },
        password:{
            type: String,
            required: [true, 'Please enter a password']
        }
    },
    {
        // timestamp
        timestamps:true,
    }
)

const User = models.users || model<UserInterface>('users', userSchema);

export default User;