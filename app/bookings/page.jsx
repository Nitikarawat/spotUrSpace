import Heading from '@/Components/Heading';
import BookedRoomCard from '@/Components/BookedRoomCard';
import getMyBookings from '../serActions/getMyBookings';
const BookingsPage = async () => {
  const bookings = await getMyBookings();

  return (
    <>
      <Heading title='My Bookings' />
      {bookings.length === 0 ? (
        <p className='text-gray-600 mt-4'>You have no bookings</p>
      ) : (
        bookings.map((booking) => (
          <BookedRoomCard key={booking.$id} booking={booking} />
        ))
      )}
    </>
  );
};

export default BookingsPage;
