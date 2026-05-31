import { placeholderImages } from "@/lib/placeholders";

export const siteSettings = {
  organization_name: "Sarvodaya Foundation for Education and Skill Development",
  email: "sarvodayafoundation2021@gmail.com",
  phone: "+91 8892198284",
  address: "Sarvodaya Chowk, Near Kali Mandir, Dharampur, Dobhi, Gaya, Bihar - 824201",
  facebook_url: "#",
  instagram_url: "#",
  linkedin_url: "#",
  map_embed_url: ""
};

export const homeContent = {
  hero_title: "Education, skills, and dignity for stronger communities",
  hero_subtitle:
    "Sarvodaya Foundation works with rural and underserved communities to create opportunities through education, digital empowerment, women-led livelihoods, sustainable farming, and skill development.",
  hero_image_url: "/images/kids.jpeg",
  primary_cta_label: "Support Our Work",
  primary_cta_url: "/donate",
  secondary_cta_label: "Explore Programs",
  secondary_cta_url: "/programs"
};

export const impactStats = [
  { label: "Women trained", value: "500+" },
  { label: "Villages reached", value: "85+" },
  { label: "Students trained", value: "1,000+" },
  { label: "Livelihoods supported", value: "100+" },
  { label: "Project units", value: "9" }
];

export const programs = [
  {
    id: "sarvodaya-vidyapeeth",
    title: "Sarvodaya Vidyapeeth",
    slug: "sarvodaya-vidyapeeth",
    short_description:
      "Customized rural education with digital learning, smart classes, foundational support, and practical skill-based teaching to help rural students bridge the gap with urban education.",
    detailed_description:
      "Sarvodaya Vidyapeeth helps students from underserved backgrounds bridge the gap with urban education through smart classes, digital tools, foundational academic support, and practical skill-based learning.",
    cover_image_url: "/images/programs/vidyapeeth.jpeg",
    beneficiary_count: 4000,
    location: "Rural communities",
    status: "Ongoing",
    display_order: 1
  },
  {
    id: "sarvodaya-digital-empowerment",
    title: "Sarvodaya Digital Empowerment",
    slug: "sarvodaya-digital-empowerment",
    short_description:
      "A digital inclusion program providing computer education, digital literacy, online services awareness, and technology access.",
    detailed_description:
      "Sarvodaya Digital Empowerment builds confidence with computers, online services, digital literacy, safe technology use, and access to essential digital tools for underserved communities.",
    cover_image_url: "/images/programs/digital-empowerment.jpeg",
    beneficiary_count: 3200,
    location: "Villages and community centers",
    status: "Ongoing",
    display_order: 2
  },
  {
    id: "sarvodaya-saheli",
    title: "Sarvodaya Saheli",
    slug: "sarvodaya-saheli",
    short_description:
      "A women empowerment and livelihood initiative supporting rural women through tailoring, employment, skills, and income generation.",
    detailed_description:
      "Sarvodaya Saheli supports rural women with tailoring training, livelihood skills, employment pathways, confidence building, and practical income generation activities.",
    cover_image_url: "/images/programs/saheli.jpeg",
    beneficiary_count: 2500,
    location: "Rural and semi-urban communities",
    status: "Ongoing",
    display_order: 3
  },
  {
    id: "sarvodaya-farm",
    title: "Sarvodaya Farm",
    slug: "sarvodaya-farm",
    short_description:
      "Sustainable agriculture initiative promoting organic farming, Moringa plantation, medicinal plants, flower cultivation, and vermicomposting.",
    detailed_description:
      "Sarvodaya Farm promotes environmentally responsible rural farming practices through organic farming, Moringa plantation, medicinal plants, flower cultivation, vermicomposting, and sustainable agriculture awareness.",
    cover_image_url: "/images/programs/farm.jpeg",
    beneficiary_count: 5000,
    location: "Rural clusters",
    status: "Ongoing",
    display_order: 4
  },
  {
    id: "sarvodaya-ias",
    title: "Sarvodaya IAS",
    slug: "sarvodaya-ias",
    short_description:
      "A mentorship and guidance program supporting rural students and aspirants preparing for civil services and competitive examinations.",
    detailed_description:
      "Sarvodaya IAS provides educational support, mentoring, career guidance, and preparation direction for rural students and aspirants working toward civil services and other competitive examinations.",
    cover_image_url: "/images/programs/ias.jpg",
    beneficiary_count: 0,
    location: "Rural students and aspirants",
    status: "Ongoing",
    display_order: 5
  }
];

export const projects = [
  {
    id: "digital-sakhi",
    project_name: "Digital Sakhi Training Initiative",
    slug: "digital-sakhi-training-initiative",
    location: "Rural communities",
    donor_partner_name: "Community partners",
    start_date: "2025-04-01",
    end_date: null,
    status: "Ongoing",
    project_objective: "Improve digital confidence and service access for women.",
    beneficiary_details: "Women and adolescent girls from low-income households.",
    activities: "Digital literacy sessions, cyber safety workshops, guided practice.",
    outcomes: "Improved access to digital payments, services, and communication.",
    cover_image_url: placeholderImages.digital,
    report_url: ""
  },
  {
    id: "livelihood-skills",
    project_name: "Livelihood Skills for Youth",
    slug: "livelihood-skills-for-youth",
    location: "Training centers",
    donor_partner_name: "Local donors",
    start_date: "2024-08-15",
    end_date: "2025-03-31",
    status: "Completed",
    project_objective: "Provide employment-oriented training and placement support.",
    beneficiary_details: "Unemployed youth and first-generation learners.",
    activities: "Skill classes, mentoring, interviews, employer linkages.",
    outcomes: "Youth connected to jobs, apprenticeships, and self-employment.",
    cover_image_url: placeholderImages.education,
    report_url: ""
  }
];

export const successStories = [
  {
    id: "anita",
    beneficiary_name: "Anita Devi",
    location: "Village cluster",
    story_title: "From training to income",
    before_situation: "Anita wanted to support her family but lacked a steady skill and local earning opportunity.",
    support_provided: "She joined a women-led livelihood training program with practical guidance and mentoring.",
    after_impact: "Training gave me confidence to earn with dignity from my own skills.",
    photo_url: placeholderImages.women,
    related_project_program: "Sarvodaya Saheli",
    video_url: ""
  },
  {
    id: "rahul",
    beneficiary_name: "Rahul Kumar",
    location: "Training center",
    story_title: "Digital confidence for rural youth",
    before_situation: "Rahul had limited computer access and depended on others for online services.",
    support_provided: "He received digital literacy support, computer exposure, and online services awareness.",
    after_impact: "I can now use digital services independently and help others in my village.",
    photo_url: placeholderImages.digital,
    related_project_program: "Sarvodaya Digital Empowerment",
    video_url: ""
  },
  {
    id: "priya",
    beneficiary_name: "Priya Kumari",
    location: "Community learning center",
    story_title: "Learning beyond classroom",
    before_situation: "Priya needed foundational support and exposure to practical digital learning.",
    support_provided: "She joined customized learning sessions with smart classes and guided practice.",
    after_impact: "The classes made learning easier and helped me dream bigger.",
    photo_url: placeholderImages.education,
    related_project_program: "Sarvodaya Vidyapeeth",
    video_url: ""
  }
];

export const gallery = [
  {
    id: "gallery-1",
    image_url: placeholderImages.education,
    alt_text: "Students attending an education session",
    caption: "Education support session",
    location: "Community learning center",
    category: "Education",
    display_order: 1,
    image_date: "2025-02-10"
  },
  {
    id: "gallery-2",
    image_url: placeholderImages.women,
    alt_text: "Women participating in a training workshop",
    caption: "Women empowerment workshop",
    location: "Village hall",
    category: "Women Empowerment",
    display_order: 2,
    image_date: "2025-03-18"
  },
  {
    id: "gallery-3",
    image_url: placeholderImages.digital,
    alt_text: "Digital literacy training with laptops",
    caption: "Digital awareness session",
    location: "Training center",
    category: "Digital Awareness",
    display_order: 3,
    image_date: "2025-04-05"
  },
  {
    id: "gallery-4",
    image_url: placeholderImages.rural,
    alt_text: "Sustainable farming and rural agriculture activity",
    caption: "Sustainable farming practice",
    location: "Rural farm site",
    category: "Sarvodaya Farm",
    display_order: 4,
    image_date: "2025-04-20"
  },
  {
    id: "gallery-5",
    image_url: placeholderImages.hero,
    alt_text: "Community members participating in a field program",
    caption: "Community outreach program",
    location: "Village cluster",
    category: "Community",
    display_order: 5,
    image_date: "2025-05-02"
  },
  {
    id: "gallery-6",
    image_url: placeholderImages.team,
    alt_text: "Mentorship and guidance session",
    caption: "Mentorship session",
    location: "Learning center",
    category: "Sarvodaya IAS",
    display_order: 6,
    image_date: "2025-05-12"
  }
];

export const blogPosts = [
  {
    id: "community-digital-drive",
    title: "Community digital awareness drive reaches new villages",
    slug: "community-digital-awareness-drive",
    cover_image_url: placeholderImages.digital,
    content:
      "The foundation conducted digital awareness sessions focused on online services, safe payments, and practical mobile usage.",
    published_date: "2025-05-10",
    author: "Sarvodaya Team",
    category: "Updates",
    status: "Published"
  }
];

export const teamMembers = [
  {
    id: "founder",
    name: "Founder / Chairperson",
    designation: "Leadership",
    photo_url: placeholderImages.team,
    short_bio: "Guiding the foundation with a focus on practical education, dignity, and inclusive growth.",
    email: "",
    phone: "",
    display_order: 1
  }
];

export const partners = [
  {
    id: "community-partners",
    name: "Community Partners",
    logo_url: "",
    website_url: "#",
    description: "Local institutions and donors supporting programs across communities.",
    partnership_type: "Implementation and donor support"
  }
];

export const donationDetails = {
  appeal_text:
    "Your support helps provide training, learning materials, digital access, and livelihood opportunities to underserved communities.",
  bank_name: "Axis Bank",
  account_name: "Sarvodaya foundation for education and skill devel",
  account_number: "924010049628050",
  ifsc_code: "UTIB0000124",
  branch: "Axis Bank, Dadar",
  micr_code: "400211017",
  upi_id: "",
  qr_code_url: "",
  eighty_g_information: "80G details can be added from the admin dashboard.",
  csr_cta_text: "Contact us for CSR partnership opportunities."
};
