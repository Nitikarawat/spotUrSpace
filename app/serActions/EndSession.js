'use server';


import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';


async function EndSession() {
const sessionCookie = (await cookies()).get('appwrite-session');

  if (!sessionCookie) {
    return { error: 'No active session found' };
  }

  try {
    console.log("Fetch Session value: ", sessionCookie.value);
    const { account } = await createSessionClient(sessionCookie.value);
    // Delete current session
    console.log("end Account fetch: ", account);

    await account.deleteSession('current');
    (await cookies()).delete('appwrite-session');

     
    
//cookieStore.delete('appwrite-session');

    return { success: true };
  } catch (error) {
    console.error('Session destruction error:', error);
    
    // Still clear the cookie even if server deletion failed
  //  cookieStore.set({
  //     name: 'appwrite-session',
  //     value: '',
  //     expires: new Date(0),
  //     path: '/',
  //   });

    return { 
      error: error.message || 'Failed to end session properly',
      success: false 
    };
  }
}

export default EndSession;