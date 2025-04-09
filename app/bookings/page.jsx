import Heading from "@/Components/Heading";
import { FaPen , FaEye, FaTrash} from "react-icons/fa";
const BookingPage = () => {

    return (
    <>

    <Heading title='Bookings' />
    <div
        className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div>
          <h4 className="text-lg font-semibold">Training Room</h4>
          <p className="text-sm text-gray-600">
            <strong>Check In:</strong> July 5, 2024 11:00am
          </p>
          <p className="text-sm text-gray-600">
            <strong>Check Out:</strong> July 5, 2024 1:00pm
          </p>
        </div>
        <div
          className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
        >
          <a
            href="room.html"
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
          >
           <FaEye className='inline mr-1' />  View Room
          </a>
          <a
            href="#"
            className='bg-amber-400 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-amber-500'
          >
            <FaPen className='inline mr-1' /> Update
          </a>
          <button
            href="#"
            className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700"
          >
           <FaTrash className='inline mr-1' /> Cancel Booking
          </button>
        </div>
      </div>

      <div
        className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div>
          <h4 className="text-lg font-semibold">Training Room</h4>
          <p className="text-sm text-gray-600">
            <strong>Check In:</strong> July 5, 2024 11:00am
          </p>
          <p className="text-sm text-gray-600">
            <strong>Check Out:</strong> July 5, 2024 1:00pm
          </p>
        </div>
        <div
          className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
        >
          <a
            href="room.html"
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
          >
               <FaEye className='inline mr-1' />View Room
          </a>
          <a
            href="#"
            className='bg-amber-400 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-amber-500'
          >
            <FaPen className='inline mr-1' /> Update
          </a>
         
          <button
            href="#"
            className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700"
          >
            <FaTrash className='inline mr-1' />Cancel Booking
          </button>
        </div>
      </div>

      <div
        className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div>
          <h4 className="text-lg font-semibold">Training Room</h4>
          <p className="text-sm text-gray-600">
            <strong>Check In:</strong> July 5, 2024 11:00am
          </p>
          <p className="text-sm text-gray-600">
            <strong>Check Out:</strong> July 5, 2024 1:00pm
          </p>
        </div>
        <div
          className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
        >
          <a
            href="room.html"
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
          >
              <FaEye className='inline mr-1' /> View Room
          </a>
          <a
            href="#"
            className='bg-amber-400 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-amber-500'
          >
            <FaPen className='inline mr-1' /> Update
          </a>
          <button
            href="#"
            className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700"
          >
            <FaTrash className='inline mr-1' /> Cancel Booking
          </button>
        </div>
      </div>
    </>
    );
}
 
export default BookingPage;