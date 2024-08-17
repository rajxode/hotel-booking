
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import bcryptjs from 'bcryptjs';
import User from "@/models/User";
import { BodyData, ResponseData, ErrMessage } from "./_interfaces/createAccountInterface";

connect();

export async function POST(req: NextRequest) {
    try {
        const body:BodyData = await req.json();
        const {name, email, password} = body;

        if(!name || !email || !password) {
            throw new Error("Please provide all the values");
        }

        const userExist = await User.findOne({email});
        if(userExist) {
            throw new Error('User already exists.')
        }

        const hashPassword : string = await bcryptjs.hash(password,10);

        const user = new User({
            name,
            email,
            password : hashPassword
        })

        const newUser:BodyData = await user.save();

        const res:NextResponse<ResponseData> = NextResponse.json({
            success:true,
            message: "hello",
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