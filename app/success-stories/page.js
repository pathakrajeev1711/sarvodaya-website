import { PageHero } from "@/components/page-hero";
import { ImageCard, Section } from "@/components/ui";
import { getRows } from "@/lib/content";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  title: "Success Stories",
  description: "Read Sarvodaya Foundation success stories from rural education, digital empowerment, women livelihood, and community development programs.",
  path: "/success-stories",
  keywords: ["NGO success stories", "beneficiary stories", "women empowerment stories", "rural education impact"]
});

export default async function SuccessStoriesPage() {
  const stories = await getRows("success_stories", { order: { column: "created_at", ascending: false } });
  return (
    <>
      <PageHero title="Success Stories" intro="Stories can be published with beneficiary details, photos, related projects, and optional video links." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <article key={story.id} className="rounded-lg border border-slate-200 bg-white shadow-sm">
              <ImageCard item={story} title={story.story_title} text={`${story.beneficiary_name}, ${story.location}`} />
              <div className="grid gap-4 p-6 text-sm leading-6 text-slate-700">
                <p><strong className="text-leaf-900">Before:</strong> {story.before_situation}</p>
                <p><strong className="text-leaf-900">Support:</strong> {story.support_provided}</p>
                <p><strong className="text-leaf-900">After:</strong> {story.after_impact}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
