
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    
    const isPublicPath = path === '/';

    const authToken = request.cookies.get("token")?.value || '';

    if(authToken && isPublicPath) {
        return NextResponse.redirect(new URL('/home', request.url));
    } 

    if(!authToken && !isPublicPath) {
        return NextResponse.redirect(new URL("/", request.url));
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/home'
    ]
}