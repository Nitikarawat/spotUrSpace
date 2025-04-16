'use client';
import { useEffect, useState } from 'react';
import { useActionState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import Heading from '@/Components/Heading';
import updateRoom from '@/app/serActions/updateRoom';

const UpdateRoom = ({ roomData }) => {
  const [state, formAction] = useActionState(updateRoom, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success('Room updated successfully!');
      router.push('/');
    }
  }, [state]);

  return (
    <>
      <Heading title='Update Room Details' />
      <div className='bg-white shadow-lg rounded-lg p-6 w-full'>
        <form action={formAction}>
          <input type='hidden' name='roomId' value={roomData.$id} />
          <input type='hidden' name='existingImageId' value={roomData.image} />

          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
              Room Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              defaultValue={roomData.name}
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              defaultValue={roomData.description}
              className='border rounded w-full h-24 py-2 px-3'
              required
            ></textarea>
          </div>

          <div className='mb-4'>
            <label htmlFor='sqft' className='block text-gray-700 font-bold mb-2'>
              Room Size
            </label>
            <input
              type='number'
              id='sqft'
              name='sqft'
              defaultValue={roomData.sqft}
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='capacity' className='block text-gray-700 font-bold mb-2'>
              Capacity
            </label>
            <input
              type='number'
              id='capacity'
              name='capacity'
              defaultValue={roomData.capacity}
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='price_per_hour' className='block text-gray-700 font-bold mb-2'>
              Price Per Hour
            </label>
            <input
              type='number'
              id='price_per_hour'
              name='price_per_hour'
              defaultValue={roomData.price_per_hour}
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='address' className='block text-gray-700 font-bold mb-2'>
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              defaultValue={roomData.address}
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='location' className='block text-gray-700 font-bold mb-2'>
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              defaultValue={roomData.location}
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='availability' className='block text-gray-700 font-bold mb-2'>
              Availability
            </label>
            <input
              type='text'
              id='availability'
              name='availability'
              defaultValue={roomData.availability}
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='amenities' className='block text-gray-700 font-bold mb-2'>
              Amenities
            </label>
            <input
              type='text'
              id='amenities'
              name='amenities'
              defaultValue={roomData.amenities}
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-8'>
            <label htmlFor='image' className='block text-gray-700 font-bold mb-2'>
              Replace Image (optional)
            </label>
            <input
              type='file'
              id='image'
              name='image'
              className='border rounded w-full py-2 px-3'
            />
          </div>

          <div className='flex flex-col gap-5'>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>
              Update Room
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateRoom;
