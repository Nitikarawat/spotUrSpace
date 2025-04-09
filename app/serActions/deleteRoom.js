'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import { revalidatePath } from 'next/cache';

async function deleteRoom(roomid) {
  const sessionCookie = (await cookies()).get('appwrite-session');
  if (!sessionCookie) {
    redirect('/login');
  }

  try {
    const { account, databases } = await createSessionClient(
      sessionCookie.value
    );

    // Get user's ID
    const user = await account.get();
    const userId = user.$id;

    // Fetch users rooms
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      [Query.equal('user_id', userId)]
    );

    // finding room to delete
    const deleteRoom = rooms.find((room)=>room.$id === roomid);
    if(deleteRoom)
    {
        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
            deleteRoom.$id
        );
        revalidatePath('/room/my', 'layout');
        revalidatePath('/', 'layout');
        return {
                success:  true
        };
    }
    else{
        return{
            error: 'Not Found'
        }
        
    }
  } catch (error) {
    console.log('Failed to get user rooms', error);
    return{
        error: 'Deletion Failed'
    }
    
  }
}

export default deleteRoom;
