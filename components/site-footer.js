import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Container } from "@/components/ui";

const programs = [
  ["Sarvodaya Vidyapeeth", "/programs/sarvodaya-vidyapeeth"],
  ["Sarvodaya Digital Empowerment", "/programs/sarvodaya-digital-empowerment"],
  ["Sarvodaya Saheli", "/programs/sarvodaya-saheli"],
  ["Sarvodaya Farm", "/programs/sarvodaya-farm"],
  ["Sarvodaya IAS", "/programs/sarvodaya-ias"]
];

const quickLinks = [
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Gallery", "/gallery"],
  ["Success Stories", "/success-stories"],
  ["Donate", "/donate"],
  ["Contact", "/contact"]
];

const socials = [
  ["Facebook", "https://www.facebook.com/sarvodayafoundation2021/", Facebook],
  ["Instagram", "https://www.instagram.com/sarvodayafoundation2021/", Instagram],
  ["YouTube", "https://www.youtube.com/@sarvodayafoundationforeduc7943", Youtube],
  ["X / Twitter", "https://x.com/Sarvodaya2021", Twitter]
];

const trustBadges = ["Section 8 Organization", "Community Driven", "Education & Livelihoods", "Bihar & Jharkhand"];

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#283593] via-[#24429B] to-[#17276E] text-[#F5F5F0]">
      <Container className="grid gap-8 py-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-10">
        <div>
          <div className="mx-auto mb-4 flex max-w-sm items-center justify-center gap-3 md:mx-0 md:justify-start">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#36B5C7]/30 bg-white/10 text-lg font-extrabold text-[#8BC34A]">
              SF
            </span>
            <p className="text-left text-base font-extrabold leading-5 text-[#F5F5F0]">
              Sarvodaya Foundation
              <span className="block text-xs font-semibold text-[#D6D3C9]">for Education and Skill Development</span>
            </p>
          </div>
          <h2 className="text-lg font-extrabold tracking-wide">About Sarvodaya</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#D6D3C9] max-md:mx-auto">
            Sarvodaya Foundation for Education and Skill Development works through education, digital empowerment, women-led livelihoods, sustainable farming, and skill development initiatives.
          </p>
          <p className="mt-4 text-sm font-semibold text-[#8BC34A]">Rooted in communities. Driven by opportunity.</p>
          <div className="mt-5 flex justify-center gap-3 md:justify-start">
            {socials.map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-[#F5F5F0]/15 text-[#D6D3C9] transition hover:-translate-y-0.5 hover:border-[#36B5C7] hover:text-[#8BC34A]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterColumn title="Programs" links={programs} />
        <FooterColumn title="Quick Links" links={quickLinks} />
        <div>
          <h3 className="text-lg font-extrabold tracking-wide">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#D6D3C9]">
            <a href="mailto:sarvodayafoundation2021@gmail.com" className="flex items-start justify-center gap-2 transition hover:text-[#8BC34A] md:justify-start">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#36B5C7]" />
              <span className="break-all">sarvodayafoundation2021@gmail.com</span>
            </a>
            <a href="tel:+918892198284" className="flex items-center justify-center gap-2 transition hover:text-[#8BC34A] md:justify-start">
              <Phone className="h-4 w-4 shrink-0 text-[#36B5C7]" />
              +91 8892198284
            </a>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <MapPin className="h-4 w-4 shrink-0 text-[#36B5C7]" />
              Shop 8, Sai World Empire, Caesar CHSL, Panvel, Raigad, Rohinjan, Maharashtra, 410210
            </p>
          </div>
        </div>
      </Container>
      <Container className="pb-7">
        <div className="flex flex-wrap justify-center gap-2 border-t border-[#F5F5F0]/10 pt-6">
          {trustBadges.map((badge) => (
            <span key={badge} className="rounded-full border border-[#36B5C7]/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[#D6D3C9]">
              {badge}
            </span>
          ))}
        </div>
      </Container>
      <div className="border-t border-[#F5F5F0]/10 py-4">
        <Container className="flex flex-col items-center justify-between gap-2 text-center text-xs text-[#D6D3C9] md:flex-row md:text-left">
          <p>Copyright 2026 Sarvodaya Foundation for Education and Skill Development</p>
          <p className="text-[#8BC34A]">Designed for community impact.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-lg font-extrabold tracking-wide">{title}</h3>
      <div className="mt-4 grid gap-2.5 text-sm text-[#D6D3C9]">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="transition hover:translate-x-1 hover:text-[#8BC34A] max-md:hover:translate-x-0">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

