# Creator OSX - The Creator CRM

<div align="center">

**Your all-in-one Creator CRM & Ops System**

Manage brand collaborations, content calendar, and relationships — all in one place.  
Built for creators who treat partnerships like a business.

[Live Demo](#) | [Documentation](./MVP_TASKS.md) | [Design System](./creator-osx-mvp/DESIGN_SYSTEM.md)

</div>

---

## 🎯 Overview

Creator OSX is a comprehensive CRM and operations system built specifically for content creators, influencers, coaches, and personal brands. It combines contact management, deal tracking, task management, and content planning in a beautiful, intuitive interface.

### ✨ Key Features

- **Contacts & Leads** - Manage contacts with status tracking (New, Contacted, In Discussion, Closed)
- **Deals Pipeline** - Kanban board for brand collaborations with revenue tracking
- **Tasks Management** - Task system linked to contacts and deals
- **Content Calendar** - Weekly view for scheduled sponsored content
- **Notes** - Rich text editor for templates and meeting notes
- **Dashboard** - Command center with key metrics and quick actions

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15+** (App Router) - React framework with SSR
- **TypeScript 5.8+** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS with PostCSS
- **ShadCN UI** - High-quality component library
- **React Query** - Server state management
- **Zustand** - Client state management
- **React Hook Form + Zod** - Form handling and validation

### Backend
- **Supabase** - Backend-as-a-Service (Postgres, Auth, RLS, Realtime)
- **Row Level Security** - Database-level authorization
- **Google OAuth** - Authentication via Supabase Auth

### Deployment
- **Vercel** - Frontend hosting and deployment
- **Supabase Cloud** - Database and auth hosting

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or pnpm
- Supabase account (free tier available)
- Google OAuth credentials (for authentication)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/CreatorOSX.git
cd CreatorOSX/creator-osx-mvp
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Project Settings** → **API** and copy:
   - Project URL
   - Anon/Public Key
3. Run the database schema:
   - Open **SQL Editor** in Supabase
   - Copy and paste the entire contents of [`supabase/schema.sql`](./creator-osx-mvp/supabase/schema.sql)
   - Click **Run**

📖 Detailed guide: [Supabase Setup](./creator-osx-mvp/supabase/README.md)

### 4. Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create OAuth 2.0 credentials
3. Add authorized redirect URIs:
   - `http://localhost:3000/auth/callback` (development)
   - `https://your-supabase-project.supabase.co/auth/v1/callback` (production)
4. Copy Client ID and Client Secret to Supabase

📖 Detailed guide: [Google OAuth Setup](./creator-osx-mvp/GOOGLE_OAUTH_SETUP.md)

### 5. Environment Variables

Create a `.env.local` file in the `creator-osx-mvp` directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 6. Run the Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.  
Navigate to [http://localhost:3000/login](http://localhost:3000/login) to sign in.

---

## 📁 Project Structure

```
CreatorOSX/
├── creator-osx-mvp/              # Main Next.js application
│   ├── app/                      # Next.js App Router
│   │   ├── (auth)/              # Authentication routes (login)
│   │   ├── (dashboard)/         # Protected dashboard routes
│   │   │   ├── dashboard/       # Main dashboard
│   │   │   └── contacts/        # Contacts feature
│   │   ├── (marketing)/         # Public marketing pages (landing)
│   │   └── api/                 # API route handlers
│   ├── components/              # React components
│   │   ├── auth/               # Auth components (login, user menu)
│   │   ├── contacts/           # Contact feature components
│   │   ├── marketing/          # Landing page components
│   │   ├── providers/          # Context providers (React Query)
│   │   └── ui/                 # ShadCN UI primitives
│   ├── lib/                     # Utilities and configuration
│   │   ├── hooks/              # Custom React hooks (use-auth, use-contacts)
│   │   ├── supabase/           # Supabase clients and types
│   │   ├── constants.ts        # App constants (statuses, routes)
│   │   ├── utils.ts            # Utility functions
│   │   └── validations.ts      # Zod schemas
│   ├── supabase/               # Database schema and setup
│   │   ├── schema.sql          # Complete database schema with RLS
│   │   └── README.md           # Database setup instructions
│   └── DESIGN_SYSTEM.md        # UI/UX design guidelines
├── mvp_plan.md                  # Complete MVP specification
├── MVP_TASKS.md                 # Development roadmap and tasks
└── README.md                    # This file
```

---

## 🎨 Design System

Creator OSX follows a consistent design system inspired by Notion, Linear, and Airtable:

### Colors
- **Brand**: Sky Blue (#0ea5e9)
- **Neutrals**: Slate palette (50-900)
- **Status**: Blue (New), Yellow (Contacted), Orange (In Discussion), Green (Closed)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons
- Borders: `border-slate-100`
- Shadows: `shadow-sm` for subtle elevation

📖 Full guide: [Design System](./creator-osx-mvp/DESIGN_SYSTEM.md)

---

## 📊 Current Status

### ✅ Completed (Phase 1-2.1)
- [x] Next.js 15+ project setup with App Router
- [x] Supabase integration (database, auth, RLS)
- [x] Google OAuth authentication
- [x] Database schema with all MVP tables
- [x] Core infrastructure (hooks, validation, state management)
- [x] Landing page (marketing site)
- [x] Dashboard with stats and quick actions
- [x] Contacts & Leads feature (full CRUD)
  - List view with filters
  - Create/Edit form with validation
  - Status tracking (NEW, CONTACTED, IN_DISCUSSION, CLOSED)
  - Tags and notes
  - Delete with confirmation
- [x] UI/UX matching design system

### 🚧 In Progress
- [ ] Contact detail page
- [ ] Deals Pipeline (Kanban board)
- [ ] Tasks management
- [ ] Content Calendar
- [ ] Notes with rich text editor
- [ ] Settings page

### 📋 Roadmap
See [MVP_TASKS.md](./MVP_TASKS.md) for the complete 7-week development plan.

---

## 🧪 Testing

### Test Supabase Connection

Visit [http://localhost:3000/test-supabase](http://localhost:3000/test-supabase) to verify:
- Environment variables are set
- Database connection is working
- Tables are accessible
- RLS policies are active

### Test Authentication

1. Navigate to `/login`
2. Click "Sign in with Google"
3. After successful login, you should be redirected to `/dashboard`
4. Try creating a contact at `/dashboard/contacts`

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Update OAuth Redirect URIs

After deployment, add your production URL to:
1. Google OAuth credentials: `https://yourdomain.com/auth/callback`
2. Supabase Auth settings

---

## 📖 Documentation

- **[MVP Plan](./mvp_plan.md)** - Complete product specification and user journey
- **[MVP Tasks](./MVP_TASKS.md)** - Development roadmap with 7-week plan
- **[Design System](./creator-osx-mvp/DESIGN_SYSTEM.md)** - UI/UX guidelines and component patterns
- **[Supabase Setup](./creator-osx-mvp/supabase/README.md)** - Database setup instructions
- **[Google OAuth Setup](./creator-osx-mvp/GOOGLE_OAUTH_SETUP.md)** - Authentication configuration
- **[Cursor Rules](.cursorrules)** - AI assistant guidelines for the project

---

## 🤝 Contributing

This is currently a solo project, but contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Design inspiration: [Notion](https://notion.so), [Linear](https://linear.app), [Airtable](https://airtable.com)
- UI Components: [ShadCN UI](https://ui.shadcn.com)
- Icons: [Lucide React](https://lucide.dev)
- Backend: [Supabase](https://supabase.com)

---

<div align="center">

**Built with ❤️ for creators who mean business**

[Report Bug](https://github.com/yourusername/CreatorOSX/issues) · [Request Feature](https://github.com/yourusername/CreatorOSX/issues)

</div>
