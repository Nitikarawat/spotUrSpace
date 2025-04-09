'use server';
import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function auth() {
  const sessionCookie =  (await cookies()).get('appwrite-session');
 
  
  if (!sessionCookie) {
    console.log("inside if not session");
    return {
        isAuthenticated: false,
    };
  }
  console.log(" if session");
  try {
    const { account } = await createSessionClient(sessionCookie.value);
  console.log("account : ", account);

    const user = await account.get();
    console.log("user : ", user);

    return {
        isAuthenticated: true,
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    };

  } 
  catch (error) {
    console.log("inside if error block");
    console.log("Error Occured");
    return {
      isAuthenticated: false,
    };
  }
}

export default auth;