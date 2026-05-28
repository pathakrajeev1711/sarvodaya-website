import { getRows } from "@/lib/content";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticRoutes = ["", "/about", "/programs", "/projects", "/success-stories", "/gallery", "/blog", "/team", "/partners", "/contact", "/donate"];
  const [programs, projects, posts] = await Promise.all([
    getRows("programs"),
    getRows("projects"),
    getRows("blog_posts", { eq: { status: "Published" } })
  ]);

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...programs.map((item) => ({ url: `${baseUrl}/programs/${item.slug}`, lastModified: new Date() })),
    ...projects.map((item) => ({ url: `${baseUrl}/projects/${item.slug}`, lastModified: new Date() })),
    ...posts.map((item) => ({ url: `${baseUrl}/blog/${item.slug}`, lastModified: new Date(item.published_date || Date.now()) }))
  ];
}
