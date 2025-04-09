import Image from "next/image";
import Link from "next/link";

const CardRoom = ({ room }) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
const imageUrl=`https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
const imagesrc = room.image ? imageUrl : '/images/no-image.jpg';
    return ( 
        <div
        className="bg-white shadow-2xl rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4 ">
          <Image
            src={imagesrc}
            width={400}
            height={100}
            alt={room.name}
            className="w-full sm:w-50 sm:h-50 mb-3 text-bold sm:mb-0 object-cover rounded-lg"
          />
          <div className="space-y-1 mt-3">
            <h4 className="text-lg font-bold" style={{color:"#1F313B"}}>{ room.name }</h4>
            <p className="text-sm text-gray-600">
              <span className=" font-bold "style={{color:"#335263"}}> Address: </span>
              {room.address}
              </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold " style={{color:"#335263"}}> Availability: </span>
               {room.availability}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold " style={{color:"#335263"}}> Price: </span> Rs.  
          {room.price_per_hour}        
              </p>
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
          >
          <Link
            href={`/rooms/${room.$id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-900"
            >View Room
            </Link>
        </div>
      </div>

     );
}
 
export default CardRoom;