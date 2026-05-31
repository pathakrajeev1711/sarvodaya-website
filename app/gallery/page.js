import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui";
import { getRows } from "@/lib/content";
import { imageUrl } from "@/lib/placeholders";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  title: "Gallery",
  description: "See Sarvodaya Foundation field photos from education, Saheli livelihood, digital literacy, farm, and community programs in Bihar, Jharkhand, and Maharashtra.",
  path: "/gallery",
  keywords: ["Sarvodaya gallery", "NGO field photos", "education program photos", "women livelihood photos"]
});

export default async function GalleryPage() {
  const images = await getRows("gallery", { order: { column: "display_order" } });
  const categories = [...new Set(images.map((image) => image.category).filter(Boolean))];
  return (
    <>
      <PageHero title="Gallery" intro="Every gallery image is designed to live in Supabase Storage with metadata for SEO, accessibility, category, date, location, and ordering." />
      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          <span className="rounded-md bg-leaf-700 px-4 py-2 text-sm font-semibold text-white">All</span>
          {categories.map((category) => <span key={category} className="rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{category}</span>)}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <figure key={item.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="relative aspect-[4/3]">
                <Image src={imageUrl(item)} alt={item.alt_text || item.caption || "Gallery image"} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 50vw" />
              </div>
              <figcaption className="p-4">
                <p className="font-semibold text-leaf-900">{item.caption}</p>
                <p className="mt-1 text-sm text-slate-600">{item.location} {item.image_date ? `• ${item.image_date}` : ""}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
