import React from 'react';
import { AuthProvider } from '@/components/auth/auth-provider';
import { ProtectedRoute } from '@/components/auth/protected-route';
import { UserMenu } from '@/components/auth/user-menu';

/**
 * Dashboard Layout
 * 
 * This layout wraps all dashboard pages.
 * Provides authentication protection and common UI elements.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="min-h-screen bg-slate-50">
          {/* Top Navbar */}
          <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-slate-900">
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
      </ProtectedRoute>
    </AuthProvider>
  );
}

