// import { NextURL } from 'next/dist/server/web/next-url'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token = cookies(request).get("next-auth.session-token")
    console.log(token);
    if (!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next()

}


// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/blogs"],
}