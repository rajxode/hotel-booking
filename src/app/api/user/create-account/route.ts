
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import bcryptjs from 'bcryptjs';
import User from "@/models/User";
import { BodyData, ResponseData, ErrMessage } from "@/app/api/user/create-account/_interfaces/createAccountInterface";

connect();

export async function POST(req: NextRequest) {
    try {
        const body:BodyData = await req.json();
        const {name, email, password,role, phone,address} = body;

        if(!name || !email || !password || !role) {
            throw new Error("Please provide all the values");
        }

        const userExist = await User.findOne({email});
        if(userExist) {
            throw new Error('User already exists.')
        }

        const hashPassword = await bcryptjs.hash(password,10);

        const user = new User({
            name,
            email,
            password : hashPassword,
            role,
            phone,
            address,
        })

        const newUser:BodyData = await user.save();

        newUser.password = undefined;

        const res:NextResponse<ResponseData> = NextResponse.json({
            success:true,
            message: "New user created",
            user:newUser
        },
        {
            status: 200
        });

        return res;

    } catch (error:any) {
        const err = error as ErrMessage;
        console.log('error in signup', err.message);
        return NextResponse.json({
            success:false,
            message: err.message
        })
    }
}