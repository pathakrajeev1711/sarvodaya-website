import { PageHero } from "@/components/page-hero";
import { ImageCard, Section } from "@/components/ui";
import { getRows } from "@/lib/content";

export const metadata = {
  title: "News and Updates",
  description: "Published news, updates, blog posts, and field stories from Sarvodaya Foundation."
};

export default async function BlogPage() {
  const posts = await getRows("blog_posts", { eq: { status: "Published" }, order: { column: "published_date", ascending: false } });
  return (
    <>
      <PageHero title="News & Updates" intro="Publish updates, field notes, and blog posts from the admin dashboard as draft or published content." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ImageCard key={post.id} item={post} title={post.title} text={post.content} href={`/blog/${post.slug}`} meta={`${post.category} • ${post.published_date}`} />
          ))}
        </div>
      </Section>
    </>
  );
}
