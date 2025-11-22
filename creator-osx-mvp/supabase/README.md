# Supabase Database Setup

This directory contains the database schema and migration scripts for Creator OSX MVP.

---

## 📋 Quick Setup

### Step 1: Run the Schema

1. **Go to Supabase SQL Editor**
   - Open your project at https://app.supabase.com
   - Navigate to **SQL Editor** (in the left sidebar)

2. **Create a New Query**
   - Click "New query"
   - Copy the entire contents of `schema.sql`
   - Paste into the SQL editor

3. **Run the Query**
   - Click "Run" or press `Ctrl/Cmd + Enter`
   - Wait for completion (~5-10 seconds)
   - You should see "Success. No rows returned"

### Step 2: Verify Tables

1. Go to **Table Editor** in Supabase
2. You should see 5 new tables:
   - ✅ `contacts`
   - ✅ `deals`
   - ✅ `tasks`
   - ✅ `content_items`
   - ✅ `notes`

### Step 3: Verify RLS

1. Go to **Authentication** → **Policies**
2. Each table should have 4 policies:
   - "Users can view own [table]"
   - "Users can create own [table]"
   - "Users can update own [table]"
   - "Users can delete own [table]"

---

## 📊 Database Schema

### Tables Overview

| Table | Description | Key Fields |
|-------|-------------|------------|
| **contacts** | Lead and contact management | name, brand, email, status, tags |
| **deals** | Brand collaboration pipeline | title, brand, status, amount, due_date |
| **tasks** | Task management | title, description, due_date, completed |
| **content_items** | Content calendar | title, platform, status, post_date |
| **notes** | Note-taking system | title, content, tags, is_template |

### Enums

```sql
contact_status: NEW, CONTACTED, IN_DISCUSSION, CLOSED
deal_status: NEGOTIATING, PENDING, ACTIVE, COMPLETED, LOST
content_status: IDEA, DRAFTING, SCHEDULED, POSTED
```

### Relationships

```
contacts
  ↓ (optional)
deals
  ↓ (optional)
tasks ← also linked to contacts
  ↓ (optional)
content_items
```

---

## 🔐 Row Level Security (RLS)

All tables have RLS enabled with user-scoped policies:

```sql
-- Example: Users can only see their own data
WHERE auth.uid() = user_id
```

This ensures:
- ✅ Users can only access their own data
- ✅ Data is isolated per user
- ✅ No accidental data leaks
- ✅ Secure by default

---

## 🧪 Testing the Schema

### Option 1: Using SQL Editor

```sql
-- Check if tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('contacts', 'deals', 'tasks', 'content_items', 'notes');

-- Check RLS policies
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE tablename IN ('contacts', 'deals', 'tasks', 'content_items', 'notes');
```

### Option 2: Using the App

1. Start your dev server: `pnpm dev`
2. Visit: http://localhost:3000/test-supabase
3. Check the connection status
4. Try creating a test record

---

## 📝 Schema Details

### Contacts Table
```sql
contacts (
  id UUID PRIMARY KEY,
  user_id UUID (FK → auth.users),
  name TEXT NOT NULL,
  brand TEXT,
  email TEXT,
  phone TEXT,
  platform TEXT,
  platform_handle TEXT,
  status contact_status DEFAULT 'NEW',
  tags TEXT[],
  notes TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
```

### Deals Table
```sql
deals (
  id UUID PRIMARY KEY,
  user_id UUID (FK → auth.users),
  contact_id UUID (FK → contacts),
  title TEXT NOT NULL,
  brand TEXT NOT NULL,
  status deal_status DEFAULT 'NEGOTIATING',
  amount DECIMAL(10,2),
  currency TEXT DEFAULT 'USD',
  deliverables TEXT,
  due_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
```

### Tasks Table
```sql
tasks (
  id UUID PRIMARY KEY,
  user_id UUID (FK → auth.users),
  contact_id UUID (FK → contacts),
  deal_id UUID (FK → deals),
  title TEXT NOT NULL,
  description TEXT,
  due_date DATE,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
```

### Content Items Table
```sql
content_items (
  id UUID PRIMARY KEY,
  user_id UUID (FK → auth.users),
  deal_id UUID (FK → deals),
  title TEXT NOT NULL,
  description TEXT,
  platform TEXT,
  status content_status DEFAULT 'IDEA',
  post_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
```

### Notes Table
```sql
notes (
  id UUID PRIMARY KEY,
  user_id UUID (FK → auth.users),
  title TEXT NOT NULL,
  content TEXT,
  tags TEXT[],
  is_template BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
```

---

## 🔄 Auto-Update Timestamps

All tables have automatic `updated_at` timestamp updates via triggers:

```sql
-- Automatically sets updated_at to NOW() on every UPDATE
CREATE TRIGGER update_[table]_updated_at
    BEFORE UPDATE ON [table]
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

---

## 🎯 Next Steps

After running the schema:

1. ✅ **Generate TypeScript Types**
   ```bash
   npx supabase gen types typescript --project-id YOUR_PROJECT_ID > lib/supabase/types.ts
   ```

2. ✅ **Optional: Set up Prisma**
   ```bash
   pnpm add -D prisma @prisma/client
   npx prisma init
   npx prisma db pull
   npx prisma generate
   ```

3. ✅ **Test with Sample Data**
   - Uncomment the sample data section in `schema.sql`
   - Replace `YOUR_USER_ID` with your actual user ID
   - Run the INSERT statements

---

## 🐛 Troubleshooting

### Error: "relation already exists"
- Tables already created
- Solution: Drop tables first or skip to verification

### Error: "permission denied"
- Not authenticated to Supabase
- Solution: Check you're logged into the correct project

### Error: "uuid-ossp extension not found"
- Extension not enabled
- Solution: Run `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";` first

### RLS Policies Not Working
- Check user is authenticated
- Verify `user_id` matches `auth.uid()`
- Check policies in Authentication → Policies

---

## 📚 Resources

- [Supabase Table Editor](https://supabase.com/docs/guides/database/tables)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [PostgreSQL Data Types](https://www.postgresql.org/docs/current/datatype.html)
- [Supabase SQL Editor](https://supabase.com/docs/guides/database/overview)

---

**Status**: Ready to run  
**Estimated Time**: 2 minutes  
**Next Phase**: Authentication (Phase 1.4)

