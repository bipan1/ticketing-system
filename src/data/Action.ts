'use server';

import { EventSubmitData } from '@/types/Event';
import prisma from '../lib/Prisma';
import bcrypt from 'bcryptjs';
import { User } from '@/types/Auth';

export async function createEvent(data: EventSubmitData) {
  try {
    await prisma.event.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        location: data.location,
        date: new Date(data.date),
        time: data.time,
        image: data.image,
        userId: parseInt(data.userId),
      },
    });
    return { success: true, data, message: 'Post created successfully' };
  } catch (error) {
    console.error('Failed to create post:', error);
    return {
      success: false,
      error: 'Failed to create the post. Please try again later.',
    };
  }
}

export async function signUpAction(data: {
  name: string;
  email: string;
  password: string;
}): Promise<{
  success: boolean;
  data?: User;
  error?: string;
  message?: string;
}> {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    return { success: true, data: user, message: 'User created successfully' };
  } catch (error) {
    console.log(error);
    return { success: false, error: 'Failed to sign up' };
  }
}
