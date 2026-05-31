export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sarvodayfoundation.com";

export const siteName = "Sarvodaya Foundation for Education and Skill Development";

export const siteDescription =
  "Sarvodaya Foundation for Education and Skill Development works with rural communities through education, digital empowerment, women-led livelihoods, sustainable farming, and skill development.";

export const siteKeywords = [
  "Sarvodaya Foundation",
  "Sarvodaya Foundation for Education and Skill Development",
  "education NGO Bihar",
  "skill development NGO",
  "women empowerment",
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
