import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { submitContact } from "@/app/actions";
import { getSingle } from "@/lib/content";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  title: "Contact Us",
  description: "Contact Sarvodaya Foundation for Education and Skill Development for CSR partnerships, donations, volunteering, program support, and community development initiatives.",
  path: "/contact",
  keywords: ["contact Sarvodaya Foundation", "CSR partnership NGO", "donate NGO", "volunteer NGO Bihar"]
});

const contactDetails = {
  email: "sarvodayafoundation2021@gmail.com",
  phone: "+91 8892198284"
};

const locations = [
  {
    title: "Corporate Office",
    address: "Shop 08, Sai World Empire, Caesar CHSL, Panvel, Raigad, Rohinjan, Maharashtra, Mumbai - 410210, India"
  },
  {
    title: "Registered / Project Office - Gaya",
    address: "Sarvodaya Chowk, Near Kali Mandir, Dharampur, Dobhi, Gaya, Bihar - 824201"
  },
  {
    title: "Sarvodaya Vidyapeeth",
    address: "Sarvodaya Chowk, Near Kali Mandir, Dharampur, Dobhi, Gaya, Bihar - 824201"
  },
  {
    title: "Sarvodaya Saheli - Centre 1",
    address: "Near Kali Mandir, Hardawan, Dobhi, Gaya, Bihar - 824201"
  },
  {
    title: "Sarvodaya Saheli - Centre 2",
    address: "Near Shiv Mandir, Mutton More, Amarut, Dobhi, Gaya, Bihar - 824201"
  },
  {
    title: "Sarvodaya Saheli - Centre 3",
    address: "Ground Floor, IG Market, Opposite Bank of India, Hunterganj, Chatra, Jharkhand - 825414"
  },
  {
    title: "Sarvodaya Digital Empowerment Centre",
    address: "Ground Floor, IG Market, Opposite Bank of India, Hunterganj, Chatra, Jharkhand - 825414",
    phone: "+91 6206285908"
  },
  {
    title: "Sarvodaya Farm",
    address: "Datpa, Deo, Aurangabad, Bihar - 824111"
  },
  {
    title: "Sarvodaya IAS",
    address: "Near Chopra Agency, Bisar Talab, Jaiprakash Nagar, Gaya, Bihar - 823001"
  }
];

export default async function ContactPage({ searchParams }) {
  const settings = await getSingle("site_settings");
  const mapUrl = process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL || settings.map_embed_url;
  return (
    <>
      <PageHero
        title="Contact Us"
        intro="We would love to hear from you. Reach out to us for partnerships, volunteering, donations, program support, or community development initiatives."
      />
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_1fr]">
        <form action={submitContact} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          {searchParams?.status === "success" && <p className="mb-4 rounded-md bg-leaf-50 p-3 text-sm font-semibold text-leaf-800">Thank you. Your message has been received.</p>}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" />
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Message</span>
              <textarea name="message" required rows={6} className="rounded-md border border-slate-300 px-3 py-2 focus:border-leaf-600 focus:outline-none" />
            </label>
          </div>
          <button className="focus-ring mt-5 rounded-md bg-leaf-700 px-5 py-3 text-sm font-semibold text-white hover:bg-leaf-600">Send message</button>
        </form>
        <aside className="space-y-5">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold text-leaf-900">Sarvodaya Foundation for Education and Skill Development</h2>
            <div className="mt-5 space-y-3">
              <ContactLine icon={<Mail />} href={`mailto:${contactDetails.email}`} text={contactDetails.email} />
              <ContactLine icon={<Phone />} href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} text={contactDetails.phone} />
            </div>
          </div>
          <div className="space-y-4">
            {locations.map((location) => (
              <LocationCard key={location.title} location={location} />
            ))}
          </div>
          {mapUrl && <iframe title="Sarvodaya Foundation map" src={mapUrl} className="h-72 w-full rounded-lg border-0" loading="lazy" />}
        </aside>
      </Container>
    </>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input name={name} type={type} required={required} className="rounded-md border border-slate-300 px-3 py-2 focus:border-leaf-600 focus:outline-none" />
    </label>
  );
}

function ContactLine({ icon, text, href }) {
  const content = (
    <>
      <span className="mt-1 h-5 w-5 shrink-0">{icon}</span>
      <span className="font-medium">{text}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex gap-3 rounded-lg bg-leaf-50 p-4 text-leaf-900 hover:bg-leaf-100">
        {content}
      </a>
    );
  }

  return (
    <div className="flex gap-3 rounded-lg bg-leaf-50 p-4 text-leaf-900">
      {content}
    </div>
  );
}

function LocationCard({ location }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex gap-3">
        <MapPin className="mt-1 h-5 w-5 shrink-0 text-leaf-700" />
        <div>
          <h3 className="font-bold text-leaf-900">{location.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">{location.address}</p>
          {location.phone && (
            <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-river-700 hover:text-river-600">
              <Phone className="h-4 w-4" />
              {location.phone}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
