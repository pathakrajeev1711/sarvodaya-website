import { notFound } from "next/navigation";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { deleteAdminRecord, upsertAdminRecord } from "@/app/actions";
import { StorageUpload } from "@/components/admin/storage-upload";
import { Container } from "@/components/ui";
import { adminResources, imageFields, longTextFields } from "@/lib/admin-config";
import { getRows } from "@/lib/content";

export default async function AdminResourcePage({ params, searchParams }) {
  const config = adminResources[params.resource];
  if (!config) notFound();
  const rows = await getRows(params.resource, { order: { column: "created_at", ascending: false }, limit: 50 });
  const tableAction = upsertAdminRecord.bind(null, params.resource);

  return (
    <Container className="py-10">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-bold text-leaf-900">{config.label}</h1>
          <p className="mt-2 text-sm text-slate-600">Create a new item, then edit or delete existing records below.</p>
        </div>
        {searchParams?.status && <p className="rounded-md bg-leaf-50 px-4 py-2 text-sm font-semibold text-leaf-800">Status: {searchParams.status}</p>}
      </div>

      <form action={tableAction} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold text-leaf-900">Add new</h2>
        <FieldGrid fields={config.fields} />
        <button className="mt-5 rounded-md bg-leaf-700 px-5 py-3 text-sm font-semibold text-white hover:bg-leaf-600">Save new item</button>
      </form>

      <div className="mt-10 grid gap-5">
        {rows.map((row) => (
          <form key={row.id} action={tableAction} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <input type="hidden" name="id" value={row.id} />
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="font-bold text-leaf-900">{row.title || row.name || row.project_name || row.story_title || row.caption || row.organization_name || row.id}</h2>
              <DeleteButton table={params.resource} id={row.id} />
            </div>
            <FieldGrid fields={config.fields} values={row} />
            <button className="mt-5 rounded-md bg-river-700 px-5 py-3 text-sm font-semibold text-white hover:bg-river-600">Update item</button>
          </form>
        ))}
      </div>
    </Container>
  );
}

function FieldGrid({ fields, values = {} }) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {fields.map((field) => <AdminField key={field} field={field} value={values[field]} />)}
    </div>
  );
}

function AdminField({ field, value }) {
  const inputId = `${field}-${Math.random().toString(36).slice(2)}`;
  const label = field.replaceAll("_", " ");
  const valueText = value ?? "";
  const isLong = longTextFields.has(field);
  const isImage = imageFields.has(field);
  const isDate = field.includes("date");
  const isNumber = field.includes("count") || field.includes("order");

  return (
    <label className={isLong ? "grid gap-2 md:col-span-2" : "grid gap-2"}>
      <span className="text-sm font-semibold capitalize text-slate-700">{label}</span>
      {isLong ? (
        <textarea id={inputId} name={field} defaultValue={valueText} rows={4} className="rounded-md border border-slate-300 px-3 py-2" />
      ) : (
        <input id={inputId} name={field} defaultValue={valueText} type={isDate ? "date" : isNumber ? "number" : "text"} className="rounded-md border border-slate-300 px-3 py-2" />
      )}
      {isImage && <StorageUpload inputId={inputId} />}
      {isImage && valueText && (
        <span className="relative mt-2 block aspect-[5/3] overflow-hidden rounded-md bg-slate-100">
          <Image src={valueText} alt={label} fill className="object-cover" sizes="320px" />
        </span>
      )}
    </label>
  );
}

function DeleteButton({ table, id }) {
  const action = deleteAdminRecord.bind(null, table, id);
  return (
    <button formAction={action} className="inline-flex items-center gap-2 rounded-md border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-50">
      <Trash2 className="h-4 w-4" /> Delete
    </button>
  );
}
