import { PageHero } from "@/components/page-hero";
import { ImageCard, Section } from "@/components/ui";
import { getRows } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description: "Dynamic NGO project listings with locations, partners, dates, status, outcomes, galleries, and downloadable reports."
};

export default async function ProjectsPage() {
  const projects = await getRows("projects", { order: { column: "start_date", ascending: false } });
  const statuses = [...new Set(projects.map((project) => project.status).filter(Boolean))];
  return (
    <>
      <PageHero title="Projects" intro="Browse current and completed initiatives. Filters can be extended against Supabase status, donor, location, or dates." />
      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          <span className="rounded-md bg-leaf-700 px-4 py-2 text-sm font-semibold text-white">All</span>
          {statuses.map((status) => <span key={status} className="rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{status}</span>)}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ImageCard
              key={project.id}
              item={project}
              title={project.project_name}
              text={project.project_objective}
              href={`/projects/${project.slug}`}
              meta={`${project.status} • ${project.location}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
