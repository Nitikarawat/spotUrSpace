'use server';
import { createAdminClient } from '@/config/appwrite';
import auth from './auth';
import { ID } from 'node-appwrite';
import { revalidatePath } from 'next/cache';

async function createRoom(previousState, formData) {
// getting db instance
  const { databases, storage } = await createAdminClient();

  try { 
    const { user } = await auth();
  console.log("User is  ",user);
    if (!user) {
      return {
        error: 'Error User login data fetch issue!',
      };
    }
  
let imageId;

const img= formData.get('image');
if (img && img.size > 0 && img.name !== 'undefined') {
  try {
    // Upload
    const response = await storage.createFile('rooms', ID.unique(), img);
    imageId = response.$id;
  } 
  catch (error) {
    console.log('Error uploading image', error);
    return {
      error: 'Error uploading image',
    };
  }
} 
else {
  console.log('No image file provided or file is invalid');
}
    const newRoom = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      ID.unique(),
      {
        user_id: user.id,
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

    revalidatePath('/', 'layout');

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    const errorMessage =
      error.response.message || 'An unexpected error has occured';
    return {
      error: errorMessage,
    };
  }
}

export default createRoom;
