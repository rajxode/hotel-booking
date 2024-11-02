
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    try {
        const path = request.nextUrl.pathname;

        const isPublicPath = path === '/';

        const authToken = request.cookies.get("accessToken")?.value || '';

        if(authToken && isPublicPath) {
            const validToken = await jwtVerify(authToken,secret);
            if(!validToken) {
                return NextResponse.redirect(new URL('/', request.url));
            }
            return NextResponse.redirect(new URL('/home', request.url));
        }

        if(!authToken && !isPublicPath) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    } catch (error:any) {
        console.log("error in middleware", error.message);
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
    
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/home'
    ]
}