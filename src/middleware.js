import { NextResponse } from "next/server";

export default function middleware(req){
          let verify = req.cookies.get('accessToken')?.value
          let url = req.url;
          console.log(verify, url)
          if(verify == undefined){
                    if (
                              !req.nextUrl.pathname.startsWith('/login') && 
                              !req.nextUrl.pathname.startsWith('/signup') &&
                              !req.nextUrl.pathname.startsWith('/forgot-password') &&
                              !req.nextUrl.pathname.startsWith('/confirm-otp')  &&
                              !req.nextUrl.pathname.startsWith('/change-password') &&
                              !req.nextUrl.pathname.startsWith('/terms&conditions') &&
                              !req.nextUrl.pathname.startsWith('/user-info') &&
                              !req.nextUrl.pathname.startsWith('/landing-page') 
                    ){
                              return NextResponse.rewrite(new URL('/landing-page', req.url))
                    }
          } else{
                    if (
                              req.nextUrl.pathname.startsWith('/login') || 
                              req.nextUrl.pathname.startsWith('/signup') ||
                              req.nextUrl.pathname.startsWith('/forgot-password') ||
                              req.nextUrl.pathname.startsWith('/confirm-otp')  ||
                              req.nextUrl.pathname.startsWith('/change-password') ||
                              req.nextUrl.pathname.startsWith('/terms&conditions') ||
                              req.nextUrl.pathname.startsWith('/user-info') 
                    ){
                              return NextResponse.rewrite(new URL('/', req.url))
                    }
          }
}

export const config = {
          matcher: [
                    '/((?!api|_next/static|_next/image|favicon.ico).*)',
          ],
}