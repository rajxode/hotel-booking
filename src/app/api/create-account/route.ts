
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";

connect();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {name, email, password} = body;

        if(!name || !email || !password) {
            throw new Error("Please provide all the values");
        }

        const userExist = await User.findOne({email});
        if(userExist) {
            throw new Error('User already exists.')
        }

        const user = new User({
            name,
            email,
            password
        })

        const newUser = await user.save();

        const res = NextResponse.json({
            success:true,
            message: "hello",
            user:newUser
        },
        {
            status: 200
        });

        return res;

    } catch (error:any) {
        console.log('error in signup', error.message);
        return NextResponse.json({
            success:false,
            message: error.message
        })
    }
}