import { createAdminClient } from '@/config/appwrite';
import UpdateRoom from '@/Components/UpdateRoom';

export default async function page({ params }) {
  const { databases } = await createAdminClient();
  const roomId = await params.id;

  const room = await databases.getDocument(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
    roomId
  );

  return <UpdateRoom roomData={room} />;
}
