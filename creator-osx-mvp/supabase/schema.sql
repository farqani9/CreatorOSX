-- Creator OSX MVP Database Schema
-- This file contains all table definitions and Row Level Security policies
-- Run this in Supabase SQL Editor: https://app.supabase.com/project/_/sql

-- ============================================================================
-- EXTENSIONS
-- ============================================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- ENUMS
-- ============================================================================

-- Contact status enum
CREATE TYPE contact_status AS ENUM ('NEW', 'CONTACTED', 'IN_DISCUSSION', 'CLOSED');

-- Deal status enum
CREATE TYPE deal_status AS ENUM ('NEGOTIATING', 'PENDING', 'ACTIVE', 'COMPLETED', 'LOST');

-- Content status enum
CREATE TYPE content_status AS ENUM ('IDEA', 'DRAFTING', 'SCHEDULED', 'POSTED');

-- ============================================================================
-- TABLES
-- ============================================================================

-- Contacts table
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    brand TEXT,
    email TEXT,
    phone TEXT,
    platform TEXT, -- e.g., Instagram, LinkedIn, TikTok
    platform_handle TEXT,
    status contact_status NOT NULL DEFAULT 'NEW',
    tags TEXT[] DEFAULT '{}',
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add indexes for contacts
CREATE INDEX idx_contacts_user_id ON contacts(user_id);
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- Deals table
CREATE TABLE deals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    brand TEXT NOT NULL,
    status deal_status NOT NULL DEFAULT 'NEGOTIATING',
    amount DECIMAL(10, 2) DEFAULT 0,
    currency TEXT DEFAULT 'USD',
    deliverables TEXT,
    due_date DATE,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add indexes for deals
CREATE INDEX idx_deals_user_id ON deals(user_id);
CREATE INDEX idx_deals_contact_id ON deals(contact_id);
CREATE INDEX idx_deals_status ON deals(status);
CREATE INDEX idx_deals_due_date ON deals(due_date);
CREATE INDEX idx_deals_created_at ON deals(created_at DESC);

-- Tasks table
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
    deal_id UUID REFERENCES deals(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    description TEXT,
    due_date DATE,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add indexes for tasks
CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_contact_id ON tasks(contact_id);
CREATE INDEX idx_tasks_deal_id ON tasks(deal_id);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
CREATE INDEX idx_tasks_completed ON tasks(completed);
CREATE INDEX idx_tasks_created_at ON tasks(created_at DESC);

-- Content items table
CREATE TABLE content_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    deal_id UUID REFERENCES deals(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    description TEXT,
    platform TEXT, -- e.g., Instagram, TikTok, YouTube
    status content_status NOT NULL DEFAULT 'IDEA',
    post_date DATE,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add indexes for content_items
CREATE INDEX idx_content_items_user_id ON content_items(user_id);
CREATE INDEX idx_content_items_deal_id ON content_items(deal_id);
CREATE INDEX idx_content_items_status ON content_items(status);
CREATE INDEX idx_content_items_post_date ON content_items(post_date);
CREATE INDEX idx_content_items_created_at ON content_items(created_at DESC);

-- Notes table
CREATE TABLE notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT,
    tags TEXT[] DEFAULT '{}',
    is_template BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add indexes for notes
CREATE INDEX idx_notes_user_id ON notes(user_id);
CREATE INDEX idx_notes_tags ON notes USING GIN(tags);
CREATE INDEX idx_notes_is_template ON notes(is_template);
CREATE INDEX idx_notes_created_at ON notes(created_at DESC);

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- TRIGGERS
-- ============================================================================

-- Contacts triggers
CREATE TRIGGER update_contacts_updated_at
    BEFORE UPDATE ON contacts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Deals triggers
CREATE TRIGGER update_deals_updated_at
    BEFORE UPDATE ON deals
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Tasks triggers
CREATE TRIGGER update_tasks_updated_at
    BEFORE UPDATE ON tasks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Content items triggers
CREATE TRIGGER update_content_items_updated_at
    BEFORE UPDATE ON content_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Notes triggers
CREATE TRIGGER update_notes_updated_at
    BEFORE UPDATE ON notes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- RLS POLICIES - CONTACTS
-- ============================================================================

-- Users can view their own contacts
CREATE POLICY "Users can view own contacts"
    ON contacts FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own contacts
CREATE POLICY "Users can create own contacts"
    ON contacts FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own contacts
CREATE POLICY "Users can update own contacts"
    ON contacts FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can delete their own contacts
CREATE POLICY "Users can delete own contacts"
    ON contacts FOR DELETE
    USING (auth.uid() = user_id);

-- ============================================================================
-- RLS POLICIES - DEALS
-- ============================================================================

-- Users can view their own deals
CREATE POLICY "Users can view own deals"
    ON deals FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own deals
CREATE POLICY "Users can create own deals"
    ON deals FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own deals
CREATE POLICY "Users can update own deals"
    ON deals FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can delete their own deals
CREATE POLICY "Users can delete own deals"
    ON deals FOR DELETE
    USING (auth.uid() = user_id);

-- ============================================================================
-- RLS POLICIES - TASKS
-- ============================================================================

-- Users can view their own tasks
CREATE POLICY "Users can view own tasks"
    ON tasks FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own tasks
CREATE POLICY "Users can create own tasks"
    ON tasks FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own tasks
CREATE POLICY "Users can update own tasks"
    ON tasks FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can delete their own tasks
CREATE POLICY "Users can delete own tasks"
    ON tasks FOR DELETE
    USING (auth.uid() = user_id);

-- ============================================================================
-- RLS POLICIES - CONTENT ITEMS
-- ============================================================================

-- Users can view their own content items
CREATE POLICY "Users can view own content items"
    ON content_items FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own content items
CREATE POLICY "Users can create own content items"
    ON content_items FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own content items
CREATE POLICY "Users can update own content items"
    ON content_items FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can delete their own content items
CREATE POLICY "Users can delete own content items"
    ON content_items FOR DELETE
    USING (auth.uid() = user_id);

-- ============================================================================
-- RLS POLICIES - NOTES
-- ============================================================================

-- Users can view their own notes
CREATE POLICY "Users can view own notes"
    ON notes FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own notes
CREATE POLICY "Users can create own notes"
    ON notes FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own notes
CREATE POLICY "Users can update own notes"
    ON notes FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can delete their own notes
CREATE POLICY "Users can delete own notes"
    ON notes FOR DELETE
    USING (auth.uid() = user_id);

-- ============================================================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================================================

-- Uncomment the lines below to insert sample data for testing
-- Replace 'YOUR_USER_ID' with an actual user ID from auth.users

/*
-- Sample contact
INSERT INTO contacts (user_id, name, brand, email, platform, platform_handle, status, tags)
VALUES (
    'YOUR_USER_ID',
    'Sarah Johnson',
    'TechFlow Co',
    'sarah@techflow.com',
    'LinkedIn',
    '@sarahtechflow',
    'CONTACTED',
    ARRAY['tech', 'enterprise']
);

-- Sample deal
INSERT INTO deals (user_id, title, brand, status, amount, deliverables, due_date)
VALUES (
    'YOUR_USER_ID',
    'Q1 Campaign Partnership',
    'TechFlow Co',
    'NEGOTIATING',
    5000.00,
    '2 Instagram Reels, 1 YouTube Video',
    '2024-03-31'
);

-- Sample task
INSERT INTO tasks (user_id, title, description, due_date, completed)
VALUES (
    'YOUR_USER_ID',
    'Follow up with TechFlow',
    'Send revised proposal with updated pricing',
    CURRENT_DATE + INTERVAL '3 days',
    false
);

-- Sample content item
INSERT INTO content_items (user_id, title, platform, status, post_date)
VALUES (
    'YOUR_USER_ID',
    'TechFlow Product Review',
    'Instagram',
    'SCHEDULED',
    CURRENT_DATE + INTERVAL '7 days'
);

-- Sample note
INSERT INTO notes (user_id, title, content, tags)
VALUES (
    'YOUR_USER_ID',
    'Brand Partnership Template',
    '## Partnership Proposal\n\n### Deliverables\n- 2 Instagram Reels\n- 1 YouTube Video\n\n### Timeline\n- Week 1: Planning\n- Week 2: Content Creation',
    ARRAY['template', 'partnerships']
);
*/

