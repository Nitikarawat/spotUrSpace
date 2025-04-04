'use client'

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import createUser from "../serActions/createUser";

import Link from "next/link";


const RegisterPage = () => {

const [state, formAction] =useFormState(createUser,{});

const router = useRouter();

useEffect( () => {
  if(state.error) 
    toast.error(state.error);
  if(state.success)
  {   
      toast.success("Registered ! Redirecting to Login");
      router.push('/login');
  }

}, [state])

    return ( <div className="flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-5">
          <form action={formAction}>
            <h2 className="text-2xl font-bold text-center mb-6" style={{color:"#1F313B"}}>
              Register
            </h2>
            <h2 className="text-1xl font-bold text-center mb-6" style={{color:"#335263"}}>
              Spot, Schedule, and Secure Your Workplace
            </h2>

            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2" style={{color:"#335263"}}
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2"
              style={{color:"#335263"}}
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

            <div className="mb-4">
              <label htmlFor="password" className="block font-bold mb-2"  style={{color:"#335263"}}
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

            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block  font-bold mb-2"
                style={{color:"#335263"}}
                >Confirm Password</label
              >
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>

            <div className="flex flex-col gap-5">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900"
              >
                Register
              </button>

              <p className=" text-center" style={{color:"#1F313B"}}>
                Have an account? 
                <Link href="/login" className="text-blue-500 font-bold">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
 );
}
 
export default RegisterPage;