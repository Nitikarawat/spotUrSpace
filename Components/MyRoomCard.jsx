import Link from "next/link";
import { FaPen,FaTrash, FaEye } from "react-icons/fa";
import DeleteRoomButton from "./DeleteRoomButton";
const MyRoomCard = ({ room }) => {
    return ( 

        <div className='bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <h4 className='text-lg font-semibold'>{room.name}</h4>
        </div>
        <div className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'>
          <Link
            href={`/rooms/${room.$id}`}
            className='bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700'
          >
            <FaEye className='inline mr-1' /> View Room
          </Link>
          <Link
            href={`/rooms/update/${room.$id}/`}
            className='bg-amber-400 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-amber-500'
          >
         <FaPen className='inline mr-1' /> Update
          </Link>
          <DeleteRoomButton roomId={room.$id} />

        </div>
      </div>
     );
}
 
export default MyRoomCard;