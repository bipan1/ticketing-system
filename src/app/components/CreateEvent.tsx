'use client';

import { EventSubmitData } from '@/types/Event';
import React from 'react';
import { useForm } from 'react-hook-form';

type createEventProps = {
  submitForm: (data: EventSubmitData) => void;
};

const EventForm = ({ submitForm }: createEventProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventSubmitData>();

  const onSubmit = (data: EventSubmitData) => {
    submitForm(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register('title', { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register('description', { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        {errors.description && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          {...register('price', { required: true, min: 0 })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.price && (
          <span className="text-red-500 text-sm">
            This field is required and must be a positive number
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="file"
          {...register('image', { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.image && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          {...register('location', { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.location && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          {...register('date', { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.date && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="time"
          {...register('time', { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.time && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
