
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;