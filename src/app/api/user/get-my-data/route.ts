
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { getDataFromToken } from "@/utils/helperFunctions/getDataFromToken";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET ( req: NextRequest) {
    try {
        const token = await getDataFromToken(req);
        if(!token) {
            return NextResponse.json({
                    success:false,
                },
                {
                    status: 401
                }
            )
        }
        const user = await User.findById(token);
        if(!user) {
            throw new Error("Invalid token");
        }
        user.password = undefined;
        const res = NextResponse.json({
                success: true,
                message: "User's data",
                user
            },
            {
                status: 200
            }
        )
        return res;
    } catch (error:any) {
        return NextResponse.json({
                success: false,
                message: error.message
            },{
                status: 403
            }
        )
    }
}