'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { SignInFormInputs } from '@/types/Auth';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignInFormInputs) => {
    setLoading(true);
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/',
    });
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn('google', {
      callbackUrl: '/',
    });
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full py-3 px-4 mb-6 text-white font-bold bg-purple-500 hover:bg-purple-700 rounded"
        >
          <FcGoogle className="text-2xl mr-2" />
          Login with Google
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-4 text-white font-bold rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'}`}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
