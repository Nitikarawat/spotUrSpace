'use server';

import { createAdminClient } from "@/config/appwrite";
import { cookies } from "next/headers";

async function userSession(prevState, formData) {
    const email = formData.get('email');

    const password = formData.get('password');
  //  console.log(email, password);
    if (!email || !password)
    {
        return{
            error : 'Please Fill Out All Fields!!'
        };
    }
    const {account} = await createAdminClient();
    try{

        const sessionid = await account.createEmailPasswordSession(email, password);
      //  console.log('Session Created:', sessionid);
        // console.log('Session Expiration:', sessionid.expires); 

        const cookieStore = await cookies(); 
        await cookieStore.set('appwrite-session',sessionid.secret,{
            httpOnly:true,
            secure:true,
            sameSite:'strict',
            expires:new Date(sessionid.expire),
            path:'/'
        });
      //  console.log('Session Cookie get vaue:', cookieStore.get('user-session'));
       // console.log('Session Cookie Value:', sessionid.value);
        // console.log('Session Expiration:', sessionid.expire);
       // console.log('Session Response:', sessionid);

        return { success: true, error: null };
    }
    catch(error)
    {
        console.log('Auth Error!', error);
        return{
            error : 'Invalid Credentials',
        };
    }
   
}

export default userSession;