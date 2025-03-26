'use server';

async function userSession(prevState, formData) {
    const email = formData.get('email');

    const password = formData.get('password');
    console.log(email, password);
    if (!email || !password)
    {
        return{
            error : 'Please Fill Out All Fields!!'
        }
    }
    return { success: true, error: null };
}

export default userSession;