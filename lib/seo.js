export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sarvodayfoundation.com";

export const siteName = "Sarvodaya Foundation for Education and Skill Development";

export const siteDescription =
  "Empowering rural communities through education, digital inclusion, women livelihood, skill development, and sustainable rural transformation.";

export const siteKeywords = [
  "Sarvodaya Foundation",
  "Sarvodaya Foundation for Education and Skill Development",
  "Sarvoday Foundation",
  "Sarvoday NGO",
  "Sarvodaya NGO",
  "NGO in Bihar",
  "NGO in Jharkhand",
  "NGO in Maharashtra",
  "education NGO Bihar",
  "education NGO Jharkhand",
  "CSR NGO Maharashtra",
  "skill development NGO",
  "women empowerment",
  "women livelihood NGO",
  "digital literacy",
  "rural education",
  "sustainable farming",
  "Sarvodaya Vidyapeeth",
  "Sarvodaya Saheli"
];

export const socialLinks = [
  "https://www.facebook.com/sarvodayafoundation2021/",
  "https://www.instagram.com/sarvodayafoundation2021/",
  "https://www.youtube.com/@sarvodayafoundationforeduc7943",
  "https://x.com/Sarvodaya2021"
];

export function absoluteUrl(path = "") {
  return new URL(path, siteUrl).toString();
}

export function seoMetadata({ title, description, path = "/", image = "/images/hero/community.jpg", keywords = [] }) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...siteKeywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
