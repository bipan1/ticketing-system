import { redirect } from 'next/navigation';
import { createEvent } from '@/data/Action';
import { EventSubmitData } from '@/types/Event';
import EventForm from '../components/CreateEvent';

const CreatePage = () => {
  const submitForm = async (data: EventSubmitData) => {
    'use server';
    await createEvent({
      ...data,
    });
    redirect('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
      <EventForm submitForm={submitForm} />
    </div>
  );
};

export default CreatePage;
