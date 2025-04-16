'use server';
import { createAdminClient } from '@/config/appwrite';
import auth from './auth';
import { revalidatePath } from 'next/cache';
import { ID } from 'node-appwrite';

async function updateRoom(prevState, formData) {
  const { databases, storage } = await createAdminClient();
  const { user } = await auth();

  if (!user) {
    return { error: 'User not authenticated' };
  }

  const roomId = formData.get('roomId');

  if (!roomId) {
    return { error: 'Room ID is missing' };
  }

  try {
    // Handle optional image
    let imageId = formData.get('existingImageId'); // default to existing
    const img = formData.get('image');

    if (img && img.size > 0 && img.name !== 'undefined') {
      const uploaded = await storage.createFile('rooms', ID.unique(), img);
      imageId = uploaded.$id;
    }

    await databases.updateDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      roomId,
      {
        name: formData.get('name'),
        description: formData.get('description'),
        sqft: formData.get('sqft'),
        capacity: formData.get('capacity'),
        location: formData.get('location'),
        address: formData.get('address'),
        availability: formData.get('availability'),
        price_per_hour: formData.get('price_per_hour'),
        amenities: formData.get('amenities'),
        image: imageId,
      }
    );

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Update Room Error:', error);
    return { error: 'Failed to update room' };
  }
}

export default updateRoom;
