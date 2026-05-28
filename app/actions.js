"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createSupabaseServerClient, hasSupabaseEnv } from "@/lib/supabase/server";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10)
});

export async function submitContact(formData) {
  const payload = Object.fromEntries(formData);
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) redirect("/contact?status=invalid");

  if (hasSupabaseEnv()) {
    const supabase = createSupabaseServerClient();
    await supabase.from("contact_submissions").insert(parsed.data);
  }

  redirect("/contact?status=success");
}

export async function upsertAdminRecord(table, formData) {
  if (!hasSupabaseEnv()) redirect(`/admin/${table}?status=env-missing`);

  const supabase = createSupabaseServerClient();
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) redirect("/admin/login");

  const payload = Object.fromEntries(formData);
  const id = payload.id || undefined;
  delete payload.id;
  Object.keys(payload).forEach((key) => {
    if (payload[key] === "") payload[key] = null;
  });

  const query = id
    ? supabase.from(table).update(payload).eq("id", id)
    : supabase.from(table).insert(payload);
  const { error } = await query;
  if (error) redirect(`/admin/${table}?status=error`);
  redirect(`/admin/${table}?status=saved`);
}

export async function deleteAdminRecord(table, id) {
  if (!hasSupabaseEnv()) redirect(`/admin/${table}?status=env-missing`);
  const supabase = createSupabaseServerClient();
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) redirect("/admin/login");
  await supabase.from(table).delete().eq("id", id);
  redirect(`/admin/${table}?status=deleted`);
}
