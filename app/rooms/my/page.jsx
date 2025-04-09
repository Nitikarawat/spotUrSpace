import Heading from '@/components/Heading';
import fetchMyRoom from '@/app/serActions/fetchMyRoom';
import MyRoomCard from '@/Components/MyRoomCard';
const MyRooom = async () => {
    const rooms = await fetchMyRoom();
    return ( 
<>
      <Heading title='My Rooms' />
      {rooms.length > 0 ? (
        rooms.map((room) => 
        <MyRoomCard key={room.$id}
         room={room} />)
      ) : (
        <p>No Room Listings</p>
      )}
    

</>
    );
};
 
export default MyRooom;