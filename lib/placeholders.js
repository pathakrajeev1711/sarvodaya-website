export const placeholderImages = {
  hero:
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1800&q=80",
  education:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  women:
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80",
  digital:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  rural:
    "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=80",
  team:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  donate:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
};

export function imageUrl(record, fallback = placeholderImages.education) {
  return record?.image_url || record?.cover_image_url || record?.photo_url || record?.logo_url || fallback;
}
