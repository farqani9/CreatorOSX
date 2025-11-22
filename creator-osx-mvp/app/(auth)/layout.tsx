import React from 'react';

/**
 * Auth Layout
 * 
 * This layout wraps authentication pages (login, signup).
 * It provides a centered, clean layout for auth forms.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-md px-4">
        {children}
      </div>
    </div>
  );
}

