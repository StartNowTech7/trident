-- Create tables for Trident Aviation Admin Panel

-- 1. Services Table
CREATE TABLE IF NOT EXISTS public.services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    icon_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Team Members Table
CREATE TABLE IF NOT EXISTS public.team (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. FAQs Table
CREATE TABLE IF NOT EXISTS public.faqs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT,
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    author TEXT NOT NULL,
    role TEXT,
    content TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Inbox/Messages Table
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    subject TEXT,
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create Policies (Allow Public Read for Content)
DROP POLICY IF EXISTS "Allow public read-only access for services" ON public.services;
CREATE POLICY "Allow public read-only access for services" ON public.services FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read-only access for team" ON public.team;
CREATE POLICY "Allow public read-only access for team" ON public.team FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read-only access for faqs" ON public.faqs;
CREATE POLICY "Allow public read-only access for faqs" ON public.faqs FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read-only access for testimonials" ON public.testimonials;
CREATE POLICY "Allow public read-only access for testimonials" ON public.testimonials FOR SELECT USING (true);

-- Allow public to INSERT messages (for contact form)
DROP POLICY IF EXISTS "Allow public to insert messages" ON public.messages;
CREATE POLICY "Allow public to insert messages" ON public.messages FOR INSERT WITH CHECK (true);

-- Allow authenticated users (Admins) full access to all tables
DROP POLICY IF EXISTS "Allow authenticated all services" ON public.services;
CREATE POLICY "Allow authenticated all services" ON public.services FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated all team" ON public.team;
CREATE POLICY "Allow authenticated all team" ON public.team FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated all faqs" ON public.faqs;
CREATE POLICY "Allow authenticated all faqs" ON public.faqs FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated all testimonials" ON public.testimonials;
CREATE POLICY "Allow authenticated all testimonials" ON public.testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated all messages" ON public.messages;
CREATE POLICY "Allow authenticated all messages" ON public.messages FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 6. Storage Setup for Team Photos
-- This block ensures the bucket exists and has correct permissions

-- Create the bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('team-photos', 'team-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Set up access policies for the 'team-photos' bucket
-- 1. Allow public access to view images
DROP POLICY IF EXISTS "Public View Access" ON storage.objects;
CREATE POLICY "Public View Access" ON storage.objects FOR SELECT USING (bucket_id = 'team-photos');

-- 2. Allow authenticated users to upload images
DROP POLICY IF EXISTS "Authenticated Upload Access" ON storage.objects;
CREATE POLICY "Authenticated Upload Access" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'team-photos');

-- 3. Allow authenticated users to update/delete their images
DROP POLICY IF EXISTS "Authenticated Update/Delete Access" ON storage.objects;
CREATE POLICY "Authenticated Update/Delete Access" ON storage.objects FOR ALL TO authenticated USING (bucket_id = 'team-photos');
