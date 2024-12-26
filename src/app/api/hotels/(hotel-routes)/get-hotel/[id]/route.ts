
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
                success:false
            })
        }

        return NextResponse.json({
            success:true,
            hotel
        })
    } catch (error) {
        return NextResponse.json({
            success:false
        })
    }
}