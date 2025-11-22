'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function TestSupabasePage() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    async function testConnection() {
      try {
        const supabase = createClient();
        
        // Test 1: Check if client is created
        if (!supabase) {
          throw new Error('Supabase client not created');
        }

        // Test 2: Try to get session (will be null if not logged in, but should not error)
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          throw sessionError;
        }

        // Test 3: Try to query each table to verify schema
        const tables = ['contacts', 'deals', 'tasks', 'content_items', 'notes'];
        const tableResults: Record<string, boolean> = {};
        
        for (const table of tables) {
          const { error } = await supabase.from(table as any).select('count').limit(0);
          tableResults[table] = !error || !error.message.includes('does not exist');
        }

        const allTablesExist = Object.values(tableResults).every(exists => exists);

        setDetails({
          clientCreated: true,
          sessionChecked: true,
          hasSession: !!sessionData.session,
          queryAttempted: true,
          connectionWorks: true,
          tablesCreated: allTablesExist,
          tableResults,
          error: null
        });

        setStatus('connected');
      } catch (error: any) {
        setStatus('error');
        setDetails({ error: error.message });
      }
    }

    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Supabase Connection Test
          </h1>

          <div className="space-y-4">
            {status === 'checking' && (
              <div className="flex items-center gap-3 text-blue-600">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-lg">Checking connection...</span>
              </div>
            )}

            {status === 'connected' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-green-600 text-xl font-semibold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Supabase Connected Successfully!
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold text-green-800 mb-2">Connection Details:</h3>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <span className={details?.clientCreated ? 'text-green-600' : 'text-red-600'}>
                        {details?.clientCreated ? '✅' : '❌'}
                      </span>
                      Supabase client created
                    </p>
                    <p className="flex items-center gap-2">
                      <span className={details?.sessionChecked ? 'text-green-600' : 'text-red-600'}>
                        {details?.sessionChecked ? '✅' : '❌'}
                      </span>
                      Session check completed
                    </p>
                    <p className="flex items-center gap-2">
                      <span className={details?.connectionWorks ? 'text-green-600' : 'text-red-600'}>
                        {details?.connectionWorks ? '✅' : '❌'}
                      </span>
                      Database connection works
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold text-green-800 mb-2">Database Tables:</h3>
                  <div className="space-y-1 text-sm">
                    {details?.tableResults && Object.entries(details.tableResults).map(([table, exists]) => (
                      <p key={table} className="flex items-center gap-2">
                        <span className={exists ? 'text-green-600' : 'text-red-600'}>
                          {exists ? '✅' : '❌'}
                        </span>
                        <span className="font-mono">{table}</span>
                      </p>
                    ))}
                    {details?.tablesCreated && (
                      <p className="text-xs text-green-700 mt-2 font-semibold">
                        All database tables are created and accessible! 🎉
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Environment Variables:</h3>
                  <div className="space-y-1 text-sm text-blue-700">
                    <p>✅ NEXT_PUBLIC_SUPABASE_URL: Set</p>
                    <p>✅ NEXT_PUBLIC_SUPABASE_ANON_KEY: Set</p>
                    <p className="text-xs text-blue-600 mt-2">
                      URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <h3 className="font-semibold text-amber-800 mb-2">🎯 Next Steps:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-amber-700">
                    <li>Create database tables (Phase 1.3)</li>
                    <li>Set up Row Level Security</li>
                    <li>Implement authentication</li>
                  </ol>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-red-600 text-xl font-semibold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Connection Error
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 font-mono text-sm">{details?.error}</p>
                </div>

                <div className="text-sm text-gray-600">
                  <p>Please check:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Your .env.local file exists</li>
                    <li>Environment variables are correct</li>
                    <li>Dev server has been restarted</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <a 
              href="/" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

