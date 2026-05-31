import { getRows } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export default async function sitemap() {
  const baseUrl = siteUrl;
  const staticRoutes = ["", "/about", "/programs", "/projects", "/success-stories", "/gallery", "/blog", "/team", "/partners", "/contact", "/donate"];
  const [programs, projects, posts] = await Promise.all([
    getRows("programs"),
    getRows("projects"),
    getRows("blog_posts", { eq: { status: "Published" } })
  ]);

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "" ? 1 : 0.7 })),
    ...programs.map((item) => ({ url: `${baseUrl}/programs/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 })),
    ...projects.map((item) => ({ url: `${baseUrl}/projects/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 })),
    ...posts.map((item) => ({ url: `${baseUrl}/blog/${item.slug}`, lastModified: new Date(item.published_date || Date.now()), changeFrequency: "monthly", priority: 0.6 }))
  ];
}
