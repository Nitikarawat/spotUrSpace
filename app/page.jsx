import CardRoom from "@/Components/CardRoom";
import Heading from "@/Components/Heading";
import getAllRooms from "./serActions/getAllRooms";
import Entry from "@/Components/Entry";

export default async function Home() {
  const rooms = await getAllRooms();
  return (
    <>
    <Entry/>
   <Heading title="Rooms" />
    {rooms.length > 0 ? (
      rooms.map((room) => <CardRoom room={room} key={room.$id}/>)
    ): ( <p>No Rooms Available Right Now</p>) }
    </>
  );
}
