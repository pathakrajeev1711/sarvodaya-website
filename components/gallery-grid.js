"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { imageUrl } from "@/lib/placeholders";

export function GalleryGrid({ images, categories }) {
  const filters = useMemo(() => ["All", ...categories], [categories]);
  const [active, setActive] = useState("All");
  const visibleImages = active === "All" ? images : images.filter((image) => image.category === active);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-leaf-700 hover:text-white ${
                isActive ? "bg-leaf-700 text-white shadow-sm" : "bg-slate-100 text-slate-700"
              }`}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleImages.map((item) => (
          <figure key={item.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src={imageUrl(item)}
                alt={item.alt_text || item.caption || "Gallery image"}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 50vw"
              />
            </div>
            <figcaption className="p-4">
              <p className="font-semibold text-leaf-900">{item.caption}</p>
              <p className="mt-1 text-sm text-slate-600">
                {item.location} {item.image_date ? `• ${item.image_date}` : ""}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
