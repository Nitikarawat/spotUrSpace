import { NextResponse } from 'next/server';
import auth from './app/serActions/auth';

export async function middleware(request) {
  //const { pathname } = request.nextUrl;

//    console.log(`Requestedd pagee : ${pathname}`);
const { isAuth } = await auth();
if(!isAuth){

    return NextResponse.redirect(new URL('/login', request.url));
}  
return NextResponse.next();
}

export const config = {
  matcher: ['/bookings'],
};
