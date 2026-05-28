"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function StorageUpload({ inputId, bucket = "website-assets" }) {
  const [status, setStatus] = useState("");

  async function onChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setStatus("Uploading...");
    const allowed = ["image/", "application/pdf"];
    if (!allowed.some((type) => file.type.startsWith(type))) {
      setStatus("Only image or PDF files are allowed.");
      return;
    }

    const supabase = createSupabaseBrowserClient();
    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "-")}`;
    const { error } = await supabase.storage.from(bucket).upload(path, file, {
      cacheControl: "3600",
      upsert: false
    });
    if (error) {
      setStatus(error.message);
      return;
    }
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    const input = document.getElementById(inputId);
    if (input) input.value = data.publicUrl;
    setStatus("Uploaded. URL inserted.");
  }

  return (
    <div className="mt-2">
      <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">
        <Upload className="h-4 w-4" /> Upload file
        <input type="file" className="hidden" onChange={onChange} accept="image/*,application/pdf" />
      </label>
      {status && <p className="mt-2 text-xs text-slate-600">{status}</p>}
    </div>
  );
}
