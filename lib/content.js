import {
  blogPosts,
  donationDetails,
  gallery,
  homeContent,
  partners,
  programs,
  projects,
  siteSettings,
  successStories,
  teamMembers
} from "@/lib/fallback-data";
import { createSupabaseServerClient, hasSupabaseEnv } from "@/lib/supabase/server";

const fallbacks = {
  site_settings: [siteSettings],
  home_sections: [homeContent],
  programs,
  projects,
  success_stories: successStories,
  gallery,
  blog_posts: blogPosts,
  team_members: teamMembers,
  partners,
  donation_details: [donationDetails]
};

export async function getRows(table, options = {}) {
  if (!hasSupabaseEnv()) return fallbacks[table] || [];

  const supabase = createSupabaseServerClient();
  let query = supabase.from(table).select(options.select || "*");

  if (options.eq) {
    for (const [column, value] of Object.entries(options.eq)) query = query.eq(column, value);
  }

  if (options.order) query = query.order(options.order.column, { ascending: options.order.ascending ?? true });
  if (options.limit) query = query.limit(options.limit);

  const { data, error } = await query;
  if (error) {
    console.error(`Supabase read failed for ${table}:`, error.message);
    return fallbacks[table] || [];
  }
  return data || [];
}

export async function getSingle(table) {
  const rows = await getRows(table, { limit: 1 });
  return rows[0] || (fallbacks[table] || [])[0] || {};
}

export async function getBySlug(table, slug) {
  const rows = await getRows(table, { eq: { slug }, limit: 1 });
  return rows[0] || (fallbacks[table] || []).find((item) => item.slug === slug);
}
