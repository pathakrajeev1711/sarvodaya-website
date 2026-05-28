import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { getBySlug } from "@/lib/content";
import { imageUrl } from "@/lib/placeholders";

export async function generateMetadata({ params }) {
  const post = await getBySlug("blog_posts", params.slug);
  return { title: post?.title || "News", description: post?.content?.slice(0, 150) };
}

export default async function BlogDetailPage({ params }) {
  const post = await getBySlug("blog_posts", params.slug);
  if (!post) notFound();
  return (
    <>
      <PageHero eyebrow={`${post.category} • ${post.published_date}`} title={post.title} intro={`By ${post.author}`} />
      <Container className="py-12">
        <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-lg">
          <Image src={imageUrl(post)} alt={post.title} fill className="object-cover" sizes="100vw" />
        </div>
        <article className="prose prose-slate max-w-3xl">
          <p className="text-lg leading-8 text-slate-700">{post.content}</p>
        </article>
      </Container>
    </>
  );
}
