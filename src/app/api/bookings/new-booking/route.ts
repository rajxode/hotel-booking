
import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/utils/helperFunctions/getDataFromToken";
import Booking from "@/models/Booking";

connect();

export async function POST(req:NextRequest) {
    try {
        const userId = await getDataFromToken(req);

        if(!userId) {
            throw new Error("User not fouond");
        }

        const body = await req.json();

        const {hotel,room,checkInDate,checkOutDate,totalPrice} = body;

        if(!hotel||!room||!checkInDate||!checkOutDate||!totalPrice) {
            throw new Error("All fields are mandatory");
        }

        const newBooking = new Booking({
            hotel,
            user:userId,
            room,
            checkInDate,
            checkOutDate,
            totalPrice
        });

        await newBooking.save();

        const response = NextResponse.json({
                success:true,
                message:"new booking created",
                booking:newBooking
            },{
                status:200
            }
        )

        return response;

    } catch (error:any) {
        return NextResponse.json({
                success:false,
                message:error.message
            },{
                status:500
            }
        )
    }
}