
import mongoose, { Schema, models, model, Types } from "mongoose";

interface ReviewInterface {
    hotel: Types.ObjectId;
    user: Types.ObjectId;
    rating:number;
    comment: string;
}

const reviewSchema = new Schema<ReviewInterface>(
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
        rating:{
            type: Number,
            required: [true, "Please provide rating"],
        },
        comment: {
            type: String,
            required: [true, "Please provide a comment"]
        },
    },
    {
        timestamps:true,
    }
)

const Review = models.reviews || model<ReviewInterface>('reviews', reviewSchema);

export default Review;