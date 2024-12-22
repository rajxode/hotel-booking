
import { NextRequest } from "next/server";
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

export const getDataFromToken = async(req:NextRequest) => {
    try {
        console.log("userId");
        const token = req.cookies.get("accessToken")?.value || "";
        if(!token) {
            return false;
        }

        const validToken = await jwtVerify(token,secret);
        if(!validToken) {
            console.log("validToken");
            return false;
        }
        console.log('valid',validToken);
        return validToken?.payload?.id;

    } catch (error : any) {
        return false;
    }
}