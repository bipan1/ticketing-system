'use server';

import { EventSubmitData } from '@/types/Event';
import prisma from '../lib/Prisma';
import bcrypt from 'bcryptjs';

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
  data?: any;
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

export async function signInAction(data: { email: string; password: string }) {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  });

  if (!user) {
    return { success: false, error: 'User not found' };
  }

  const passwordMatch = await bcrypt.compare(data.password, user.password!);

  if (!passwordMatch) {
    return { success: false, error: 'Invalid password' };
  }

  return { success: true, data: user, message: 'User signed in successfully' };
}
