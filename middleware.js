import { NextResponse } from 'next/server';

export async function middleware(request) {
  //const { pathname } = request.nextUrl;

//    console.log(`Requestedd pagee : ${pathname}`);
const isAuth=true;
if(!isAuth){

    return NextResponse.redirect(new URL('/login', request.url));
}  
return NextResponse.next();
}

export const config = {
  matcher: ['/bookings'],
};
