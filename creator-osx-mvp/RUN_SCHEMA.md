# 🚀 Run Database Schema - Quick Guide

**Time Required**: 2 minutes  
**Difficulty**: Easy ⭐

---

## Step 1: Open Supabase SQL Editor

1. Go to https://app.supabase.com
2. Click on your **creator-osx-mvp** project
3. In the left sidebar, click **SQL Editor**
4. Click **"New query"** button

---

## Step 2: Copy & Paste Schema

1. Open the file: `creator-osx-mvp/supabase/schema.sql`
2. Select all content: **Ctrl/Cmd + A**
3. Copy: **Ctrl/Cmd + C**
4. Paste into Supabase SQL Editor: **Ctrl/Cmd + V**

---

## Step 3: Run the Query

1. Click the **"Run"** button (or press **Ctrl/Cmd + Enter**)
2. Wait 5-10 seconds
3. You should see: ✅ **"Success. No rows returned"**

---

## Step 4: Verify Tables

1. Go to **Table Editor** (in left sidebar)
2. You should see 5 new tables:
   - ✅ contacts
   - ✅ deals
   - ✅ tasks
   - ✅ content_items
   - ✅ notes

---

## Step 5: Verify RLS Policies

1. Click on the **contacts** table
2. Click the **RLS** button (at the top)
3. You should see 4 policies:
   - "Users can view own contacts"
   - "Users can create own contacts"
   - "Users can update own contacts"
   - "Users can delete own contacts"

4. Repeat for other tables (all should have 4 policies each)

---

## ✅ Done!

Your database is now ready for the Creator OSX MVP!

### What was created:
- 5 database tables
- 20 RLS policies (data security)
- 23 database indexes (performance)
- Auto-update triggers
- Foreign key relationships

### Next Steps:
- Proceed to Phase 1.4: Authentication
- Or test the connection at: http://localhost:3000/test-supabase

---

## 🐛 Troubleshooting

**Error: "relation already exists"**
- Tables already created, you're good to go!
- Skip to verification step

**Error: "permission denied"**
- Make sure you're logged into the correct Supabase project
- Check you have owner/admin access

**Error: "uuid-ossp extension not found"**
- The extension creation should be automatic
- If it fails, run this first: `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

**No tables showing in Table Editor**
- Refresh the page
- Check if the query ran successfully
- Make sure you're in the right project

---

**Questions?** See `supabase/README.md` for detailed documentation.

