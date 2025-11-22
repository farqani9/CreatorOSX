# CreatorOSX MVP - Development Tasks

**Generated**: November 21, 2024  
**Status**: Landing page complete, MVP development pending  
**Timeline**: 7-week development plan

---

## 📊 Current State Analysis

### ✅ Completed

- [x] Landing page UI/UX (React + Vite)
- [x] Complete documentation and architecture planning
- [x] Tech stack decisions documented
- [x] Database schema designed
- [x] Security patterns documented

### ❌ Pending (ALL MVP Features)

- [ ] Next.js migration and setup
- [ ] Backend implementation (Supabase)
- [ ] All 7 core features (Contacts, Deals, Tasks, Calendar, Notes, Dashboard, Settings)
- [ ] Authentication
- [ ] Database with RLS
- [ ] API routes
- [ ] Frontend components

---

## 🎯 Phase 1: Foundation & Setup (Week 1)

### 1.1 Project Setup ✅ COMPLETED

- [x] **Create Next.js 14+ project with App Router**

  - [x] Run `npx create-next-app@latest creator-osx-mvp --typescript --tailwind --app --use-pnpm`
  - [x] Configure TypeScript strict mode
  - [x] Set up path aliases (`@/`)
  - [x] Install dependencies: React Query, Zustand, React Hook Form, Zod

- [x] **Migrate landing page to Next.js**

  - [x] Move marketing components to `components/marketing/`
  - [x] Create `app/page.tsx` with existing sections
  - [x] Update Tailwind to PostCSS (remove CDN)
  - [x] Test all landing page functionality

- [x] **Set up development tools**
  - [x] Configure ESLint with Next.js rules
  - [x] Add Prettier configuration
  - [x] Set up Husky + lint-staged for pre-commit hooks
  - [x] Create `.env.example` file (attempted - blocked by gitignore)

### 1.2 Supabase Setup ✅ COMPLETED (User action required: Create project & add credentials)

- [ ] **Create Supabase project** (USER ACTION REQUIRED)

  - [ ] Sign up at supabase.com
  - [ ] Create new project
  - [ ] Save project URL and API keys
  - [ ] Configure Google OAuth provider in Supabase dashboard
  - [ ] See `SUPABASE_SETUP.md` for detailed instructions

- [x] **Install Supabase packages**

  - [x] `pnpm add @supabase/supabase-js @supabase/ssr`
  - [x] Create `lib/supabase/client.ts` (browser client)
  - [x] Create `lib/supabase/server.ts` (server client)
  - [x] Create `lib/supabase/middleware.ts` (middleware helper)
  - [x] Create `lib/supabase/types.ts` (TypeScript types placeholder)

- [x] **Configure environment variables**
  - [x] Created `SUPABASE_SETUP.md` with setup instructions
  - [x] Updated `.gitignore` to allow `.env.example` files
  - [x] Created `middleware.ts` for session management
  - [ ] USER ACTION: Create `.env.local` and add Supabase credentials

### 1.3 Database Schema ✅ COMPLETED (User action required: Run SQL in Supabase)

- [x] **Create database tables in Supabase**

  - [x] Create `contacts` table with columns and indexes
  - [x] Create `deals` table with foreign key to contacts
  - [x] Create `tasks` table with foreign keys to contacts/deals
  - [x] Create `content_items` table with foreign key to deals
  - [x] Create `notes` table
  - [x] Verify all tables have `created_at` and `updated_at` columns
  - [x] Created comprehensive SQL schema file (`supabase/schema.sql`)

- [x] **Set up Row Level Security (RLS)**

  - [x] Enable RLS on `contacts` table
  - [x] Create policies: SELECT, INSERT, UPDATE, DELETE (user-scoped)
  - [x] Enable RLS on `deals` table + policies
  - [x] Enable RLS on `tasks` table + policies
  - [x] Enable RLS on `content_items` table + policies
  - [x] Enable RLS on `notes` table + policies
  - [x] All policies created in schema file
  - [ ] USER ACTION: Run `supabase/schema.sql` in Supabase SQL Editor

- [x] **Generate TypeScript types**

  - [x] Created full TypeScript types in `lib/supabase/types.ts`
  - [x] Added helper types for all tables
  - [x] Updated Supabase clients to use typed database
  - [ ] Optional: Use Supabase CLI to auto-generate types

- [ ] **Optional: Set up Prisma**
  - [ ] Install Prisma: `pnpm add -D prisma @prisma/client`
  - [ ] Run `npx prisma init`
  - [ ] Create `prisma/schema.prisma` with all models
  - [ ] Run `npx prisma db pull` to sync with Supabase
  - [ ] Run `npx prisma generate` to create client
  - [ ] Add seed script for development data

### 1.4 Authentication ✅ COMPLETED

- [x] **Create auth routes**

  - [x] Create `app/(auth)/login/page.tsx`
  - [x] Create `app/(auth)/signup/page.tsx` (optional for MVP - skipped)
  - [x] Create `app/(auth)/layout.tsx` (auth-specific layout)
  - [x] Create `app/auth/callback/route.ts` (OAuth callback handler)

- [x] **Implement auth hook**

  - [x] Create `lib/hooks/use-auth.ts`
  - [x] Implement `signInWithGoogle()` function
  - [x] Implement `signOut()` function
  - [x] Implement `getUser()` function

- [x] **Create middleware for route protection**

  - [x] Update `middleware.ts` in root
  - [x] Protect `/dashboard/*` routes
  - [x] Redirect authenticated users from `/login`
  - [x] Handle session refresh
  - [x] Test middleware with protected routes

- [x] **Create auth UI components**
  - [x] Google Sign-In button component (`auth-button.tsx`)
  - [x] Loading states for auth
  - [x] Error handling for auth failures
  - [x] Redirect after successful login
  - [x] Auth Provider component (`auth-provider.tsx`)
  - [x] Protected Route wrapper (`protected-route.tsx`)
  - [x] User Menu component (`user-menu.tsx`)
  - [x] Dashboard layout with auth protection
  - [x] Dashboard page with welcome message

### 1.5 Core Infrastructure ✅ COMPLETED

- [x] **Install ShadCN UI**

  - [x] Run `npx shadcn@latest init`
  - [x] Configure `components.json`
  - [x] Install initial components: `button`, `card`, `dialog`, `input`, `label`, `textarea`, `select`, `checkbox`, `dropdown-menu`, `badge`, `avatar`, `separator`

- [x] **Create validation schemas**

  - [x] Create `lib/validations.ts`
  - [x] Add `contactSchema` with Zod
  - [x] Add `dealSchema` with Zod
  - [x] Add `taskSchema` with Zod
  - [x] Add `contentItemSchema` with Zod
  - [x] Add `noteSchema` with Zod
  - [x] Add auth schemas (login, signup)
  - [x] Add settings schemas
  - [x] Add filter schemas

- [x] **Create utility functions**

  - [x] Create `lib/utils.ts` with `cn()` helper
  - [x] Add `formatDate()` and date utilities
  - [x] Add `formatCurrency()` and number formatting
  - [x] Add string utilities (truncate, capitalize, slugify, etc.)
  - [x] Add array utilities (groupBy, sortBy, unique)
  - [x] Add validation utilities (email, URL, UUID)
  - [x] Add misc utilities (debounce, throttle, clipboard)
  - [x] Create `lib/constants.ts` for app constants

- [x] **Set up Zustand stores**
  - [x] Create `store/use-modal-store.ts` for modal state
  - [x] Create `store/use-ui-store.ts` for theme, sidebar state
  - [x] Create `store/use-filter-store.ts` for filters

---

## 🏗️ Phase 2: Core Features (Weeks 2-4)

### 2.1 Feature: Contacts & Leads (Week 2, Days 1-3)

#### Backend

- [ ] **Create Contacts API routes**
  - [ ] `app/api/contacts/route.ts` - GET (list with filters) + POST (create)
  - [ ] `app/api/contacts/[id]/route.ts` - GET (single) + PATCH (update) + DELETE
  - [ ] Add status filter query param
  - [ ] Add search query param (name, brand)
  - [ ] Test all API endpoints with Postman/Thunder Client

#### Hooks

- [ ] **Create React Query hooks**
  - [ ] `lib/hooks/use-contacts.ts` - useContacts() with filters
  - [ ] useContact(id) - single contact
  - [ ] useCreateContact() - mutation
  - [ ] useUpdateContact() - mutation
  - [ ] useDeleteContact() - mutation
  - [ ] Add optimistic updates

#### Components

- [ ] **Create contact components**
  - [ ] `components/contacts/contact-card.tsx` - Display contact info
  - [ ] `components/contacts/contact-form.tsx` - Create/edit form (React Hook Form + Zod)
  - [ ] `components/contacts/contact-list.tsx` - List with status filters
  - [ ] `components/contacts/contact-status-badge.tsx` - Status indicator
  - [ ] `components/contacts/contact-dialog.tsx` - Modal for create/edit
  - [ ] `components/contacts/contact-tags.tsx` - Tag display and management

#### Pages

- [ ] **Create contacts pages**
  - [ ] `app/(dashboard)/contacts/page.tsx` - Contacts list page
  - [ ] `app/(dashboard)/contacts/[id]/page.tsx` - Contact detail page
  - [ ] Add filters: All, New, Contacted, In Discussion, Closed
  - [ ] Add search functionality
  - [ ] Add "Convert to Deal" button

#### Features

- [ ] **Implement contact features**
  - [ ] Add/edit/delete contacts
  - [ ] Simple tagging system (add/remove tags)
  - [ ] Status dropdown with 4 stages
  - [ ] Notes textarea per contact
  - [ ] Activity timeline (manual entries) - Phase 2.5 if time
  - [ ] Confirmation dialog for delete
  - [ ] Toast notifications for actions

---

### 2.2 Feature: Deals Pipeline (Week 2, Days 4-5 + Week 3, Days 1-2)

#### Backend

- [ ] **Create Deals API routes**
  - [ ] `app/api/deals/route.ts` - GET + POST
  - [ ] `app/api/deals/[id]/route.ts` - GET + PATCH + DELETE
  - [ ] Add status filter
  - [ ] Add contact_id filter
  - [ ] Test CRUD operations

#### Hooks

- [ ] **Create React Query hooks**
  - [ ] `lib/hooks/use-deals.ts` - useDeals()
  - [ ] useDeal(id)
  - [ ] useCreateDeal() - with contact linking
  - [ ] useUpdateDeal() - with status changes
  - [ ] useDeleteDeal()
  - [ ] Add cache invalidation

#### Components

- [ ] **Create deal components**
  - [ ] `components/deals/deal-card.tsx` - Deal card for Kanban
  - [ ] `components/deals/deal-form.tsx` - Create/edit form
  - [ ] `components/deals/kanban-board.tsx` - Main Kanban board
  - [ ] `components/deals/kanban-column.tsx` - Single column with drag-drop
  - [ ] `components/deals/deal-dialog.tsx` - Modal for create/edit
  - [ ] `components/deals/deal-status-select.tsx` - Status dropdown

#### Pages

- [ ] **Create deals pages**
  - [ ] `app/(dashboard)/deals/page.tsx` - Kanban board view
  - [ ] `app/(dashboard)/deals/[id]/page.tsx` - Deal detail page
  - [ ] Add 5 columns: Negotiating, Pending, Active, Completed, Lost

#### Features

- [ ] **Implement deal features**
  - [ ] Kanban board with drag-and-drop (@dnd-kit or react-beautiful-dnd)
  - [ ] Deal cards with: brand, offer amount, deliverables, due date
  - [ ] Link deal to contact (dropdown selector)
  - [ ] Attach links or docs (Phase 2.5 or 3)
  - [ ] Reminders / follow-up tasks (create task from deal)
  - [ ] Confirmation modal when dragging to "Completed"
  - [ ] Revenue sum display at top

---

### 2.3 Feature: Tasks (Week 3, Days 3-4)

#### Backend

- [ ] **Create Tasks API routes**
  - [ ] `app/api/tasks/route.ts` - GET + POST
  - [ ] `app/api/tasks/[id]/route.ts` - GET + PATCH + DELETE
  - [ ] Add filters: completed, contact_id, deal_id
  - [ ] Add due_date range filter

#### Hooks

- [ ] **Create React Query hooks**
  - [ ] `lib/hooks/use-tasks.ts` - useTasks()
  - [ ] useTask(id)
  - [ ] useCreateTask()
  - [ ] useUpdateTask()
  - [ ] useDeleteTask()
  - [ ] useToggleTask() - toggle completed status

#### Components

- [ ] **Create task components**
  - [ ] `components/tasks/task-item.tsx` - Single task with checkbox
  - [ ] `components/tasks/task-form.tsx` - Create/edit form
  - [ ] `components/tasks/task-list.tsx` - Grouped task list
  - [ ] `components/tasks/task-dialog.tsx` - Modal
  - [ ] `components/tasks/task-filters.tsx` - Filter controls

#### Pages

- [ ] **Create tasks pages**
  - [ ] `app/(dashboard)/tasks/page.tsx` - Tasks list
  - [ ] Group by: Today, Upcoming, Unscheduled, Completed
  - [ ] Add link to contact/deal from task

#### Features

- [ ] **Implement task features**
  - [ ] Create/edit/delete tasks
  - [ ] Due dates (date picker)
  - [ ] Link tasks to contacts OR deals (optional linkage)
  - [ ] Mark as completed (checkbox)
  - [ ] Unscheduled tasks section (no due date)
  - [ ] Daily task view on dashboard (implement in Dashboard)

---

### 2.4 Feature: Dashboard (Week 3, Day 5 + Week 4, Day 1)

#### Components

- [ ] **Create dashboard widgets**
  - [ ] `components/dashboard/stats-card.tsx` - Metric card
  - [ ] `components/dashboard/recent-leads.tsx` - Recent contacts widget
  - [ ] `components/dashboard/active-deals.tsx` - Active deals widget
  - [ ] `components/dashboard/upcoming-tasks.tsx` - Tasks widget
  - [ ] `components/dashboard/revenue-chart.tsx` - Revenue visualization (Recharts)
  - [ ] `components/dashboard/content-due.tsx` - Content calendar widget

#### Pages

- [ ] **Create dashboard page**
  - [ ] `app/(dashboard)/page.tsx` - Main dashboard
  - [ ] Create grid layout (responsive)
  - [ ] Add all widgets

#### Features

- [ ] **Implement dashboard features**
  - [ ] Today's tasks (due today, incomplete)
  - [ ] Leads needing follow-up (recent, status = NEW or CONTACTED)
  - [ ] Active deals (status = NEGOTIATING, PENDING, ACTIVE)
  - [ ] Content due this week
  - [ ] Simple revenue sum from closed deals (SUM amount where status = COMPLETED)
  - [ ] Quick action buttons (+ Add Contact, + Add Deal, + Add Task)

---

### 2.5 Layout & Navigation (Week 4, Days 2-3)

#### Components

- [ ] **Create layout components**
  - [ ] `components/layout/sidebar.tsx` - Main sidebar navigation
  - [ ] `components/layout/navbar.tsx` - Top navbar with search
  - [ ] `components/layout/mobile-nav.tsx` - Mobile bottom nav
  - [ ] `components/layout/user-menu.tsx` - User dropdown menu

#### Layout

- [ ] **Create dashboard layout**
  - [ ] `app/(dashboard)/layout.tsx` - Dashboard layout with sidebar
  - [ ] Add navigation links: Dashboard, Contacts, Deals, Tasks, Calendar, Notes, Settings
  - [ ] Add user menu with: Profile, Settings, Sign Out
  - [ ] Make sidebar collapsible
  - [ ] Responsive design (mobile drawer)

---

## 🎨 Phase 3: Content & Polish (Weeks 5-6)

### 3.1 Feature: Content Calendar (Week 5, Days 1-3)

#### Backend

- [ ] **Create Content API routes**
  - [ ] `app/api/content/route.ts` - GET + POST
  - [ ] `app/api/content/[id]/route.ts` - GET + PATCH + DELETE
  - [ ] Add status filter
  - [ ] Add date range filter

#### Hooks

- [ ] **Create React Query hooks**
  - [ ] `lib/hooks/use-content.ts` - useContent()
  - [ ] useContentItem(id)
  - [ ] useCreateContent()
  - [ ] useUpdateContent()
  - [ ] useDeleteContent()

#### Components

- [ ] **Create calendar components**
  - [ ] `components/calendar/content-card.tsx` - Content item card
  - [ ] `components/calendar/weekly-view.tsx` - Week calendar
  - [ ] `components/calendar/content-form.tsx` - Create/edit form
  - [ ] `components/calendar/content-dialog.tsx` - Modal
  - [ ] `components/calendar/status-indicator.tsx` - Status badge

#### Pages

- [ ] **Create calendar pages**
  - [ ] `app/(dashboard)/calendar/page.tsx` - Weekly calendar view
  - [ ] Add week navigation (prev/next)
  - [ ] Show content cards grouped by day

#### Features

- [ ] **Implement calendar features**
  - [ ] Weekly view
  - [ ] Content cards with: title, description
  - [ ] Status: Idea → Drafting → Scheduled → Posted
  - [ ] Link content to deal (optional)
  - [ ] Post date selector
  - [ ] When posted, update deal timeline (if linked)
  - [ ] If deal deleted, keep content but unlink

---

### 3.2 Feature: Notes (Week 5, Days 4-5)

#### Backend

- [ ] **Create Notes API routes**
  - [ ] `app/api/notes/route.ts` - GET + POST
  - [ ] `app/api/notes/[id]/route.ts` - GET + PATCH + DELETE
  - [ ] Add search query (title, content)
  - [ ] Add tags filter

#### Hooks

- [ ] **Create React Query hooks**
  - [ ] `lib/hooks/use-notes.ts` - useNotes()
  - [ ] useNote(id)
  - [ ] useCreateNote()
  - [ ] useUpdateNote()
  - [ ] useDeleteNote()

#### Components

- [ ] **Create notes components**
  - [ ] `components/notes/note-editor.tsx` - Rich text editor (Tiptap or Lexical)
  - [ ] `components/notes/note-list.tsx` - Notes sidebar list
  - [ ] `components/notes/note-card.tsx` - Note preview card
  - [ ] `components/notes/note-sidebar.tsx` - Notes navigation
  - [ ] `components/notes/tag-selector.tsx` - Tag management

#### Pages

- [ ] **Create notes pages**
  - [ ] `app/(dashboard)/notes/page.tsx` - Notes list view
  - [ ] `app/(dashboard)/notes/[id]/page.tsx` - Note editor
  - [ ] Two-column layout: sidebar + editor

#### Features

- [ ] **Implement notes features**
  - [ ] Minimal rich-text editor (bold, italic, lists, headings)
  - [ ] Create/edit/delete notes
  - [ ] Tags for categorization (multi-select)
  - [ ] Search notes by title/content
  - [ ] Auto-save (debounced)
  - [ ] Templates feature (Phase 3.5 or post-MVP)

---

### 3.3 Feature: Settings (Week 6, Days 1-2)

#### Components

- [ ] **Create settings components**
  - [ ] `components/settings/profile-form.tsx` - Profile settings
  - [ ] `components/settings/theme-toggle.tsx` - Dark mode toggle
  - [ ] `components/settings/notification-settings.tsx` - Notification preferences

#### Pages

- [ ] **Create settings pages**
  - [ ] `app/(dashboard)/settings/page.tsx` - Settings tabs
  - [ ] Add tabs: Profile, Appearance, Notifications

#### Features

- [ ] **Implement settings features**
  - [ ] Profile: name, email (read-only), avatar upload (future)
  - [ ] Light / Dark mode toggle
  - [ ] Basic notification settings (email on new deal, task reminders)
  - [ ] Save preferences to user metadata in Supabase

---

### 3.4 Dark Mode Implementation (Week 6, Day 3)

- [ ] **Set up dark mode**
  - [ ] Install `next-themes`
  - [ ] Create theme provider in `components/providers/theme-provider.tsx`
  - [ ] Wrap app in theme provider
  - [ ] Update Tailwind config for dark mode
  - [ ] Add dark mode classes to all components
  - [ ] Test all pages in dark mode
  - [ ] Persist theme preference

---

### 3.5 Onboarding Flow (Week 6, Days 4-5)

#### Components

- [ ] **Create onboarding components**
  - [ ] `components/onboarding/welcome-modal.tsx` - Welcome dialog
  - [ ] `components/onboarding/platform-selector.tsx` - Choose platform
  - [ ] `components/onboarding/goal-selector.tsx` - Choose goals
  - [ ] `components/onboarding/checklist.tsx` - Onboarding checklist

#### Flow

- [ ] **Implement onboarding**
  - [ ] Detect first-time user (user_metadata.onboarded = false)
  - [ ] Show welcome modal on first login
  - [ ] Step 1: Choose main platform (IG, TikTok, LinkedIn, YouTube)
  - [ ] Step 2: Choose goal (Deals, Content, Both)
  - [ ] Save preferences to user metadata
  - [ ] Show onboarding checklist on dashboard
  - [ ] Checklist items: Add first contact, Create first deal, Add task, etc.

---

## 🚀 Phase 4: Testing & Launch (Week 7)

### 4.1 Testing Suite Setup (Days 1-2)

- [ ] **Unit tests**

  - [ ] Install Jest + React Testing Library
  - [ ] Configure test environment
  - [ ] Write tests for utility functions
  - [ ] Write tests for validation schemas
  - [ ] Write tests for key components (forms, cards)

- [ ] **Integration tests**

  - [ ] Test API routes with mock Supabase
  - [ ] Test auth flow
  - [ ] Test CRUD operations

- [ ] **E2E tests (optional)**
  - [ ] Install Playwright
  - [ ] Write critical user journey tests
  - [ ] Test onboarding flow
  - [ ] Test contact → deal conversion

### 4.2 Performance Optimization (Days 3-4)

- [ ] **Frontend optimization**

  - [ ] Add React.memo to expensive components
  - [ ] Implement code splitting with dynamic imports
  - [ ] Optimize images with Next/Image
  - [ ] Add loading skeletons for all data fetching
  - [ ] Implement infinite scroll for large lists (if needed)

- [ ] **Backend optimization**

  - [ ] Add database indexes (already done in schema)
  - [ ] Optimize Supabase queries (select specific columns)
  - [ ] Add pagination to list endpoints
  - [ ] Implement caching with React Query (already configured)

- [ ] **Run Lighthouse audit**
  - [ ] Score > 90 for Performance
  - [ ] Score > 90 for Accessibility
  - [ ] Score > 90 for Best Practices
  - [ ] Score > 90 for SEO

### 4.3 Error Handling & Edge Cases (Day 5)

- [ ] **Implement error boundaries**

  - [ ] Create global error boundary
  - [ ] Add error.tsx files for route segments
  - [ ] Add not-found.tsx for 404s
  - [ ] Add loading.tsx for suspense fallbacks

- [ ] **Handle edge cases from MVP plan**

  - [ ] Prevent deleting contact with active deals (show warning)
  - [ ] Show unscheduled tasks in separate section
  - [ ] Treat empty deal amount as 0, prompt to add later
  - [ ] Store dates in UTC (Supabase handles this)
  - [ ] Confirmation modal when dragging deal to "Completed"
  - [ ] List unlinked tasks under "General Tasks"
  - [ ] Handle content-deal unlinking gracefully
  - [ ] Template flag for notes (future feature)

- [ ] **Error monitoring setup**
  - [ ] Set up Sentry or similar
  - [ ] Add error tracking to all API routes
  - [ ] Monitor auth failures
  - [ ] Set up alerts

### 4.4 SEO & Meta Tags (Day 6)

- [ ] **Configure meta tags**

  - [ ] Update `app/layout.tsx` with default metadata
  - [ ] Add page-specific metadata for dashboard routes
  - [ ] Add Open Graph images
  - [ ] Configure robots.txt
  - [ ] Add sitemap.xml

- [ ] **Marketing page SEO**
  - [ ] Optimize landing page for "creator CRM" keywords
  - [ ] Add structured data (JSON-LD)
  - [ ] Verify Google Search Console

### 4.5 Deployment (Day 7)

- [ ] **Production setup**

  - [ ] Create production Supabase project
  - [ ] Set up production environment variables in Vercel
  - [ ] Configure custom domain
  - [ ] Set up SSL certificate
  - [ ] Enable CORS for production domain

- [ ] **Deploy to Vercel**

  - [ ] Connect GitHub repository to Vercel
  - [ ] Configure build settings
  - [ ] Set up environment variables
  - [ ] Deploy to production
  - [ ] Test all features in production
  - [ ] Monitor Vercel analytics

- [ ] **Post-deployment checks**
  - [ ] Test authentication flow
  - [ ] Verify all CRUD operations work
  - [ ] Check RLS policies are working
  - [ ] Test from different browsers/devices
  - [ ] Verify Google OAuth works
  - [ ] Check error monitoring is active

---

## 📋 Optional Enhancements (Post-MVP)

### Nice-to-Have Features

- [ ] Activity timeline for contacts (auto-tracking)
- [ ] File attachments for deals
- [ ] Email reminders for tasks
- [ ] Deal templates
- [ ] Bulk actions (multi-select, bulk delete)
- [ ] Export data (CSV)
- [ ] Advanced filters and saved views
- [ ] Keyboard shortcuts
- [ ] Command palette (Cmd+K)

### Integrations (Phase 2 - Not in MVP)

- [ ] Instagram DM API (limited access)
- [ ] LinkedIn messaging
- [ ] Email automation (Resend)
- [ ] Stripe for payments (Pro plan)
- [ ] Zapier integration

---

## 🎯 Success Criteria

### Functional Requirements

- ✅ All 7 MVP features fully functional
- ✅ Authentication with Google OAuth
- ✅ Database with proper RLS
- ✅ Responsive design (mobile + desktop)
- ✅ Dark mode toggle
- ✅ Onboarding flow
- ✅ Error handling and edge cases covered

### Performance Requirements

- ✅ Lighthouse Performance score > 90
- ✅ First Contentful Paint < 1.5s
- ✅ Time to Interactive < 3s
- ✅ No console errors in production

### Security Requirements

- ✅ All API routes authenticated
- ✅ RLS enabled on all tables
- ✅ Input validation with Zod
- ✅ HTTPS enabled
- ✅ No secrets in code/git

---

## 📝 Notes

### Development Tips

1. Work feature-by-feature (backend → hooks → components → pages)
2. Test each feature thoroughly before moving to next
3. Commit frequently with conventional commits
4. Deploy to Vercel preview for testing
5. Get user feedback early and often

### Time Management

- Each feature should take 2-3 days max
- Budget extra time for bug fixes and polish
- Prioritize must-have features over nice-to-haves
- Can push advanced features to post-MVP

### Resources

- Next.js docs: https://nextjs.org/docs
- Supabase docs: https://supabase.com/docs
- ShadCN UI: https://ui.shadcn.com/
- React Query: https://tanstack.com/query/latest

---

**Total Estimated Tasks: ~250 tasks**  
**Estimated Timeline: 7 weeks (full-time)**  
**Last Updated: November 21, 2024**
