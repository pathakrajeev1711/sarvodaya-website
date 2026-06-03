import { PageHero } from "@/components/page-hero";
import { ImageCard, Section } from "@/components/ui";
import { getRows } from "@/lib/content";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  title: "Our Work and Programs",
  description: "Explore Sarvodaya Foundation programs for rural education, digital empowerment, women livelihood, sustainable farming, youth empowerment, and IAS mentorship in Bihar, Jharkhand, and Maharashtra.",
  path: "/programs",
  keywords: ["Sarvodaya programs", "Sarvodaya Vidyapeeth", "Sarvodaya Saheli", "digital empowerment NGO", "women livelihood NGO"]
});

export default async function ProgramsPage() {
  const programs = await getRows("programs", { order: { column: "display_order" } });
  return (
    <>
      <PageHero title="Our Work / Programs" intro="Programs can be added, edited, reordered, and updated from the admin dashboard with images stored in Supabase." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ImageCard key={program.id} item={program} title={program.title} text={program.short_description} href={`/programs/${program.slug}`} meta={`${program.status} • ${program.location}`} />
          ))}
        </div>
      </Section>
    </>
  );
}
