
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Room from "@/models/Room";
import { getDataFromToken } from "@/utils/helperFunctions/getDataFromToken";

connect();

export async function POST(req:NextRequest) {
    try {
        const userId = await getDataFromToken(req);

        if(!userId){
            throw new Error("User not found");
        }

        const body = await req.json();
        const {hotel,name,pricePerNight,available,maxOccupancy} = body;

        if(!hotel || !name || !pricePerNight|| !available|| !maxOccupancy) {
            throw new Error("All data mandatory");
        }

        const room = new Room(body);

        await room.save();

        return NextResponse.json({
                success:true,
                room
            },{
                status:200,
            }
         )

    } catch (error :any ) {
        console.log("error in adding room", error.message);
        return NextResponse.json({
            success:true,
            message:error.message,
        })
    }
}