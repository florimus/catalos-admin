'use client';

import { FloatingCartContextProvider } from '@/context/FloatingCartContext';
import { GlobalLoaderContextProvider } from '@/context/GlobalLoaderContext';
import { useSidebar } from '@/context/SidebarContext';
import AppHeader from '@/layout/AppHeader';
import AppSidebar from '@/layout/AppSidebar';
import Backdrop from '@/layout/Backdrop';
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? 'ml-0'
    : isExpanded || isHovered
    ? 'lg:ml-[290px]'
    : 'lg:ml-[90px]';

  return (
    <div className='min-h-screen xl:flex'>
      <AppSidebar />
      <Backdrop />
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        <AppHeader />
        <div className='p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6'>
          <GlobalLoaderContextProvider>
            <FloatingCartContextProvider>
              {children}
            </FloatingCartContextProvider>
          </GlobalLoaderContextProvider>
        </div>
      </div>
    </div>
  );
}
