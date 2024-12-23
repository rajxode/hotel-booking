
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Hotel from "@/models/Hotel";
import { getDataFromToken } from "@/utils/helperFunctions/getDataFromToken";

connect();

export async function GET(req:NextRequest) {
    try {
        const userId = await getDataFromToken(req);
        if(!userId) {
            return NextResponse.json({
                success: false,
                message: "Authentication failed"
            }, {
                status: 401
            });
        }
        const myHotels = await Hotel.find({manager:userId});

        if(!myHotels) {
            return NextResponse.json({
                success: true,
                hotels: []
            }, {
                status: 200
            });
        }

        return NextResponse.json({
                success:true,
                hotels:myHotels
            },{
                status:200
            }
        )
    } catch (error:any) {
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, {
            status: 500
        });
    }
}