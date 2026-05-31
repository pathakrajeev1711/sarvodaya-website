"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness, GraduationCap, HandHeart, Laptop, Leaf, Quote, Sprout, Users, X } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { galleryFilters, heroImpactBadges, animatedImpactStats, journeyTimeline, partnerLogos, whyWorkCards } from "@/lib/homepage-data";
import { imageUrl, placeholderImages } from "@/lib/placeholders";

const iconMap = {
  "Sarvodaya Vidyapeeth": BookOpen,
  "Sarvodaya Digital Empowerment": Laptop,
  "Sarvodaya Saheli": Users,
  "Sarvodaya Farm": Sprout,
  "Sarvodaya IAS": GraduationCap,
  "Children Enrolled": BookOpen,
  "Women Trained": Users,
  "Orders Completed": BriefcaseBusiness,
  "Digital Students": Laptop,
  "Villages Reached": HandHeart,
  "Local Youth Trained as Instructors": GraduationCap,
  "Education Gap": BookOpen,
  "Livelihood Challenges": BriefcaseBusiness,
  "Digital Exclusion": Laptop
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export function AnimatedHomePage({ home, programs, stories, gallery }) {
  const heroTitle = home.hero_title || "Education, skills, and opportunity for stronger communities";
  const heroSubtitle =
    home.hero_subtitle ||
    "Sarvodaya Foundation for Education and Skill Development works with rural and underserved communities to create opportunities through education, digital empowerment, women-led livelihoods, sustainable farming, and skill development.";
  const heroImage = home.hero_image_url || placeholderImages.hero;

  return (
    <>
      <HeroSection title={heroTitle} subtitle={heroSubtitle} image={heroImage} />
      <ImpactSection />
      <AboutPreview />
      <WhyWorkSection />
      <ProgramsSection programs={programs} />
      <TimelineSection />
      <StoriesSection stories={stories} />
      <GallerySection gallery={gallery} />
      <PartnerSection />
    </>
  );
}

function HeroSection({ title, subtitle, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(54,181,199,0.20),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(139,195,74,0.22),transparent_25%),linear-gradient(135deg,#F8FAFC_0%,#EEF7FA_48%,#F3FAF0_100%)]" />
      <motion.div className="absolute left-[-7rem] top-24 h-64 w-64 rounded-full border-[34px] border-[#8BC34A]/20" animate={{ y: [0, 18, 0], rotate: [0, 8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute right-[-5rem] top-12 h-80 w-80 rounded-full bg-[#36B5C7]/10 blur-2xl" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
      <Container className="relative grid min-h-[720px] items-center gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <motion.div {...reveal} className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#36B5C7]">Education - Empowerment - Livelihood - Transformation</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#283593] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-[#1E293B]/80">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/programs" className="bg-[#283593] hover:bg-[#1f2a7a]">Explore Our Work</ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="ring-[#36B5C7]/30 hover:bg-[#EAF8FB]">Partner With Us</ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroImpactBadges.map((badge) => (
              <motion.div key={badge.label} whileHover={{ y: -3 }} className="rounded-2xl border border-[#36B5C7]/20 bg-white/85 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-extrabold text-[#283593]">{badge.value}{badge.suffix}</p>
                <p className="text-sm font-semibold text-[#64748B]">{badge.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }} transition={{ opacity: { duration: 0.7 }, scale: { duration: 0.7 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_90px_rgba(40,53,147,0.18)] lg:min-h-[520px]">
          <Image src={image} alt="Sarvodaya Foundation community education and empowerment program" fill priority className="object-cover" sizes="(min-width: 1024px) 52vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#283593]/40 via-transparent to-[#36B5C7]/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
            <p className="max-w-md text-2xl font-extrabold leading-tight drop-shadow">Rural action that turns learning into dignity and opportunity.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <motion.div {...reveal} className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#36B5C7]">Measured impact</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#283593] sm:text-4xl">Impact that reaches the grassroots</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {animatedImpactStats.map((stat) => (
            <ImpactCard key={stat.label} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ImpactCard({ stat }) {
  const Icon = iconMap[stat.label] || HandHeart;
  return (
    <motion.div {...reveal} whileHover={{ y: -6 }} className="rounded-3xl border border-[#36B5C7]/20 bg-gradient-to-br from-white to-[#F8FAFC] p-6 shadow-sm">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EAF8FB] text-[#283593]">
        <Icon className="h-6 w-6" />
      </div>
      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      <p className="mt-2 text-sm font-bold text-[#64748B]">{stat.label}</p>
    </motion.div>
  );
}

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString("en-IN"));
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [count, inView, value]);

  return (
    <p ref={ref} className="mt-5 text-4xl font-extrabold text-[#283593]">
      <motion.span>{rounded}</motion.span>{suffix}
    </p>
  );
}

function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div {...reveal} className="relative min-h-[340px] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(30,41,59,0.14)]">
          <Image src="/images/hero/community.jpg" alt="Community education gathering by Sarvodaya Foundation" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </motion.div>
        <motion.div {...reveal}>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#36B5C7]">About Sarvodaya</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#283593] sm:text-4xl">Rooted in communities. Driven by opportunity.</h2>
          <p className="mt-5 text-lg leading-8 text-[#1E293B]/80">
            Sarvodaya Foundation for Education and Skill Development works with rural and underserved communities to create opportunities through education, digital empowerment, sustainable agriculture, women-led livelihoods, and skill development initiatives.
          </p>
          <ButtonLink href="/about" className="mt-8 bg-[#283593] hover:bg-[#1f2a7a]">Know More About Us</ButtonLink>
        </motion.div>
      </Container>
    </section>
  );
}

function WhyWorkSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <motion.div {...reveal} className="mb-10 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#36B5C7]">Why we work</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#283593] sm:text-4xl">Why our work matters</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {whyWorkCards.map(({ title, text }) => {
            const Icon = iconMap[title] || Leaf;
            return (
              <motion.article key={title} {...reveal} whileHover={{ y: -8 }} className="rounded-3xl border border-[#36B5C7]/20 bg-gradient-to-br from-white via-white to-[#EAF8FB] p-7 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#283593] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-[#1E293B]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#64748B]">{text}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ProgramsSection({ programs }) {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <Container>
        <motion.div {...reveal} className="mb-10 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#36B5C7]">Programs</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#283593] sm:text-4xl">Education, empowerment, livelihood, and transformation</h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          {programs.map((program) => {
            const Icon = iconMap[program.title] || Leaf;
            return (
              <motion.article key={program.id} {...reveal} whileHover={{ y: -7 }} className="group overflow-hidden rounded-3xl border border-[#36B5C7]/20 bg-white shadow-sm">
                <div className="grid h-full md:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[240px] overflow-hidden bg-[#EAF8FB]">
                    <Image src={imageUrl(program)} alt={`${program.title} program image`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 100vw" />
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#EAF8FB] text-[#283593]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-[#F1F8E9] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#558B2F]">{program.status}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#1E293B]">{program.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-[#64748B]">{program.short_description}</p>
                    <Link href={`/programs/${program.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#283593] transition hover:text-[#36B5C7]">
                      Know More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <motion.div {...reveal} className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#36B5C7]">Our journey</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#283593] sm:text-4xl">From volunteer action to rural transformation</h2>
        </motion.div>
        <div className="relative grid gap-5 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-[#283593]/20 via-[#36B5C7]/40 to-[#8BC34A]/20 lg:block" />
          {journeyTimeline.map((item) => (
            <motion.article key={item.year} {...reveal} className="relative rounded-3xl border border-[#36B5C7]/20 bg-[#F8FAFC] p-5 shadow-sm">
              <span className="inline-flex rounded-full bg-[#283593] px-3 py-1 text-xs font-extrabold text-white">{item.year}</span>
              <h3 className="mt-5 text-lg font-extrabold text-[#1E293B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StoriesSection({ stories }) {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <Container>
        <motion.div {...reveal} className="mb-10 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#36B5C7]">Impact stories</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#283593] sm:text-4xl">Real stories of confidence and change</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <motion.article key={story.id} {...reveal} whileHover={{ y: -7 }} className="overflow-hidden rounded-3xl border border-[#36B5C7]/20 bg-white shadow-sm">
              <div className="relative aspect-[4/3] bg-[#EAF8FB]">
                <Image src={imageUrl(story, placeholderImages.women)} alt={`${story.story_title} beneficiary story`} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-[#EAF8FB] px-3 py-1 text-xs font-extrabold text-[#283593]">{story.related_project_program}</span>
                <h3 className="mt-4 text-xl font-extrabold text-[#1E293B]">{story.story_title}</h3>
                <p className="mt-2 text-sm font-bold text-[#36B5C7]">{story.beneficiary_name}</p>
                <p className="mt-4 flex gap-3 text-sm leading-6 text-[#64748B]">
                  <Quote className="h-5 w-5 shrink-0 text-[#8BC34A]" />
                  {story.after_impact}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function GallerySection({ gallery }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const filtered = active === "All" ? gallery : gallery.filter((item) => item.category?.toLowerCase().includes(active.toLowerCase()));

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <motion.div {...reveal} className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#36B5C7]">Gallery</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#283593] sm:text-4xl">Moments from the field</h2>
          </div>
          <ButtonLink href="/gallery" variant="secondary">View Full Gallery</ButtonLink>
        </motion.div>
        <div className="mb-6 flex flex-wrap gap-2">
          {galleryFilters.map((filter) => (
            <button key={filter} type="button" onClick={() => setActive(filter)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${active === filter ? "bg-[#283593] text-white" : "bg-[#F8FAFC] text-[#64748B] hover:bg-[#EAF8FB] hover:text-[#283593]"}`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="grid auto-rows-[170px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item, index) => (
            <motion.button key={item.id} {...reveal} type="button" onClick={() => setSelected(item)} className={`group relative overflow-hidden rounded-3xl text-left shadow-sm ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""} ${index === 3 ? "sm:row-span-2" : ""}`}>
              <Image src={imageUrl(item)} alt={item.alt_text || item.caption || "Sarvodaya Foundation gallery image"} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#283593]/75 via-transparent to-transparent opacity-85 transition group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-extrabold text-white">{item.caption}</p>
            </motion.button>
          ))}
        </div>
      </Container>
      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#1E293B]/80 p-4" onClick={() => setSelected(null)}>
          <div className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white" onClick={(event) => event.stopPropagation()}>
            <Image src={imageUrl(selected)} alt={selected.alt_text || selected.caption || "Gallery image"} fill className="object-contain" sizes="90vw" />
            <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#1E293B] shadow">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function PartnerSection() {
  return (
    <section className="bg-gradient-to-br from-[#283593] via-[#24429B] to-[#36B5C7] py-16 text-white sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <motion.div {...reveal}>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#C8F08D]">CSR partnership</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Partner With Us for Rural Transformation</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/85">
            Your CSR support can help children learn, women earn, youth become digitally confident, and rural communities build self-reliant futures.
          </p>
          <ButtonLink href="/contact" variant="secondary" className="mt-8">Connect for CSR Partnership</ButtonLink>
        </motion.div>
        <motion.div {...reveal} className="grid gap-3 sm:grid-cols-2">
          {partnerLogos.map((label) => (
            <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center text-sm font-extrabold text-white/90 backdrop-blur">
              {label}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
