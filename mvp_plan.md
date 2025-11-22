MVP PLAN — Personal Brand CRM (Notion-Style)

1. 🚀 Product Overview (Vision – 1 Liner)

A minimal, Notion-style CRM that helps personal brands manage leads, brand deals, and content workflows in one clean workspace.

2. 📦 Finalized MVP Features (Must-Haves for Phase 1)

These are the absolute essentials required for a functioning, sellable MVP.

A. Contacts & Leads

Add/edit/delete contacts

Simple tagging system

Status stages (New → Contacted → In Discussion → Closed)

Notes per contact

Activity timeline (manual entries)

B. Deals / Collaborations Pipeline

Kanban board with stages

Deal card with details: brand, offer, deliverables, due dates

Attach links or docs

Reminders / follow-up tasks (basic)

C. Tasks

Create/edit/delete tasks

Due dates

Link tasks → contacts or deals

Daily task view on dashboard

D. Content Calendar (Minimal)

Weekly view

Cards with idea title, description

Status: Idea → Drafting → Posted

Link content to deals

E. Notes (Notion-like)

Minimal rich-text editor

Create/edit/delete notes

Tags for categorization

F. Dashboard

Today’s tasks

Leads needing follow-up

Active deals

Content due this week

Simple revenue sum (from closed deals)

G. Settings

Profile

Light / Dark mode

Basic notification settings

3. 🧭 Detailed User Journey (End-to-End)

This maps exactly how a creator will experience the MVP.

A. Onboarding

User signs up via Google or email.

Quick onboarding modal:

Choose main platform (IG, TikTok, LinkedIn)

What’s your main goal? (Deals, content, both)

User lands in a clean workspace with an onboarding checklist.

B. First Action → Add a Lead

User clicks “+ Add Lead” in top right.

Enters: name, brand, contact channel, initial note.

Lead appears in Contacts → Pipeline under “New.”

User can click the card to open the details panel.

C. Lead to Deal Conversion

Lead gets interested → user opens the lead card.

Presses “Convert to Deal”.

Fills in:

Offer amount

Deliverables

Deadline

Lead automatically moves to Deal Pipeline under “Negotiating.”

D. Daily Workflow

Every morning, user lands on the Dashboard:

Tasks for Today

Pending Leads

Active Deals

Content due this week

User completes tasks → adds notes → moves deals → updates content.

This becomes their “command center.”

E. Content Planning

User goes to Content Calendar.

Adds a new content idea.

Links idea → deal (if sponsored).

Updates status through phases: Idea → Draft → Posted.

Once posted, CRM logs the date in the timeline of the linked deal.

F. Closing a Deal

In Deal Pipeline, user drags deal to Completed.

CRM asks to confirm amount + final notes.

Dashboard revenue tally updates automatically.

Deal archived but still viewable.

G. Notes Usage

User may:

Store pitch templates

Save negotiation notes

Keep content scripts

Add brainstorming ideas

Notes are tagged and searchable.

H. Returning Experience

Next session:

Dashboard shows what needs attention today

Pipelines reflect real-time progress

User can jump right into tasks or deals

Feels clean, fast, minimal

4. ⚠️ Edge Case Notes
   Data Integrity / User Behaviour

User deletes a contact who is tied to active deals → app must block or warn.

User sets tasks without due dates → they shouldn’t disappear; show under “Unscheduled Tasks.”

Deal amount left empty → should treat as 0 but prompt user to enter amount later.

Calendar and Timezones

Multi-timezone creators may get incorrect “due today” tasks → store dates in UTC.

Pipeline Drag-and-Drop

User drags deal to “Completed” accidentally → require a quick confirmation modal.

Unlinked Tasks

Some tasks may not link to contacts or deals → list them under “General Tasks.”

Content Calendar

If user links content → deal and later deletes the deal → content must not break (keep content but unlink).

Notes

Notes used as templates may get accidentally edited → consider eventually adding “Template” flag (future phase).

5. 🛠️ Tech Stack + Monetization Plan
   🧱 Tech Stack (Practical + Fast for Solo Dev)
   Frontend

Next.js (App Router)

TailwindCSS for minimal, Notion-like styling

ShadCN UI for components

Framer Motion for smooth transitions (optional)

Backend

Supabase (Auth, Postgres DB, Storage)

Or Firebase Firestore (if you want even faster iteration)

Prisma (if using Postgres)

Auth

Supabase Auth or Clerk (Google login)

State Management

Zustand or React Query

Deployment

Vercel

Integrations (Phase 2, not in MVP)

IG DM API (limited)

LinkedIn messaging

Email automation (Resend)

💰 Monetization Plan
MVP Launch Pricing

Free tier (for growth):

Up to 30 contacts

1 brand pipeline

20 tasks

No reminders

Limited content calendar

Pro Plan ($12–$15/month):

Unlimited contacts

Unlimited deals

Full content calendar

Notes with templates

Reminders + follow-up tasks

Revenue dashboard

Dark mode

Lifetime Deal for early users ($49–$89 one-time)
(Perfect for Twitter/X + Indie Hacker launches)
