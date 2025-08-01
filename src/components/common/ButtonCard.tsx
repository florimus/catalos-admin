'use client';

import React from 'react';
import Button from '../ui/button/Button';

interface ButtonCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  ctaLabel?: string;
  loading?: boolean;
  onSubmit?: () => void;
}

const ButtonCard: React.FC<ButtonCardProps> = ({
  title,
  children,
  ctaLabel,
  className = '',
  loading = false,
  onSubmit = () => {},
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className} mb-5`}
    >
      <div>
        <div className='px-6 py-5 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 sm:px-8'>
          <h3 className='text-base font-medium text-gray-800 dark:text-white/90'>
            {title}
          </h3>
          {ctaLabel && (
            <Button size='xm' onClick={onSubmit}>
              {ctaLabel}
              {loading && (
                <div className='h-4 w-4 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin' />
              )}
            </Button>
          )}
        </div>

        <div className='p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6'>
          <div className='space-y-6'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
