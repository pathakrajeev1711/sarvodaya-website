import { AnimatedHomePage } from "@/components/animated-homepage";
import { getRows, getSingle } from "@/lib/content";
import { seoMetadata, siteDescription, siteName } from "@/lib/seo";

export const metadata = seoMetadata({
  title: siteName,
  description: siteDescription,
  path: "/",
  keywords: ["Sarvoday Foundation", "NGO Bihar Jharkhand Maharashtra", "rural transformation NGO"]
});

export default async function HomePage() {
  const [home, programs, stories, gallery] = await Promise.all([
    getSingle("home_sections"),
    getRows("programs", { order: { column: "display_order" }, limit: 5 }),
    getRows("success_stories", { order: { column: "created_at", ascending: false }, limit: 3 }),
    getRows("gallery", { order: { column: "display_order" }, limit: 8 })
  ]);

  return <AnimatedHomePage home={home} programs={programs} stories={stories} gallery={gallery} />;
}
