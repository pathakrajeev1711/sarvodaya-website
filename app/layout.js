import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSingle } from "@/lib/content";
import { absoluteUrl, siteDescription, siteKeywords, siteName, siteUrl, socialLinks } from "@/lib/seo";

export async function generateMetadata() {
  const settings = await getSingle("site_settings");
  const title = settings.organization_name || siteName;
  const description = siteDescription;

  return {
    metadataBase: new URL(siteUrl),
    applicationName: siteName,
    title: {
      default: title,
      template: `%s | ${title}`
    },
    description,
    keywords: siteKeywords,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    category: "Nonprofit Organization",
    icons: {
      icon: "/sarvodaya-logo.png",
      apple: "/sarvodaya-logo.png"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: title,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteUrl("/images/hero-community.jpg"),
          width: 1200,
          height: 630,
          alt: "Sarvodaya Foundation community education program"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/images/hero-community.jpg")]
    },
    alternates: {
      canonical: siteUrl
    }
  };
}

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/sarvodaya-logo.png"),
    image: absoluteUrl("/images/hero-community.jpg"),
    description: siteDescription,
    email: "sarvodayafoundation2021@gmail.com",
    telephone: "+91 8892198284",
    foundingDate: "2021",
    areaServed: ["Bihar", "Jharkhand", "Maharashtra", "India"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop 8, Sai World Empire, Caesar CHSL, Panvel, Raigad, Rohinjan",
      addressRegion: "Maharashtra",
      postalCode: "410210",
      addressCountry: "IN"
    },
    sameAs: socialLinks,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General enquiries",
      email: "sarvodayafoundation2021@gmail.com",
      telephone: "+91 8892198284",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    }
  };

  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
