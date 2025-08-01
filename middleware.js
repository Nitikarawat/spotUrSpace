import { NextResponse } from 'next/server';
import auth from './app/serActions/auth';

export async function middleware(request) {
  
const {isAuthenticated} = await auth();
if(!isAuthenticated){

    return NextResponse.redirect(new URL('/login', request.url));
}  
return NextResponse.next();
}

export const config = {
  matcher: ['/bookings', '/rooms/add', '/rooms/my']
}; 
