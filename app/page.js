import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Laptop,
  Leaf,
  MapPin,
  Quote,
  Sprout,
  Users
} from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { getRows, getSingle } from "@/lib/content";
import { impactStats } from "@/lib/fallback-data";
import { imageUrl, placeholderImages } from "@/lib/placeholders";

export const metadata = {
  title: "Sarvodaya Foundation for Education and Skill Development",
  description:
    "Sarvodaya Foundation works with rural communities through education, digital empowerment, women-led livelihoods, sustainable farming, and skill development."
};

const trustBadges = [
  { label: "Section 8 Non-Profit", icon: Award },
  { label: "Working in Bihar & Jharkhand", icon: MapPin },
  { label: "Community-Led Programs", icon: HeartHandshake }
];

const impactIcons = {
  "Women trained": Users,
  "Villages reached": MapPin,
  "Students trained": GraduationCap,
  "Livelihoods supported": BriefcaseBusiness,
  "Projects completed": HandHeart
};

const programIcons = {
  "Sarvodaya Vidyapeeth": BookOpen,
  "Sarvodaya Digital Empowerment": Laptop,
  "Sarvodaya Saheli": Users,
  "Sarvodaya Farm": Sprout,
  "Sarvodaya IAS": GraduationCap
};

const whyCards = [
  {
    title: "Education Gap",
    icon: BookOpen,
    text: "Many rural children still learn with fewer resources, limited guidance, and little exposure to digital tools."
  },
  {
    title: "Livelihood Challenges",
    icon: BriefcaseBusiness,
    text: "Families need practical skills and local earning pathways that can turn effort into steady dignity."
  },
  {
    title: "Digital Exclusion",
    icon: Laptop,
    text: "Without digital confidence, essential services, learning, and opportunities remain out of reach."
  }
];

export default async function HomePage() {
  const [home, programs, stories, gallery] = await Promise.all([
    getSingle("home_sections"),
    getRows("programs", { order: { column: "display_order" }, limit: 5 }),
    getRows("success_stories", { order: { column: "created_at", ascending: false }, limit: 3 }),
    getRows("gallery", { order: { column: "display_order" }, limit: 6 })
  ]);

  const heroTitle = home.hero_title || "Education, skills, and opportunity for stronger communities";
  const heroSubtitle =
    home.hero_subtitle ||
    "Sarvodaya Foundation works with rural and underserved communities to create opportunities through education, digital empowerment, women-led livelihoods, sustainable farming, and skill development.";

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#F8F5EE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(182,141,64,0.18),transparent_30%),linear-gradient(120deg,#F8F5EE_0%,#EAF5EC_100%)]" />
        <Container className="relative grid min-h-[690px] items-center gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B68D40]">Education - Skills - Livelihoods</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#14532D] sm:text-5xl lg:text-6xl">
              {heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#1F2933]/80">{heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={home.primary_cta_url || "/donate"}>{home.primary_cta_label || "Support Our Work"}</ButtonLink>
              <ButtonLink href={home.secondary_cta_url || "/programs"} variant="secondary">
                {home.secondary_cta_label || "Explore Programs"}
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustBadges.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 rounded-full border border-[#14532D]/10 bg-white/80 px-4 py-3 text-sm font-semibold text-[#14532D] shadow-sm">
                  <Icon className="h-4 w-4 text-[#B68D40]" />
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-soft lg:min-h-[520px]">
            <Image
              src={home.hero_image_url || placeholderImages.hero}
              alt="Sarvodaya Foundation community program"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#14532D]/65 via-[#14532D]/20 to-[#1F2933]/70" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="max-w-md text-2xl font-bold leading-tight">Community action that turns support into visible change.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="reveal mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B68D40]">Our impact</p>
            <h2 className="mt-3 text-3xl font-bold text-[#14532D] sm:text-4xl">Impact that reaches the grassroots</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {impactStats.map((stat) => {
              const Icon = impactIcons[stat.label] || HandHeart;
              return (
                <div key={stat.label} className="reveal rounded-2xl border border-[#14532D]/10 bg-[#EAF5EC] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#14532D] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-3xl font-bold text-[#14532D]">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-[#1F2933]/75">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#F8F5EE] py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="reveal relative min-h-[330px] overflow-hidden rounded-2xl shadow-soft">
            <Image src={placeholderImages.women} alt="Community members working with Sarvodaya Foundation" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="reveal">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B68D40]">About Sarvodaya</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14532D] sm:text-4xl">Rooted in communities. Driven by opportunity.</h2>
            <p className="mt-5 text-lg leading-8 text-[#1F2933]/80">
              Sarvodaya Foundation for Education and Skill Development works with rural and underserved communities to create opportunities through education, digital empowerment, sustainable agriculture, women-led livelihoods, and skill development initiatives.
            </p>
            <ButtonLink href="/about" className="mt-8">Know More About Us</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="reveal mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B68D40]">Programs</p>
            <h2 className="mt-3 text-3xl font-bold text-[#14532D] sm:text-4xl">Programs that build confidence, skills, and livelihoods</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program) => {
              const Icon = programIcons[program.title] || Leaf;
              return (
                <article key={program.id} className="reveal group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-[230px] overflow-hidden bg-[#EAF5EC]">
                      <Image src={imageUrl(program)} alt={program.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 100vw" />
                    </div>
                    <div className="flex flex-col p-6">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#EAF5EC] text-[#14532D]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="rounded-full bg-[#F8F5EE] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#B68D40]">{program.status}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#14532D]">{program.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-[#1F2933]/75">{program.short_description}</p>
                      <Link href={`/programs/${program.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#14532D] transition hover:text-[#B68D40]">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#EAF5EC] py-16 sm:py-20">
        <Container>
          <div className="reveal mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B68D40]">Why we work</p>
            <h2 className="mt-3 text-3xl font-bold text-[#14532D] sm:text-4xl">Why our work matters</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whyCards.map(({ title, text, icon: Icon }) => (
              <div key={title} className="reveal rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#14532D] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#14532D]">{title}</h3>
                <p className="mt-3 leading-7 text-[#1F2933]/75">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="reveal mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B68D40]">Success stories</p>
            <h2 className="mt-3 text-3xl font-bold text-[#14532D] sm:text-4xl">Real people, visible progress</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.id} className="reveal overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="relative aspect-[4/3] bg-[#EAF5EC]">
                  <Image src={imageUrl(story, placeholderImages.women)} alt={story.story_title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <span className="rounded-full bg-[#EAF5EC] px-3 py-1 text-xs font-bold text-[#14532D]">{story.related_project_program}</span>
                  <h3 className="mt-4 text-xl font-bold text-[#14532D]">{story.story_title}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#1F2933]">{story.beneficiary_name}</p>
                  <p className="mt-4 flex gap-3 text-sm leading-6 text-[#1F2933]/75">
                    <Quote className="h-5 w-5 shrink-0 text-[#B68D40]" />
                    {story.after_impact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F8F5EE] py-16 sm:py-20">
        <Container>
          <div className="reveal mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B68D40]">Gallery</p>
              <h2 className="mt-3 text-3xl font-bold text-[#14532D] sm:text-4xl">Moments from the field</h2>
            </div>
            <ButtonLink href="/gallery" variant="secondary">View Full Gallery</ButtonLink>
          </div>
          <div className="grid auto-rows-[170px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <Link
                key={item.id}
                href="/gallery"
                className={`reveal group relative overflow-hidden rounded-2xl shadow-sm ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""} ${index === 3 ? "sm:row-span-2" : ""}`}
              >
                <Image src={imageUrl(item)} alt={item.alt_text || item.caption || "Sarvodaya Foundation gallery image"} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14532D]/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-95" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-bold text-white">{item.caption}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#14532D] py-16 text-white sm:py-20">
        <Container className="reveal flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B68D40]">Join the mission</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Partner with us to create lasting change</h2>
            <p className="mt-4 text-lg leading-8 text-white/80">
              Your support can help a child learn, a woman earn, a farmer grow, and a community become self-reliant.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/donate" variant="secondary">Donate Now</ButtonLink>
            <ButtonLink href="/contact" className="bg-[#B68D40] hover:bg-[#a47d35]">Partner With Us</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
