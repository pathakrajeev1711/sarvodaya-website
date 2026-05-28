import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Section } from "@/components/ui";
import { getBySlug } from "@/lib/content";
import { imageUrl } from "@/lib/placeholders";

export async function generateMetadata({ params }) {
  const project = await getBySlug("projects", params.slug);
  return { title: project?.project_name || "Project", description: project?.project_objective };
}

export default async function ProjectDetailPage({ params }) {
  const project = await getBySlug("projects", params.slug);
  if (!project) notFound();
  return (
    <>
      <PageHero eyebrow={project.status} title={project.project_name} intro={project.project_objective} />
      <Container className="py-12">
        <div className="relative aspect-[16/8] overflow-hidden rounded-lg">
          <Image src={imageUrl(project)} alt={project.project_name} fill className="object-cover" sizes="100vw" />
        </div>
      </Container>
      <Section title="Project information">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-slate-700">
            <Info title="Beneficiary details" text={project.beneficiary_details} />
            <Info title="Activities" text={project.activities} />
            <Info title="Outcomes" text={project.outcomes} />
          </div>
          <aside className="rounded-lg bg-slate-50 p-6">
            <Info title="Location" text={project.location} />
            <Info title="Donor / Partner" text={project.donor_partner_name} />
            <Info title="Timeline" text={`${project.start_date || "Start TBA"} - ${project.end_date || "Ongoing"}`} />
            {project.report_url ? (
              <Link href={project.report_url} className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-leaf-700 px-4 py-3 text-sm font-semibold text-white">
                <Download className="h-4 w-4" /> Download report
              </Link>
            ) : (
              <ButtonLink href="/contact" className="mt-6">Request report</ButtonLink>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}

function Info({ title, text }) {
  return (
    <div className="mb-5">
      <h2 className="font-bold text-leaf-900">{title}</h2>
      <p className="mt-2 leading-7 text-slate-700">{text || "To be updated from admin dashboard."}</p>
    </div>
  );
}
