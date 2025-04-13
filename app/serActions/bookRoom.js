'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ID } from 'node-appwrite';
import auth from './auth';
import { revalidatePath } from 'next/cache';

async function bookRoom(previousState, formData) {
  const sessionCookie = (await cookies()).get('appwrite-session');
  if (!sessionCookie) {
    redirect('/login');
  }

  try {
    const { databases } = await createSessionClient(
      sessionCookie.value
    );

    const { user } = await auth();

    if(!user)
    {
        return {
            error : "please login to book a room"
        }
    }
     const checkInDate =  formData.get('check_in_date');
     const checkOutDate =  formData.get('check_out_date');
     const checkInTime =  formData.get('check_in_time');
     const checkOutTime =  formData.get('check_out_time');


    const checkInDateTime =  `${checkInDate}T${checkInTime}`;
    const checkOutDateTime =  `${checkOutDate}T${checkOutTime}`;

    
    const bookingData = {
        start_time: checkInDateTime,
        end_time : checkOutDateTime,
        user_id: user.id,
        rooms_id: formData.get('room_id')
    }


    //book
    const newBooking = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
        ID.unique(),
        bookingData
    );

    revalidatePath('/bookings', 'layout');
    return{
        success: true,
    };
  } 
  
  catch (error) {
    console.log('Failed to book rooms', error);
    return  
    {
        error : "something went wrong"
    }
}
}

export default bookRoom;
