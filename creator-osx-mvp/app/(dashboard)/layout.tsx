'use client';

import React from 'react';
import { AuthProvider } from '@/components/auth/auth-provider';
import { UserMenu } from '@/components/auth/user-menu';

/**
 * Dashboard Layout
 * 
 * This layout wraps all dashboard pages.
 * Authentication protection is handled by middleware.
 * Provides common UI elements and auth context.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* Top Navbar */}
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  Creator OSX
                </h1>
              </div>

              {/* User Menu */}
              <UserMenu />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}

