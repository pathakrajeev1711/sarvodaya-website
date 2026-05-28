"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const supabase = createSupabaseBrowserClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: form.get("email"),
      password: form.get("password")
    });
    setLoading(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <section className="grid min-h-[70vh] place-items-center bg-leaf-50 px-4 py-16">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-lg bg-white p-7 shadow-soft">
        <h1 className="text-2xl font-bold text-leaf-900">Admin login</h1>
        <p className="mt-2 text-sm text-slate-600">Use a Supabase Auth admin account to manage website content.</p>
        {error && <p className="mt-4 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
        <label className="mt-6 grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Email</span>
          <input name="email" type="email" required className="rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="mt-4 grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Password</span>
          <input name="password" type="password" required className="rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <button disabled={loading} className="mt-6 w-full rounded-md bg-leaf-700 px-4 py-3 text-sm font-semibold text-white hover:bg-leaf-600 disabled:opacity-60">
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </section>
  );
}
