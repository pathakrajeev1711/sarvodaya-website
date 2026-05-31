import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Section } from "@/components/ui";
import { getSingle } from "@/lib/content";
import { placeholderImages } from "@/lib/placeholders";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  title: "Donate and Support Us",
  description: "Donate to Sarvodaya Foundation for Education and Skill Development and support rural education, women livelihood, digital inclusion, and sustainable community programs.",
  path: "/donate",
  keywords: ["donate to NGO", "support rural education", "CSR donation NGO", "80G NGO donation"]
});

export default async function DonatePage() {
  const donation = await getSingle("donation_details");
  return (
    <>
      <PageHero title="Donate / Support Us" intro={donation.appeal_text} />
      <Container className="grid gap-10 py-14 lg:grid-cols-[1fr_1fr]">
        <div className="relative min-h-80 overflow-hidden rounded-lg">
          <Image src={donation.qr_code_url || placeholderImages.donate} alt="Support Sarvodaya Foundation" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="rounded-lg border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-leaf-900">Bank and UPI details</h2>
          <div className="mt-6 grid gap-4">
            <Info label="Account name" value={donation.account_name} />
            <Info label="Bank name" value={donation.bank_name} />
            <Info label="Account number" value={donation.account_number} />
            <Info label="IFSC" value={donation.ifsc_code} />
            <Info label="Branch" value={donation.branch} />
            <Info label="MICR Code" value={donation.micr_code} />
            {donation.upi_id && <Info label="UPI ID" value={donation.upi_id} />}
          </div>
        </div>
      </Container>
      <Section title="Tax and CSR support" className="bg-leaf-50">
        <p className="max-w-3xl leading-7 text-slate-700">{donation.eighty_g_information}</p>
        <p className="mt-4 max-w-3xl font-semibold text-leaf-900">{donation.csr_cta_text}</p>
        <ButtonLink href="/contact" className="mt-6">Contact us for CSR partnership</ButtonLink>
      </Section>
    </>
  );
}

function Info({ label, value }) {
  return (
    <div className="grid gap-1 rounded-md bg-slate-50 p-4">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="font-semibold text-leaf-900">{value || "To be updated"}</p>
    </div>
  );
}
