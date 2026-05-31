import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui";

export const metadata = {
  title: "About Us",
  description: "Learn about Sarvodaya Foundation's mission, legal profile, values, and journey in rural education, livelihoods, digital empowerment, and sustainable farming."
};

export default function AboutPage() {
  const values = ["Community Empowerment", "Sustainability", "Rural Innovation", "Women Empowerment", "Environmental Responsibility"];
  const journey = [
    {
      year: "2021",
      title: "Sarvodaya Foundation Established",
      text: "Started with a vision to create practical opportunities through education, skills, and community development."
    },
    {
      year: "Early 2021",
      title: "Sarvodaya Vidyapeeth Started",
      text: "Launched customized learning with smart classes, digital learning, and foundational education support."
    },
    {
      year: "Mid 2021",
      title: "Computer Training Started",
      text: "Introduced computer education and digital literacy programs for students and youth."
    },
    {
      year: "2022",
      title: "Sarvodaya Saheli Launched",
      text: "Started tailoring and livelihood programs focused on skills, employment, and income generation."
    },
    {
      year: "2023",
      title: "Sarvodaya IAS Started",
      text: "Initiated mentorship and guidance support for students preparing for civil services and competitive examinations."
    },
    {
      year: "2024",
      title: "Sarvodaya Farm Expanded",
      text: "Expanded organic farming, Moringa plantation, flower cultivation, medicinal plants, and vermicomposting."
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Rooted in communities. Driven by opportunity."
        intro="Sarvodaya Foundation for Education and Skill Development works with rural and underserved communities to create opportunities through education, digital empowerment, sustainable agriculture, women-led livelihoods, and skill development initiatives."
      />
      <Section title="Mission and vision">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-leaf-50 p-7">
            <h2 className="text-2xl font-bold text-leaf-900">Mission</h2>
            <p className="mt-4 leading-7 text-slate-700">To empower underserved rural communities through education, digital inclusion, sustainable livelihoods, women empowerment, and community-driven development initiatives that create dignity, self-reliance, and long-term social impact.</p>
          </div>
          <div className="rounded-lg bg-river-50 p-7">
            <h2 className="text-2xl font-bold text-leaf-900">Vision</h2>
            <p className="mt-4 leading-7 text-slate-700"> To build inclusive and self-sustaining communities where every individual has access to education, skills, technology, livelihood opportunities, and a life of dignity regardless of social or economic background.</p>
          </div>
        </div>
      </Section>
      <Section title="Core values" className="bg-slate-50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => <div key={value} className="rounded-lg bg-white p-5 text-center font-semibold text-leaf-900 shadow-sm">{value}</div>)}
        </div>
      </Section>
      <Section title="Legal profile">
        <div className="overflow-hidden rounded-lg border border-slate-200">
          {[
            ["Organization name", "Sarvodaya Foundation for Education and Skill Development"],
            ["Company incorporation number", "U80100MH2021NPL357615"],
            ["Company PAN", "ABFCS7548L"],
            ["12AB registration", "ABFCS7548L24MB01"],
            ["CSR Registration No", "CSR00073922"],
            ["80G Registration", "ABFCS7548L24MB02"],
            ["NGO Darpan", "MH/2024/0384808"]
          ].map(([label, value]) => (
            <div key={label} className="grid gap-2 border-b border-slate-200 p-4 last:border-b-0 sm:grid-cols-3">
              <p className="font-semibold text-leaf-900">{label}</p>
              <p className="text-slate-700 sm:col-span-2">{value}</p>
            </div>
          ))}
        </div>
      </Section>
      <section className="bg-leaf-900 py-16 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-marigold-100">Leadership message</p>
          <blockquote className="mt-4 max-w-4xl text-2xl font-semibold leading-10">
            “Behind every number is a child seeking education, a woman searching for livelihood, and a family hoping for a better future. At Sarvodaya, we work with communities to turn these hopes into opportunities through education, skills, sustainable livelihoods, and collective support.”
          </blockquote>
        </Container>
      </section>
      <Section
        title="Our Journey"
        intro="A growing journey of education, skills, livelihoods, and community development."
        className="bg-[#F8F5EE]"
      >
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-[#B68D40]/30 md:block lg:left-0 lg:top-8 lg:h-px lg:w-full" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((item) => (
              <article key={`${item.year}-${item.title}`} className="relative rounded-2xl border border-[#14532D]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <span className="inline-flex rounded-full bg-[#B68D40] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {item.year}
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#14532D]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
