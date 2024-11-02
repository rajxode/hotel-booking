
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const response = NextResponse.json({
                success: true, 
                message: "user logged out successfully",
            },
            {
                status: 200
            }
        )
        response.cookies.set("accessToken","",{httpOnly: true, expires: Date.now()});
        return response;
    } catch (error : any) {
        return NextResponse.json({
                success:false,
                message: error.message
            },
            {
                status: 500
            }
        )
    }
}