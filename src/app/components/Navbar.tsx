'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { MdEventAvailable } from 'react-icons/md';

const Navbar = () => {
  const { data: session } = useSession();

  console.log(session);

  return (
    <nav className="p-4 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-16 lg:px-36 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex justify-between text-purple-600">
              <MdEventAvailable size={40} className="mr-5" />
              <span className="font-extrabold text-2xl mt-1">Eventrix</span>
            </div>
          </Link>
        </div>

        <div className="hidden sm:flex">
          <input />
        </div>

        <div className="hidden sm:flex space-x-6">
          <Link href="/discover">
            <span className="text-black font-bold hover:text-purple-500 cursor-pointer">
              Discover
            </span>
          </Link>
          <Link href="/about">
            <span className="text-black font-bold hover:text-purple-500 cursor-pointer">
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-black font-bold hover:text-purple-500 cursor-pointer">
              Contact Us
            </span>
          </Link>

          {session ? (
            <button onClick={() => signOut()}>
              <span className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 cursor-pointer">
                Logout
              </span>
            </button>
          ) : (
            <>
              <Link href="/auth/login">
                <span className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 cursor-pointer">
                  Login
                </span>
              </Link>

              <Link href="/auth/signup">
                <span className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
