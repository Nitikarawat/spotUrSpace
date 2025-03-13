import Image from "next/image";
import Link from "next/link";
import logo from "@/Assets/Images/logo.svg"
import { FaIcons, FaSign, FaSignInAlt, FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { PiBuildingsFill, PiSignOutBold } from "react-icons/pi"
const Header = () => {
    return (
        <header className="bg-gray-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
             {/* Add logo onlce you get it from satakshi */}
                <Image className="h-12 w-12" src={ logo } alt="SpotUrSpace"  priority={true}/>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Rooms
                  </Link>
                {/* logged in only*/}
                  <Link
                    href="/bookings.html"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Bookings
                  </Link>
                  <Link
                    href="/add-room.html"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Add Room
                  </Link>
                </div>
              </div>
            </div>
            {/*rtight side menu*/}
            <div className="ml-auto">
              <div className="ml-4 flex items-center md:ml-6">
                {/* logged Out only*/}
                <Link
                  href="login.html"
                  className="mr-3 text-gray-800 hover:text-gray-600"
                >
                  <FiLogIn className="inline mr-1"/>Login
                </Link>
                <Link
                  href="register.html"
                  className="mr-3 text-gray-800 hover:text-gray-600"
                >
                  <FaUser className="inline mr-1"/> Register
                </Link>
                <Link href="my-rooms.html">
                  <PiBuildingsFill className="inline mr-1" /> My Rooms
                </Link>
                <Link
                  href="login.html"
                  className="mx-3 text-gray-800 hover:text-gray-600"
                >
                  <PiSignOutBold className="inline mr-1" /> Sign Out
                </Link>
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
              href="/bookings.html"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Bookings
            </Link>
            <Link
              href="/add-room.html"
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
