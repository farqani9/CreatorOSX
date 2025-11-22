# Creator OSX - MVP

A modern CRM platform built for content creators to manage brand collaborations, content calendars, and partnerships.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
# Create .env.local file with your Supabase credentials
# See SUPABASE_SETUP.md for detailed instructions

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## 📦 Tech Stack

### Current (Landing Page)
- **Next.js 16** - React framework with App Router
- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4.1** - Utility-first styling
- **Lucide React** - Icon library
- **Recharts** - Chart components

### MVP (To Be Built)
- **Supabase** - Backend (Auth + Database + RLS)
- **Prisma** - Type-safe ORM
- **React Query** - Server state management
- **Zustand** - Client state management
- **React Hook Form + Zod** - Form handling & validation
- **ShadCN UI** - Component library

## 📁 Project Structure

```
creator-osx-mvp/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Auth routes (login, signup) - TODO
│   ├── (dashboard)/         # Protected app routes - TODO
│   ├── page.tsx             # Landing page ✅
│   └── layout.tsx           # Root layout ✅
├── components/
│   ├── marketing/           # Landing page components ✅
│   └── ui/                  # Reusable UI components ✅
├── lib/                     # Utilities & config - TODO
│   ├── supabase/           # Supabase clients - TODO
│   └── hooks/              # Custom React hooks - TODO
├── prisma/                  # Database schema - TODO
├── store/                   # Zustand stores - TODO
└── types/                   # TypeScript types - TODO
```

## 🛠️ Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm type-check   # Run TypeScript checks
```

## 📋 Development Status

### ✅ Phase 1.1 - Project Setup (COMPLETED)
- [x] Next.js project with TypeScript and Tailwind
- [x] Core dependencies installed (React Query, Zustand, Zod, etc.)
- [x] Landing page migrated from Vite to Next.js
- [x] Development tools configured (ESLint, Prettier, Husky)

### ✅ Phase 1.2 - Supabase Setup (COMPLETED)
- [x] Install Supabase packages (@supabase/ssr, @supabase/supabase-js)
- [x] Create Supabase client files (client.ts, server.ts, middleware.ts)
- [x] Set up middleware for session management
- [x] Configure environment variable templates
- [x] Create setup documentation
- [x] Add credentials to `.env.local`

### ✅ Phase 1.3 - Database Schema (COMPLETED)
- [x] Create comprehensive SQL schema file
- [x] Define 5 tables (contacts, deals, tasks, content_items, notes)
- [x] Set up Row Level Security policies (20 policies total)
- [x] Generate TypeScript types for all tables
- [x] Update Supabase clients with typed database
- [x] Create setup documentation

### ✅ Phase 1.4: Authentication - COMPLETE
- [x] Created auth routes (login, OAuth callback)
- [x] Implemented Google OAuth integration
- [x] Added route protection middleware
- [x] Created auth UI components (login, user menu)
- [x] Protected dashboard routes
- [x] Session management with httpOnly cookies

### 🚧 Next Steps (User Action Required)
- [ ] **Configure Google OAuth** in Supabase (see `GOOGLE_OAUTH_SETUP.md`)
- [ ] Test authentication flow
- [ ] Proceed to Phase 1.5: Core Infrastructure

See `MVP_TASKS.md` for the complete development roadmap.

## 🎯 MVP Features (To Be Built)

1. **Contacts & Leads** - Manage contacts with status tracking
2. **Deals Pipeline** - Kanban board for brand collaborations
3. **Tasks** - Task management linked to contacts/deals
4. **Content Calendar** - Weekly view for sponsored content
5. **Notes** - Notion-like rich text editor
6. **Dashboard** - Command center with key metrics
7. **Settings** - Profile, dark mode, notifications

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## 📚 Documentation

### Architecture & Planning
- **Project Overview**: `project-overview.mdc`
- **MVP Architecture**: `codebase-structure-mvp.mdc`
- **Coding Standards**: `coding-standards.mdc`
- **API Integration**: `api-integration.mdc`
- **Security**: `security-considerations.mdc`
- **Development Tasks**: `MVP_TASKS.md`

### Setup Guides
- **Supabase Setup**: `SUPABASE_SETUP.md`
- **Database Schema**: `supabase/README.md` and `RUN_SCHEMA.md`
- **Google OAuth**: `GOOGLE_OAUTH_SETUP.md`

### Progress Reports
- **Phase 1.1 Complete**: `PHASE_1_1_COMPLETE.md`
- **Phase 1.2 Complete**: `PHASE_1_2_COMPLETE.md`
- **Phase 1.3 Complete**: `PHASE_1_3_COMPLETE.md`
- **Phase 1.4 Complete**: `PHASE_1_4_COMPLETE.md`
- **Auth Summary**: `AUTHENTICATION_SUMMARY.md`
- **Database Verified**: `DATABASE_VERIFIED.md`

## 🤝 Contributing

This is currently a private project in active development. Please refer to the `.cursorrules` file for AI assistance guidelines.

## 📄 License

Private - All rights reserved.

---

**Version**: 0.1.4 (Authentication Complete)  
**Last Updated**: November 22, 2024  
**Progress**: Phase 1.4/13 Complete (~30%)
