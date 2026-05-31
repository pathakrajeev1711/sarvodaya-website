create extension if not exists "pgcrypto";

create table if not exists site_settings (
  id uuid primary key default gen_random_uuid(),
  organization_name text not null default 'Sarvodaya Foundation for Education and Skill Development',
  email text,
  phone text,
  address text,
  map_embed_url text,
  facebook_url text,
  instagram_url text,
  linkedin_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists home_sections (
  id uuid primary key default gen_random_uuid(),
  hero_title text,
  hero_subtitle text,
  hero_image_url text,
  primary_cta_label text,
  primary_cta_url text,
  secondary_cta_label text,
  secondary_cta_url text,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists programs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  short_description text,
  detailed_description text,
  cover_image_url text,
  beneficiary_count int default 0,
  location text,
  status text check (status in ('Ongoing', 'Completed', 'Upcoming')) default 'Ongoing',
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  project_name text not null,
  slug text unique not null,
  location text,
  donor_partner_name text,
  start_date date,
  end_date date,
  status text check (status in ('Ongoing', 'Completed', 'Upcoming')) default 'Ongoing',
  project_objective text,
  beneficiary_details text,
  activities text,
  outcomes text,
  cover_image_url text,
  report_url text,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  image_url text not null,
  alt_text text,
  caption text,
  category text,
  related_page_section text default 'projects',
  display_order int default 0,
  created_at timestamptz default now()
);

create table if not exists success_stories (
  id uuid primary key default gen_random_uuid(),
  beneficiary_name text not null,
  location text,
  story_title text not null,
  before_situation text,
  support_provided text,
  after_impact text,
  photo_url text,
  related_project_program text,
  video_url text,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  alt_text text,
  caption text,
  location text,
  image_date date,
  category text,
  related_page_section text,
  display_order int default 0,
  created_at timestamptz default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  cover_image_url text,
  content text,
  published_date date,
  author text,
  category text,
  status text check (status in ('Published', 'Draft')) default 'Draft',
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  designation text,
  photo_url text,
  short_bio text,
  email text,
  phone text,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text,
  website_url text,
  description text,
  partnership_type text,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

create table if not exists donation_details (
  id uuid primary key default gen_random_uuid(),
  appeal_text text,
  bank_name text,
  account_name text,
  account_number text,
  ifsc_code text,
  branch text,
  micr_code text,
  upi_id text,
  qr_code_url text,
  eighty_g_information text,
  csr_cta_text text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

insert into site_settings (organization_name, email, phone, address)
select 'Sarvodaya Foundation for Education and Skill Development', 'sarvodayafoundation2021@gmail.com', '+91 8892198284', 'Sarvodaya Chowk, Near Kali Mandir, Dharampur, Dobhi, Gaya, Bihar - 824201'
where not exists (select 1 from site_settings);

insert into home_sections (hero_title, hero_subtitle, hero_image_url, primary_cta_label, primary_cta_url, secondary_cta_label, secondary_cta_url)
select 'Education, skills, and dignity for stronger communities', 'Sarvodaya Foundation works with rural and underserved communities to create opportunities through education, digital empowerment, women-led livelihoods, sustainable farming, and skill development.', '/images/hero/kids.jpeg', 'Support Our Work', '/donate', 'Explore Programs', '/programs'
where not exists (select 1 from home_sections);

insert into programs (title, slug, short_description, detailed_description, cover_image_url, beneficiary_count, location, status, display_order)
values
  (
    'Sarvodaya Vidyapeeth',
    'sarvodaya-vidyapeeth',
    'Customized rural education with digital learning, smart classes, foundational support, and practical skill-based teaching to help rural students bridge the gap with urban education.',
    'Sarvodaya Vidyapeeth helps students from underserved backgrounds bridge the gap with urban education through smart classes, digital tools, foundational academic support, and practical skill-based learning.',
    '/images/programs/vidyapeeth.jpeg',
    4000,
    'Rural communities',
    'Ongoing',
    1
  ),
  (
    'Sarvodaya Digital Empowerment',
    'sarvodaya-digital-empowerment',
    'A digital inclusion program providing computer education, digital literacy, online services awareness, and technology access.',
    'Sarvodaya Digital Empowerment builds confidence with computers, online services, digital literacy, safe technology use, and access to essential digital tools for underserved communities.',
    '/images/programs/digital-empowerment.jpeg',
    3200,
    'Villages and community centers',
    'Ongoing',
    2
  ),
  (
    'Sarvodaya Saheli',
    'sarvodaya-saheli',
    'A women empowerment and livelihood initiative supporting rural women through tailoring, employment, skills, and income generation.',
    'Sarvodaya Saheli supports rural women with tailoring training, livelihood skills, employment pathways, confidence building, and practical income generation activities.',
    '/images/programs/saheli.jpeg',
    2500,
    'Rural and semi-urban communities',
    'Ongoing',
    3
  ),
  (
    'Sarvodaya Farm',
    'sarvodaya-farm',
    'Sustainable agriculture initiative promoting organic farming, Moringa plantation, medicinal plants, flower cultivation, and vermicomposting.',
    'Sarvodaya Farm promotes environmentally responsible rural farming practices through organic farming, Moringa plantation, medicinal plants, flower cultivation, vermicomposting, and sustainable agriculture awareness.',
    '/images/programs/farm.jpeg',
    5000,
    'Rural clusters',
    'Ongoing',
    4
  ),
  (
    'Sarvodaya IAS',
    'sarvodaya-ias',
    'A mentorship and guidance program supporting rural students and aspirants preparing for civil services and competitive examinations.',
    'Sarvodaya IAS provides educational support, mentoring, career guidance, and preparation direction for rural students and aspirants working toward civil services and other competitive examinations.',
    '/images/programs/ias.jpg',
    0,
    'Rural students and aspirants',
    'Ongoing',
    5
  )
on conflict (slug) do update set
  title = excluded.title,
  short_description = excluded.short_description,
  detailed_description = excluded.detailed_description,
  cover_image_url = excluded.cover_image_url,
  beneficiary_count = excluded.beneficiary_count,
  location = excluded.location,
  status = excluded.status,
  display_order = excluded.display_order,
  updated_at = now();

insert into donation_details (appeal_text, bank_name, account_name, account_number, ifsc_code, branch, micr_code, upi_id, csr_cta_text)
select 'Your support helps provide training, learning materials, digital access, and livelihood opportunities.', 'Axis Bank', 'Sarvodaya foundation for education and skill devel', '924010049628050', 'UTIB0000124', 'Axis Bank, Dadar', '400211017', '', 'Contact us for CSR partnership opportunities.'
where not exists (select 1 from donation_details);

alter table site_settings enable row level security;
alter table home_sections enable row level security;
alter table programs enable row level security;
alter table projects enable row level security;
alter table project_images enable row level security;
alter table success_stories enable row level security;
alter table gallery enable row level security;
alter table blog_posts enable row level security;
alter table team_members enable row level security;
alter table partners enable row level security;
alter table contact_submissions enable row level security;
alter table donation_details enable row level security;

create policy "Public can read content" on site_settings for select using (true);
create policy "Public can read home" on home_sections for select using (true);
create policy "Public can read programs" on programs for select using (true);
create policy "Public can read projects" on projects for select using (true);
create policy "Public can read project images" on project_images for select using (true);
create policy "Public can read stories" on success_stories for select using (true);
create policy "Public can read gallery" on gallery for select using (true);
create policy "Public can read published posts" on blog_posts for select using (status = 'Published' or auth.role() = 'authenticated');
create policy "Public can read team" on team_members for select using (true);
create policy "Public can read partners" on partners for select using (true);
create policy "Public can read donation details" on donation_details for select using (true);

create policy "Anyone can submit contact form" on contact_submissions for insert with check (true);

create policy "Admins manage site_settings" on site_settings for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage home_sections" on home_sections for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage programs" on programs for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage projects" on projects for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage project_images" on project_images for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage success_stories" on success_stories for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage gallery" on gallery for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage blog_posts" on blog_posts for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage team_members" on team_members for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage partners" on partners for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins read contact submissions" on contact_submissions for select using (auth.role() = 'authenticated');
create policy "Admins manage donation_details" on donation_details for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('website-assets', 'website-assets', true, 10485760, array['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'])
on conflict (id) do nothing;

create policy "Public can view website assets" on storage.objects for select using (bucket_id = 'website-assets');
create policy "Authenticated admins can upload website assets" on storage.objects for insert with check (bucket_id = 'website-assets' and auth.role() = 'authenticated');
create policy "Authenticated admins can update website assets" on storage.objects for update using (bucket_id = 'website-assets' and auth.role() = 'authenticated');
create policy "Authenticated admins can delete website assets" on storage.objects for delete using (bucket_id = 'website-assets' and auth.role() = 'authenticated');
