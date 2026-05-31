import Link from "next/link";
import { redirect } from "next/navigation";
import { LayoutDashboard } from "lucide-react";
import { Container } from "@/components/ui";
import { LogoutButton } from "@/components/admin/logout-button";
import { hasSupabaseEnv, createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false
  }
};

export default async function AdminLayout({ children }) {
  if (!hasSupabaseEnv()) {
    return (
      <section className="bg-leaf-50 py-16">
        <Container>
          <div className="rounded-lg bg-white p-8 shadow-soft">
            <h1 className="text-2xl font-bold text-leaf-900">Supabase environment needed</h1>
            <p className="mt-3 text-slate-700">Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local` to enable login and content management.</p>
          </div>
        </Container>
      </section>
    );
  }

  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/admin/login");

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <Container className="flex min-h-16 items-center justify-between gap-4">
          <Link href="/admin" className="inline-flex items-center gap-2 font-bold text-leaf-900">
            <LayoutDashboard className="h-5 w-5" /> Admin Dashboard
          </Link>
          <LogoutButton />
        </Container>
      </div>
      {children}
    </section>
  );
}
