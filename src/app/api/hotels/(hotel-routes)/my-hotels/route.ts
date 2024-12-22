
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Hotel from "@/models/Hotel";
import { getDataFromToken } from "@/utils/helperFunctions/getDataFromToken";

connect();

export async function GET(req:NextRequest) {
    try {
        const userId = await getDataFromToken(req);
        if(!userId) {
            throw new Error("User not fouond");
        }
        const myHotels = await Hotel.find({manager:userId});
        return NextResponse.json({
                success:true,
                hotels:myHotels
            },{
                status:200
            }
        )
    } catch (error:any) {
        console.log("error in finding hotels", error.message);
        return NextResponse.json({
            success:false,
            message:error.message
        })
    }
}