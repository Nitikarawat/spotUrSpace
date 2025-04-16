'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import auth from './auth';

async function getMyBookings() {
  const sessionCookie = (await cookies()).get('appwrite-session');
  if (!sessionCookie) {
    redirect('/login');
  }

  try {
    const { databases } = await createSessionClient(
      sessionCookie.value
    );

    // Get user's ID
    const { user } = await auth();
    if(!user)
    {
        return{
            error:"You must be logged in to view bookings"
        }
    }
   

    // Fetch users bookings
    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      [Query.equal('user_id', user.id)]
    );

    return bookings;
  } catch (error) {
    console.log('Failed to Fetch user Bookings', error);
    return{
        error:"Failed to Fetch User Bookings"
    }
  }
}

export default getMyBookings;
