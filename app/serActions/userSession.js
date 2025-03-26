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
        (await cookies()).set('user-session',sessionid.secret,{
            httpOnly:true,
            secure:true,
            sameSite:'strict',
            expires:new Date(sessionid.expires ),
            path:'/'
        });
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