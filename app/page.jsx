import Image from "next/image";
import rooms from "@/data/rooms.json"
import CardRoom from "@/Components/CardRoom";
export default function Home() {
  return (
    <>
    {/* room prop is current room */}
    {rooms.length > 0 ? (
      rooms.map((room) => <CardRoom room={room}/>)
    )

    
    : ( <p>No Rooms Available Right Now</p>) }
    </>
  );
}
