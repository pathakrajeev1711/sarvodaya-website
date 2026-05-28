export const adminResources = {
  home_sections: {
    label: "Home Page",
    fields: ["hero_title", "hero_subtitle", "hero_image_url", "primary_cta_label", "primary_cta_url", "secondary_cta_label", "secondary_cta_url"]
  },
  programs: {
    label: "Programs",
    fields: ["title", "slug", "short_description", "detailed_description", "cover_image_url", "beneficiary_count", "location", "status", "display_order"]
  },
  projects: {
    label: "Projects",
    fields: ["project_name", "slug", "location", "donor_partner_name", "start_date", "end_date", "status", "project_objective", "beneficiary_details", "activities", "outcomes", "cover_image_url", "report_url", "display_order"]
  },
  project_images: {
    label: "Project Images",
    fields: ["project_id", "image_url", "alt_text", "caption", "category", "display_order"]
  },
  success_stories: {
    label: "Success Stories",
    fields: ["beneficiary_name", "location", "story_title", "before_situation", "support_provided", "after_impact", "photo_url", "related_project_program", "video_url", "display_order"]
  },
  gallery: {
    label: "Gallery",
    fields: ["image_url", "alt_text", "caption", "location", "image_date", "category", "related_page_section", "display_order"]
  },
  blog_posts: {
    label: "News / Blog",
    fields: ["title", "slug", "cover_image_url", "content", "published_date", "author", "category", "status", "display_order"]
  },
  team_members: {
    label: "Team Members",
    fields: ["name", "designation", "photo_url", "short_bio", "email", "phone", "display_order"]
  },
  partners: {
    label: "Partners / Donors",
    fields: ["name", "logo_url", "website_url", "description", "partnership_type", "display_order"]
  },
  site_settings: {
    label: "Contact Details",
    fields: ["organization_name", "email", "phone", "address", "map_embed_url", "facebook_url", "instagram_url", "linkedin_url"]
  },
  donation_details: {
    label: "Donation Details",
    fields: ["appeal_text", "bank_name", "account_name", "account_number", "ifsc_code", "branch", "micr_code", "upi_id", "qr_code_url", "eighty_g_information", "csr_cta_text"]
  }
};

export const imageFields = new Set(["hero_image_url", "cover_image_url", "photo_url", "logo_url", "image_url", "qr_code_url"]);
export const longTextFields = new Set(["hero_subtitle", "short_description", "detailed_description", "project_objective", "beneficiary_details", "activities", "outcomes", "before_situation", "support_provided", "after_impact", "content", "short_bio", "description", "appeal_text", "eighty_g_information", "csr_cta_text", "address"]);
