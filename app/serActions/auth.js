'use server';
import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function auth() {
    const cookieStore = await cookies();
  const session =  cookieStore.get('appwrite-session');
 
  
  if (!session) {
    console.log("inside if not session");
    return {
        isAuthenticated: false,
    };
  }
  console.log("after if not session");
  try {
   // console.log("inside if session try ");
    const { account } = await createSessionClient(session.value);
  //  console.log("account : ", account);

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


  } catch (error) {
    console.log("inside if error block");
    return {
      isAuthenticated: false,
    };
  }
}

export default auth;
