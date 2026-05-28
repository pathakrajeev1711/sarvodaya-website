import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui";
import { getRows } from "@/lib/content";

export const metadata = {
  title: "Partners and Donors",
  description: "Partners, donors, CSR supporters, and institutions supporting Sarvodaya Foundation."
};

export default async function PartnersPage() {
  const partners = await getRows("partners", { order: { column: "display_order" } });
  return (
    <>
      <PageHero title="Partners / Donors" intro="Partner logos, descriptions, links, and partnership types are editable from the admin dashboard." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <Link key={partner.id} href={partner.website_url || "#"} className="rounded-lg border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xl font-bold text-leaf-900">{partner.name}</p>
              <p className="mt-2 text-sm font-semibold text-river-700">{partner.partnership_type}</p>
              <p className="mt-4 text-sm leading-6 text-slate-700">{partner.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
