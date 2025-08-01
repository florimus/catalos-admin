'use client';

import React, { useState } from 'react';
import Input from '../form/input/InputField';
import Button from '../ui/button/Button';
import { useRouter } from 'next/navigation';
import { ISearchParams } from '@/core/types';
import { useGlobalLoader } from '@/context/GlobalLoaderContext';
import SecureComponent from '@/core/authentication/SecureComponent';

interface TableCardProps {
  searchPlaceHolder: string;
  searchParams: ISearchParams | null;
  children: React.ReactNode;
  desc?: string;
  cta?: {
    permission?: string;
    label?: string;
    href?: string;
    custom?: React.ReactNode;
  };
  filters?: React.ReactNode;
}

const TableCard: React.FC<TableCardProps> = ({
  searchPlaceHolder,
  searchParams,
  children,
  cta,
  filters,
  desc = '',
}) => {
  const router = useRouter();
  const { start } = useGlobalLoader();

  const [searchQuery, setSearchQuery] = useState<string | null>(
    searchParams?.query || null
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set('page', (0).toString());
    url.searchParams.set('query', searchQuery || '');
    router.push(url.toString());
  };

  const handleCtaClick = () => {
    start(() => router.push(cta?.href || '#'));
  };

  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]`}
    >
      <div className='px-6 py-5'>
        <form
          onSubmitCapture={handleSearchSubmit}
          className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type='text'
            name='search'
            id='search'
            defaultValue={searchParams?.query || ''}
            placeholder={searchPlaceHolder}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className='flex items-center justify-between gap-2'>
            <Button size='sm' type='submit' variant='outline'>
              Search
            </Button>

            <div className='flex items-center align-middle'>
              {filters ? filters : ''}
              {cta?.custom ? cta.custom : cta?.label && (
                <SecureComponent permission={cta.permission}>
                  <Button
                    size='sm'
                    type='button'
                    className='ml-2'
                    onClick={handleCtaClick}
                  >
                    {cta.label}
                  </Button>
                </SecureComponent>
              )}
            </div>
          </div>
        </form>
        {desc && (
          <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
            {desc}
          </p>
        )}
      </div>

      <div className='p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6'>
        <div className='space-y-6'>{children}</div>
      </div>
    </div>
  );
};

export default TableCard;
