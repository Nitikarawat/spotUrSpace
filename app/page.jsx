import Image from "next/image";
import rooms from "@/data/rooms.json";
import CardRoom from "@/Components/CardRoom";
import Heading from "@/Components/Heading";
export default function Home() {
  return (
    <div >
   {/* room prop is current room */}
   <Heading title="Rooms"/>
    {rooms.length > 0 ? (
      rooms.map((room) => <CardRoom room={room}/>)
    )

    
    : ( <p>No Rooms Available Right Now</p>) }
    </div>
  );
}
