'use client';

import React, { useState } from 'react';
import { Chrome, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/hooks/use-auth';

interface AuthButtonProps {
  className?: string;
}

/**
 * Google Sign-In Button Component
 * 
 * A reusable button for Google OAuth authentication.
 * Handles loading states and errors internally.
 */
export function AuthButton({ className }: AuthButtonProps) {
  const { signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signInWithGoogle();
    } catch (err: any) {
      console.error('Sign in failed:', err);
      setError(err.message || 'Sign in failed');
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <Button
        variant="primary"
        size="large"
        onClick={handleSignIn}
        disabled={isLoading}
        className="w-full justify-center"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            <Chrome size={20} />
            Sign in with Google
            <ArrowRight size={20} />
          </>
        )}
      </Button>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

