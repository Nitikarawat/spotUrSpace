'use client';
import { toast } from "react-toastify";
import { useActionState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import bookRoom from "@/app/serActions/bookRoom";


const BookingForm = ({room}) => {


    const [state, formAction] = useActionState(bookRoom, {});
    const router = useRouter();

    useEffect(()=>{

      if(state.error) 
          toast.error(state.error);
      if(state.success)
        {  toast.success("Room Has Been Booked!");
          router .push('/bookings');
        }
    })

    return ( 
        <div className="mt-6">
          <h2 className="text-xl font-bold" style={{color:"#1F313B"}}>Book this Room</h2>
          <form className="mt-4" action={formAction}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="hidden" name="room_id" value={room.$id}/>
              <div>
                <label
                  htmlFor="check_in_date"
                  className="block text-sm font-bold " style={{color:"#335263"}}
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="check_in_date"
                  name="check_in_date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="check_in_time"
                  className="block text-sm font-bold " style={{color:"#335263"}}
                >
                  Start Time
                </label>
                <input
                  type="time"
                  id="check_in_time"
                  name="check_in_time"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="check_out_date"
                  className="block text-sm font-bold " style={{color:"#335263"}}
                >
                  End Date 
                </label>
                <input
                  type="date"
                  id="check_out_date"
                  name="check_out_date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="check_out_time"
                  className="block text-sm font-bold " style={{color:"#335263"}}
                >
                 End Time 
                </label>
                <input
                  type="time"
                  id="check_out_time"
                  name="check_out_time"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Book Room
              </button>
            </div>
          </form>
        </div> );
}
 
export default BookingForm;