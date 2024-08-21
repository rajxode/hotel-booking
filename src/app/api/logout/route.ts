
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
        response.cookies.set("token","",{httpOnly: true, expires: Date.now()});
        return response;
    } catch (error : any) {
        console.log('error in logout', error.message);
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