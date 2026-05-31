import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui";
import { getBySlug } from "@/lib/content";
import { imageUrl } from "@/lib/placeholders";
import { seoMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const program = await getBySlug("programs", params.slug);
  const title = program?.title || "Program";
  const description =
    program?.short_description ||
    "Sarvodaya Foundation program supporting rural education, digital empowerment, women livelihood, skill development, and community transformation.";

  return seoMetadata({
    title,
    description,
    path: `/programs/${params.slug}`,
    image: program ? imageUrl(program) : "/images/hero/community.jpg",
    keywords: [title, "Sarvodaya program", "NGO program Bihar", "NGO program Jharkhand", "NGO program Maharashtra"]
  });
}

export default async function ProgramDetailPage({ params }) {
  const program = await getBySlug("programs", params.slug);
  if (!program) notFound();
  return (
    <>
      <PageHero eyebrow={program.status} title={program.title} intro={program.short_description} />
      <Container className="py-12">
        <div className="relative aspect-[16/8] overflow-hidden rounded-lg">
          <Image src={imageUrl(program)} alt={program.title} fill className="object-cover" sizes="100vw" />
        </div>
      </Container>
      <Section title="Program details">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <p className="text-lg leading-8 text-slate-700">{program.detailed_description}</p>
          <div className="rounded-lg bg-leaf-50 p-6">
            <p className="text-sm text-slate-600">Beneficiaries</p>
            <p className="text-3xl font-bold text-leaf-800">{program.beneficiary_count || 0}+</p>
            <p className="mt-5 text-sm text-slate-600">Location</p>
            <p className="font-semibold text-leaf-900">{program.location}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
