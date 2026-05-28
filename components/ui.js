import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { imageUrl } from "@/lib/placeholders";

export function Container({ children, className }) {
  return <div className={clsx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({ eyebrow, title, intro, children, className }) {
  return (
    <section className={clsx("py-16 sm:py-20", className)}>
      <Container>
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-marigold-600">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold text-leaf-900 sm:text-4xl">{title}</h2>}
            {intro && <p className="mt-4 text-lg leading-8 text-slate-700">{intro}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export function ButtonLink({ href, children, variant = "primary", className }) {
  return (
    <Link
      href={href}
      className={clsx(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition",
        variant === "primary" && "bg-leaf-700 text-white shadow-soft hover:bg-leaf-600",
        variant === "secondary" && "bg-white text-leaf-900 ring-1 ring-leaf-100 hover:bg-leaf-50",
        variant === "ghost" && "text-leaf-800 hover:text-leaf-600",
        className
      )}
    >
      {children}
      {variant !== "ghost" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}

export function ImageCard({ item, title, text, href, fallback, meta }) {
  const content = (
    <article className="h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] bg-leaf-50">
        <Image
          src={imageUrl(item, fallback)}
          alt={item?.alt_text || title || "Sarvodaya Foundation program image"}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        {meta && <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-river-700">{meta}</p>}
        <h3 className="text-xl font-bold text-leaf-900">{title}</h3>
        {text && <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-700">{text}</p>}
        {href && <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf-700">Read more <ArrowRight className="h-4 w-4" /></span>}
      </div>
    </article>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

export function EmptyState({ title = "Content will appear here soon.", text }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {text && <p className="mt-2 text-sm text-slate-600">{text}</p>}
    </div>
  );
}
