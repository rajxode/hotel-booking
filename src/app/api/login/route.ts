
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
import { BodyData, UserData, ResponseData } from "@/app/api/login/_interfaces/loginInterfaces";

connect();

export async function POST (req: NextRequest) {
    try {
        const body:BodyData = await req.json();

        const { email , password } = body;
        
        if( !email || !password ){
            throw new Error("All fields are mandatory");
        }

        const user : UserData | null = await User.findOne({email});

        if(!user) {
            throw new Error("User doesn't exists.");
        }

        const found = await bcryptjs.compare(password, user.password!);

        if(!found) {
            throw new Error("Wrong email/password");
        }

        user.password = undefined;

        const tokenData = {
            id: user._id,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.NEXT_PUBLIC_JWT_SECRET!,{expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRY});

        const res:NextResponse<ResponseData> = NextResponse.json({
            success: true,
            message: "user logged in",
            user,
            token
            },
            {
                status: 200
            }
        )

        res.cookies.set("token", token, {httpOnly: true});

        return res;

    } catch (error:any) {
        console.log('Error in login', error.message);
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}