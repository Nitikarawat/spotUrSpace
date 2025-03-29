'use client';
import { toast } from "react-toastify";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import userSession from "../serActions/userSession";
import Router, { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
const LoginPage = () => {

  const [state, formAction] = useFormState(userSession, {}); // {}   either true or error
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const route = useRouter();
  useEffect(()=>{
    if(state.error) 
      {
       
        toast.error(state.error);
      }
      if(state.success){
        toast.success('Logged in!');
        setIsAuthenticated(true);

        route.push('/');
       
      }
      },[state]);
 //console.log(state.error)
  return (  
        <div className="flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-10">
          <form action={formAction}>
            <h2 className="text-2xl font-bold text-center  mb-6" style={{color:"#1F313B"}}>
             Login
            </h2>
            <h2 className="text-1xl font-bold text-center mb-6" style={{color:"#335263"}}>
              Spot, Schedule, and Secure Your Workplace
            </h2>

            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2" style={{color:"#335263"}}
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
              <label htmlFor="password" className="block  font-bold mb-2" style={{color:"#335263"}}
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
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 font-bold"
                
              >
                Login
              </button>

              <p className="text-center" style={{color:"#1F313B"}}>
                No account?
                <Link href="/register" className="text-blue-500 font-bold ">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

    );
}
 
export default LoginPage
