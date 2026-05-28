import Link from "next/link";
import { ArrowRight, ImagePlus, Rows3, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui";
import { adminResources } from "@/lib/admin-config";

export default function AdminDashboardPage() {
  return (
    <Container className="py-10">
      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-leaf-900">Manage Sarvodaya Foundation website</h1>
        <p className="mt-3 max-w-3xl text-slate-700">Update public content, upload images to Supabase Storage, publish stories and posts, manage donation/contact details, and reorder sections using display order fields.</p>
        <div className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-3">
          <p className="flex gap-2"><ShieldCheck className="h-5 w-5 text-leaf-700" /> Protected by Supabase Auth</p>
          <p className="flex gap-2"><ImagePlus className="h-5 w-5 text-river-700" /> Images stored in Supabase Storage</p>
          <p className="flex gap-2"><Rows3 className="h-5 w-5 text-marigold-600" /> Metadata stored in database tables</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(adminResources).map(([key, resource]) => (
          <Link key={key} href={`/admin/${key}`} className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft">
            <p className="text-lg font-bold text-leaf-900">{resource.label}</p>
            <p className="mt-2 text-sm text-slate-600">Add, edit, delete, upload, and reorder content.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf-700">Manage <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
