import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SessionProviderWrapper from '@/lib/SessionProvider';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eventrix - Your event management platform',
  description: 'For all your event management needs and ticketing solutions',
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProviderWrapper>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
