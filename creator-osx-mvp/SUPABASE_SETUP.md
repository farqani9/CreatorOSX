# Supabase Setup Guide

This guide will walk you through setting up Supabase for the Creator OSX MVP.

---

## 📋 Prerequisites

- Node.js 18+ installed
- pnpm installed
- Supabase packages installed ✅

---

## 🚀 Step 1: Create Supabase Project

1. **Sign up at Supabase**
   - Go to https://supabase.com
   - Click "Start your project"
   - Sign up with GitHub or email

2. **Create a new project**
   - Click "New Project"
   - Choose your organization (or create one)
   - Project name: `creator-osx-mvp`
   - Database password: Generate a strong password (save it!)
   - Region: Choose closest to your users
   - Pricing plan: Free tier is fine for MVP
   - Click "Create new project"

3. **Wait for project to be ready** (takes ~2 minutes)

---

## 🔑 Step 2: Get API Keys

1. Go to **Project Settings** → **API**
2. Copy the following values:

   - **Project URL**: `https://xxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (long token)
   - **service_role key**: `eyJhbGc...` (different long token)

---

## ⚙️ Step 3: Configure Environment Variables

1. **Create `.env.local` file** in the `creator-osx-mvp` directory:

```bash
# creator-osx-mvp/.env.local

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

2. **Replace the placeholders** with your actual values from Step 2

3. **Verify .gitignore** excludes `.env.local`:
   - The file should NOT be committed to git
   - `.env.local` is already in `.gitignore` ✅

---

## 🔐 Step 4: Configure Google OAuth

1. **Go to Supabase Dashboard** → **Authentication** → **Providers**

2. **Enable Google provider**:
   - Toggle "Google" to enabled
   - You'll need Google OAuth credentials (can skip for now)

3. **Google Cloud Console** (when ready):
   - Go to https://console.cloud.google.com
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs:
     - `https://your-project.supabase.co/auth/v1/callback`
     - `http://localhost:3000/auth/callback` (for development)
   - Copy Client ID and Client Secret
   - Paste into Supabase Google provider settings

4. **Save configuration**

---

## ✅ Step 5: Verify Setup

1. **Test the connection**:

```typescript
// Test in a component
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();
const { data, error } = await supabase.from('test').select('*');
console.log(data, error);
```

2. **Check for errors**:
   - No TypeScript errors
   - Supabase client initializes
   - Middleware runs without errors

---

## 📁 Files Created

✅ **Supabase Client Files**:
- `lib/supabase/client.ts` - Browser client
- `lib/supabase/server.ts` - Server client (for Server Components)
- `lib/supabase/middleware.ts` - Middleware helper for session management

✅ **Middleware**:
- `middleware.ts` - Root middleware for authentication

✅ **Environment**:
- `.env.local` - Local environment variables (you need to create this)
- `.gitignore` - Updated to allow .env.example files

---

## 🎯 Next Steps

After completing this setup, you're ready for **Phase 1.3: Database Schema**:

1. Create database tables (contacts, deals, tasks, etc.)
2. Set up Row Level Security (RLS) policies
3. Optional: Set up Prisma for type-safe queries

---

## 🔧 Troubleshooting

### Error: "Invalid API key"
- Check that environment variables are set correctly
- Restart dev server: `pnpm dev`
- Verify no typos in `.env.local`

### Error: "supabase is not defined"
- Check import: `import { createClient } from '@/lib/supabase/client'`
- Verify path aliases in `tsconfig.json`

### Error: "CORS policy"
- Add your domain to Supabase allowed origins
- Go to **Authentication** → **URL Configuration**
- Add `http://localhost:3000` to Site URL

---

## 📚 Resources

- [Supabase Docs](https://supabase.com/docs)
- [Supabase Auth with Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [Supabase SSR Package](https://supabase.com/docs/guides/auth/server-side-rendering)

---

**Status**: ✅ Supabase packages installed and configured  
**Next**: Create Supabase project and add credentials to `.env.local`

