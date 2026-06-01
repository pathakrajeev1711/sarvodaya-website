import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui";
import { getRows } from "@/lib/content";
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
      <PageHero title="Gallery" intro="Field moments from Sarvodaya Foundation programs across education, women-led livelihoods, digital empowerment, sustainable farming, and mentorship." />
      <Section>
        <GalleryGrid images={images} categories={categories} />
      </Section>
    </>
  );
}
