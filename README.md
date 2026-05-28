# Sarvodaya Foundation Website

Dynamic NGO website for **Sarvodaya Foundation for Education and Skill Development** built with Next.js, Tailwind CSS, Supabase, and Vercel.

## Features

- Modern responsive public website with Home, About, Programs, Projects, Stories, Gallery, Blog, Team, Partners, Contact, and Donate pages.
- Protected admin dashboard using Supabase Auth.
- Admin CRUD for home content, programs, projects, project images, stories, gallery, blog posts, team, partners, contact details, and donation details.
- Supabase Storage upload widget for images and PDFs.
- Database-backed image metadata: URL, alt text, caption, category, related page/section, display order, and created date.
- Contact form submissions saved to Supabase.
- SEO metadata, Open Graph support, sitemap, and robots.txt.
- Fallback demo content so the site runs before Supabase is connected.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

3. Add Supabase values:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL=optional-google-map-embed-url
```

4. In Supabase SQL editor, run:

```sql
-- paste and execute supabase/schema.sql
```

5. Create an admin user in Supabase Auth:

- Supabase Dashboard → Authentication → Users → Add user
- Use that email and password at `/admin/login`

6. Start development:

```bash
npm run dev
```

## Supabase Storage

The schema creates a public bucket named `website-assets`.

Allowed uploads:

- JPEG
- PNG
- WebP
- GIF
- PDF

The admin upload control inserts the public URL into the matching form field. Add descriptive alt text, captions, categories, and display order values for SEO and accessibility.

## Deployment on Vercel

1. Push this project to GitHub.
2. Import the GitHub repository in Vercel.
3. Add all environment variables from `.env.example` in Vercel project settings.
4. Deploy.
5. Set `NEXT_PUBLIC_SITE_URL` to the final production domain.

## Content Tables

The Supabase schema includes:

- `site_settings`
- `home_sections`
- `programs`
- `projects`
- `project_images`
- `success_stories`
- `gallery`
- `blog_posts`
- `team_members`
- `partners`
- `contact_submissions`
- `donation_details`

Supabase Auth is used for admin users.

## Admin Notes

- All content changes happen at `/admin`.
- Use `display_order` to reorder images, team members, partners, and sections.
- Use `status` fields to control ongoing, completed, upcoming, published, and draft states.
- Replace an image by uploading a new file or pasting a new Supabase Storage URL.
- Delete unused files from Supabase Storage if you no longer need them.
