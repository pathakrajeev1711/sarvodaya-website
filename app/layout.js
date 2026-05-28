import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSingle } from "@/lib/content";

export async function generateMetadata() {
  const settings = await getSingle("site_settings");
  const title = settings.organization_name || "Sarvodaya Foundation";
  const description =
    "NGO website for education, skill development, women empowerment, digital awareness, livelihood support, employment support, and rural development.";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    title: {
      default: title,
      template: `%s | ${title}`
    },
    description,
    openGraph: {
      title,
      description,
      type: "website"
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
