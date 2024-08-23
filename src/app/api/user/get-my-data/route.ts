
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/User";

interface JWTPayload {
    id: string;
    email: string;
    iat: number;
    exp: number;
}

export async function GET ( req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value || '';
        if(!token) {
            throw new Error("token expired");
        }
        const tokenData = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!) as JWTPayload;
        if(!tokenData) {
            throw new Error("Invalid token");
        }
        const user = await User.findById(tokenData?.id);
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
        console.log("error in getting user's data", error.message);
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}