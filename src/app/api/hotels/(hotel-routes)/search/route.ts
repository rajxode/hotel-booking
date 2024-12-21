
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Hotel from "@/models/Hotel";

connect();

export async function GET(req:NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const city = searchParams.get('city');
        const country = searchParams.get('country');

        if(!city || !country) {
            return NextResponse.json({
                    success:false,
                    message:"Bad Request"
                },{
                    status:401
                }
            )
        }

        const hotels = await Hotel.find({
            location: {
                city:city.toLowerCase(), 
                country:country.toLowerCase()
            },
        })

        const response = NextResponse.json({
                success:true,
                hotels
            },{
                status:200
            }
        )

        return response;

    } catch (error: any) {
        return NextResponse.json({
                message: error.message || "Something went wrong",
                status:false,
            },{
                status: 500
            }
        )
    }
}