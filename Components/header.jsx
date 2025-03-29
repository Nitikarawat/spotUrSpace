'use client';
import Image from "next/image";
import Link from "next/link";
import logofinal from "@/Assets/Images/logofinal.png"
import { FaIcons, FaSign, FaSignInAlt, FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { PiBuildingsFill, PiSignOutBold } from "react-icons/pi"
import EndSession from "@/app/serActions/EndSession";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import auth from "@/app/serActions/auth";
import { useAuth } from "@/context/authContext";

const Header = () => {

    const route = useRouter();
    const {isAuthenticated, setIsAuthenticated} = useAuth(null);
   
 
   const logoutLogic = async () =>{
    const { success, error } = await EndSession();
    if(success)
    {      setIsAuthenticated(false);

      route.push('/login');
    }
    else{
toast.error(error);
    }
   }
   
    return (
        <header className="bg-slate-100 shadow-xl">
        <nav className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image  src={logofinal} 
                alt="SpotUrSpace"  
                className="h-12 w-auto" 
                priority={true}
                />
              </Link>
              <div className="ml-5 hidden md:block">
                <div className=" flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text text-gray-800 hover:bg-gray-700 hover:text-white"
                    
                 >
                    Rooms
                  </Link>
                {/* logged in only*/}
                {isAuthenticated && (
                    <>
                     <Link
                    href="/bookings"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white">
                    Bookings
                  </Link>
                  <Link
                    href="/rooms/add"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Add Room
                  </Link>
                
                    
                    </>

                )}
                 </div>
              </div>
            </div>
            {/*rtight side menu*/}
            <div className="ml-auto">
              <div className="ml-4 flex items-center md:ml-6">
                {/* logged Out only*/}
                {!isAuthenticated && (
                  <>
                   <Link
                  href='/login'
                  className="mr-3 text-gray-800 hover:text-gray-600"
                >
                  <FiLogIn className="inline mr-1"/>Login
                </Link>
                <Link
                  href='/register'
                  className="mr-3 text-gray-800 hover:text-gray-600"
                >
                  <FaUser className="inline mr-1"/> Register
                </Link>
                  </>
                )}
               
               {isAuthenticated && ( <>
               <Link href="/rooms/my">
                  <PiBuildingsFill className="inline mr-1" /> My Rooms
                </Link>
                <button
                 onClick={logoutLogic}
                  className="mx-3 text-gray-800 hover:text-gray-600"
                >
                  <PiSignOutBold className="inline mr-1" /> Sign Out
                </button>
                </>)}
               
              </div>
            </div>
          </div>
        </nav>
  
{/*mobile menu  */}
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Rooms
            </Link>
            {/* loggedin only */}

            <Link
              href="/bookings"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Bookings
            </Link>
            <Link
              href="/rooms/add"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Add Room
            </Link>
          </div>
        </div>
      </header>
  


    )
};
 
export default Header;
