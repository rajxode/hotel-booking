
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Hotel from "@/models/Hotel";
import { getDataFromToken } from "@/utils/helperFunctions/getDataFromToken";

connect();

export async function POST(req:NextRequest) {
    try {
        const userId = await getDataFromToken(req);

        if(!userId) {
            throw new Error("User not fouond");
        }

        const body = await req.json();
        const {name , location} = body;

        if(!name || !location) {
            throw new Error (" All fields are required !!");
        }

        body.manager = userId;

        const hotel = new Hotel(body);

        await hotel.save();

        return NextResponse.json({
                success:true,
                hotel,
            },{
                status:200
            }
        )

    } catch (error:any) {
        console.log("error in adding a new hotel", error.message);
        return NextResponse.json({
            success:false,
            message:error.message
        })
    }
}