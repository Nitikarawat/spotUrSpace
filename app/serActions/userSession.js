'use server';

import { createAdminClient } from "@/config/appwrite";
import { cookies } from "next/headers";

async function userSession(prevState, formData) {
    const email = formData.get('email');

    const password = formData.get('password');
  
    if (!email || !password)
    {
        return{
            error : 'Please Fill Out All Fields!!'
        };
    }
    const {account} = await createAdminClient();
    try{

        const sessionid = await account.createEmailPasswordSession(email, password);
      

        const cookieStore = await cookies(); 
        await cookieStore.set('appwrite-session',sessionid.secret,{
            httpOnly:true,
            secure:true,
            sameSite:'strict',
            expires:new Date(sessionid.expire),
            path:'/'
        });
     
        console.log("User session creation in Usersession: ", cookieStore);
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