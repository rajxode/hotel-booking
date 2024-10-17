
import mongoose, { Schema, models, model, Types } from "mongoose";

interface PaymentInterface {
    booking: Types.ObjectId;
    user: Types.ObjectId;
    amount: number;
    paymentStatus: "pending" | "completed" | "cancelled";
    paymentDate: Date;
    paymentMethod: "online" | "offline";
}

const paymentSchema = new Schema<PaymentInterface>(
    {
        booking:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking",
            required:[true, "Booking details not provided"]
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:[true, "User details not provided"]
        },
        amount:{
            type: Number,
            required: [true, "Please provide amount"],
        },
        paymentStatus: {
            type: String,
            enum: [
                "pending",
                "completed",
                "cancelled"
            ],
            default: "pending"
        },
        paymentMethod:{
            type: String,
            enum:[
                "offine",
                "online"
            ],
            required:[true, "Please choose the payment method"]
        },
        paymentDate: {
            type:Date,
            default: Date.now
        }
    },
    {
        timestamps:true,
    }
)

const Payment = models.payments || model<PaymentInterface>('payments', paymentSchema);

export default Payment;