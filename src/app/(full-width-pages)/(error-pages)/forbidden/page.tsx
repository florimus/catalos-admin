import GridShape from '@/components/common/GridShape';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Next.js Error 404 | TailAdmin - Next.js Dashboard Template',
  description:
    'This is Next.js Error 404 page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template',
};

export default function ForbiddenPage() {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1'>
      <GridShape />
      <div className='mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]'>
        <h1 className='mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl'>
          FORBIDDEN
        </h1>

        <Image
          src='/images/error/maintenance.svg'
          alt='404'
          className='dark:hidden'
          width={472}
          height={152}
        />
        <Image
          src='/images/error/maintenance-dark.svg'
          alt='404'
          className='hidden dark:block'
          width={472}
          height={152}
        />

        <p className='mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg'>
          You do not have permission to access this page!
        </p>

        <Link
          href='/'
          className='inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200'
        >
          Back to Home Page
        </Link>
      </div>
      {/* <!-- Footer --> */}
      <p className='absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400'>
        &copy; {new Date().getFullYear()} - Catalos Commerce
      </p>
    </div>
  );
}
