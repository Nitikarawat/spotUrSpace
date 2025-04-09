import Heading from "@/Components/Heading";
import rooms from "@/data/rooms.json";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/Components/BookingForm";
import { FaArrowLeft, FaIcons } from "react-icons/fa";
import getSingleRoom from "@/app/serActions/getSingleRoom";

const ViewRoom =  async ({params}) => {
   const { id }=params;
  
   const room = await getSingleRoom(id);
   (
    (room) =>room.$id===id
    );
  if(!room)
  {
    return (<>     
    <Heading title="Room Not Found" />
    </>)
  }
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl=`https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

  const imagesrc = room.image ? imageUrl : '/images/no-image.jpg';

    return (
    <>
    <Heading title={room.name}/>
    <div className="bg-white shadow rounded-lg p-6" >
        <Link
          href='/'
        //   Go to homepaege

          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <FaArrowLeft className="inline mr-1" />
          <span className="ml-2" style={{color:"#1F313B"}}>Back to Rooms Page </span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <Image
            src={imagesrc}
            alt={room.name}
            width={500}
            height={500}
            className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
          />

          <div className="mt-4 sm:mt-0 sm:flex-1">
            <p className=" mb-4" style={{color:"#1F313B"}}> 
              {room.description}
              </p>

            <ul className="space-y-2">
              <li>
                <span className="font-bold " style={{color:"#335263"}}  >Size:</span> {room.sqft} sq
                ft
              </li>
              <li>
                <span className="font-bold " style={{color:"#335263"}} >Availability:</span>
                {room.availability}
              </li>
              <li>
                <span className="font-bold " style={{color:"#335263"}} >Price:</span>
                 Rs. {room.price_per_hour}/hour
              </li>
              <li>
                <span className="font-bold " style={{color:"#335263"}} >Address:</span> {room.address}
              </li>
            </ul>
          </div>
        </div>
        <BookingForm/>
      </div>

    </>  

    );
};
 
export default ViewRoom;