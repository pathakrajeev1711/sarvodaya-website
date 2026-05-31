import { PageHero } from "@/components/page-hero";
import { ImageCard, Section } from "@/components/ui";
import { getRows } from "@/lib/content";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  title: "Team",
  description: "Meet the Sarvodaya Foundation team working for education, digital inclusion, women livelihood, sustainable farming, and rural transformation.",
  path: "/team",
  keywords: ["Sarvodaya Foundation team", "NGO leadership", "education NGO team"]
});

export default async function TeamPage() {
  const members = await getRows("team_members", { order: { column: "display_order" } });
  return (
    <>
      <PageHero title="Team" intro="Manage names, designations, photos, bios, optional contact details, and display order from the dashboard." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <ImageCard key={member.id} item={member} title={member.name} text={member.short_bio} meta={member.designation} />
          ))}
        </div>
      </Section>
    </>
  );
}
