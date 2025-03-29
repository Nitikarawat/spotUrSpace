'use server';
import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function EndSession() {
    //process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('appwrite-session'); // Match frontend cookie name
    console.log("coookie store : ", cookieStore);
    console.log("session coookie ",sessionCookie);
  if (!sessionCookie?.value) {
    return { error: 'No active session found' };
  }

  try {

    const { account } = await createSessionClient(sessionCookie.value);
    console.log("account info : ", account);
    // Delete current session
    await account.deleteSession('current');
    
    // Clear the cookie
    cookieStore.set({
      name: 'appwrite-session',
      value: '',
      expires: new Date(0),
      path: '/',
    });
     
    
cookieStore.delete('appwrite-session');

    return { success: true };
  } catch (error) {
    console.error('Session destruction error:', error);
    
    // Still clear the cookie even if server deletion failed
   cookieStore.set({
      name: 'appwrite-session',
      value: '',
      expires: new Date(0),
      path: '/',
    });

    return { 
      error: error.message || 'Failed to end session properly',
      success: false 
    };
  }
}

export default EndSession;