'use client';
import { toast } from "react-toastify";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import userSession from "../serActions/userSession";
import Router, { useRouter } from "next/router";
const LoginPage = () => {
  const [state, formAction] = useFormState(userSession, {}); // {} is either true or error
  const route = useRouter();
  useEffect(()=>{
    if(state.error) 
      {
       
        toast.error(state.error);
      }
      if(state.success){
        toast.success('Logged in!');
        route.push('/');
        // to home page we routinggg
      }
      },[state]);
 //console.log(state.error)
  return (  
        <div className="flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-10">
          <form action={formAction}>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
             Login
            </h2>
            <h2 className="text-1xl font-bold text-center text-gray-800 mb-6">
              Secure Your Spot
            </h2>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2"
                >Password</label
              >
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>

            <div className="flex flex-col gap-5">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>

              <p className="text-center">
                No account?
                <Link href="/register" className="text-blue-500 ">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

    );
}
 
export default LoginPage
