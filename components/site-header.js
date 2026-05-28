"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";

const nav = [
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Projects", "/projects"],
  ["Stories", "/success-stories"],
  ["Gallery", "/gallery"],
  ["Blog", "/blog"],
  ["Team", "/team"],
  ["Partners", "/partners"],
  ["Contact", "/contact"]
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="relative h-12 w-[242px] shrink-0 sm:h-14 sm:w-[282px] xl:h-16 xl:w-[323px]">
          <Image
            src="/sarvodaya-brand.png"
            alt="Sarvodaya Foundation for Education and Skill Development"
            fill
            priority
            sizes="(min-width: 1280px) 323px, (min-width: 640px) 282px, 242px"
            className="object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-700 hover:text-leaf-700">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/donate" className="px-4">Donate</ButtonLink>
          <Link href="/admin" className="text-sm font-semibold text-river-700 hover:text-river-600">Admin</Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-slate-200 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="grid gap-1 py-4">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-leaf-50">
                {label}
              </Link>
            ))}
            <ButtonLink href="/donate" className="mt-2">Donate</ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
