import { Container } from "@/components/ui";

export function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="bg-leaf-50 py-14 sm:py-20">
      <Container>
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-marigold-600">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-leaf-900 sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{intro}</p>}
      </Container>
    </section>
  );
}
