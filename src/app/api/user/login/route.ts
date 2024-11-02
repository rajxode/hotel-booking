
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import bcryptjs from 'bcryptjs';
import { SignJWT } from 'jose';
import { BodyData, UserData, ResponseData } from "@/app/api/user/login/_interfaces/loginInterfaces";

connect();

const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

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

        const token = await new SignJWT(tokenData)
            .setProtectedHeader({alg: 'HS256'})
            .setIssuedAt()
            .setExpirationTime(process.env.NEXT_PUBLIC_JWT_EXPIRY!)
            .sign(secret);

        const res:NextResponse<ResponseData> = NextResponse.json({
            success: true,
            message: "user logged in",
            user,
            token,
            },
            {
                status: 200
            }
        )

        res.cookies.set("accessToken", token, {httpOnly: true, secure: true, maxAge: 60});

        return res;

    } catch (error:any) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}