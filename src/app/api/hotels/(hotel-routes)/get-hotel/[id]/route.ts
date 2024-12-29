
import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig";
import Hotel from "@/models/Hotel";

connect();

export async function GET(
    req:NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;
        
        const hotel = await Hotel.findById(id);

        if(!hotel) {
            return NextResponse.json({
                    success:false,
                    message:"Hotel doesn't exists"
                },{
                    status: 400
                }
            )
        }

        return NextResponse.json({
                success:true,
                hotel
            },{
                status:200
            }
        )
    } catch (error:any) {
        console.log('error in getting hotel by id', error.message);
        return NextResponse.json({
            success:false,
            message:error.message
        })
    }
}