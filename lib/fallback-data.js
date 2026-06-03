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
  hero_image_url: "/images/hero/kids.jpeg",
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
    id: "sarvodaya-youth-empowerment",
    title: "Sarvodaya Youth Empowerment",
    slug: "sarvodaya-youth-empowerment",
    short_description:
      "A youth guidance and mentorship program supporting rural students with career direction, competitive exam preparation, and Sarvodaya IAS support.",
    detailed_description:
      "Sarvodaya Youth Empowerment provides educational support, mentoring, career guidance, personality development, and preparation direction for rural students and aspirants. Sarvodaya IAS is part of this program, supporting youth preparing for civil services and other competitive examinations.",
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

const galleryProgramGroups = [
  {
    slug: "vidyapeeth",
    title: "Sarvodaya Vidyapeeth",
    category: "Education",
    location: "Dobhi, Gaya, Bihar",
    files: [
      "vidyapeeth-01.jpg",
      "vidyapeeth-02.jpg",
      "vidyapeeth-03.jpeg",
      "vidyapeeth-04.jpeg",
      "vidyapeeth-05.jpg",
      "vidyapeeth-06.jpg",
      "vidyapeeth-07.jpeg",
      "vidyapeeth-08.jpeg",
      "vidyapeeth-09.jpeg",
      "vidyapeeth-10.jpeg",
      "vidyapeeth-11.jpeg",
      "vidyapeeth-12.jpeg",
      "vidyapeeth-13.jpeg",
      "vidyapeeth-14.jpeg",
      "vidyapeeth-15.jpeg",
      "vidyapeeth-16.jpg",
      "vidyapeeth-17.jpeg",
      "vidyapeeth-18.jpg",
      "vidyapeeth-19.jpeg",
      "vidyapeeth-20.jpeg",
      "vidyapeeth-21.jpeg",
      "vidyapeeth-22.jpeg",
      "vidyapeeth-23.jpeg",
      "vidyapeeth-24.jpeg",
      "vidyapeeth-25.jpeg",
      "vidyapeeth-26.jpeg",
      "vidyapeeth-27.jpeg",
      "vidyapeeth-28.jpeg",
      "vidyapeeth-29.jpeg"
    ]
  },
  {
    slug: "saheli",
    title: "Sarvodaya Saheli",
    category: "Saheli",
    location: "Dobhi, Gaya, Bihar",
    files: [
      "saheli-01.jpeg",
      "saheli-02.jpeg",
      "saheli-03.jpg",
      "saheli-04.jpeg",
      "saheli-05.jpeg",
      "saheli-06.jpg",
      "saheli-07.jpeg",
      "saheli-08.jpeg",
      "saheli-09.jpeg",
      "saheli-10.jpeg",
      "saheli-11.jpeg",
      "saheli-12.jpeg",
      "saheli-13.jpeg",
      "saheli-14.jpeg",
      "saheli-15.jpeg",
      "saheli-16.jpeg"
    ]
  },
  {
    slug: "digital-empowerment",
    title: "Sarvodaya Digital Empowerment",
    category: "Digital",
    location: "Hunterganj, Chatra, Jharkhand",
    files: [
      "digital-empowerment-01.jpg",
      "digital-empowerment-02.jpg",
      "digital-empowerment-03.jpg",
      "digital-empowerment-04.jpeg",
      "digital-empowerment-05.jpeg",
      "digital-empowerment-06.jpeg",
      "digital-empowerment-07.jpg",
      "digital-empowerment-08.jpeg",
      "digital-empowerment-09.jpeg",
      "digital-empowerment-10.jpeg",
      "digital-empowerment-11.jpeg",
      "digital-empowerment-12.jpeg"
    ]
  },
  {
    slug: "farm",
    title: "Sarvodaya Farm",
    category: "Farm",
    location: "Aurangabad, Bihar",
    files: [
      "farm-01.jpg",
      "farm-02.jpg",
      "farm-03.jpg",
      "farm-04.jpg",
      "farm-05.jpg",
      "farm-06.jpeg",
      "farm-07.jpg",
      "farm-08.jpeg",
      "farm-09.jpeg",
      "farm-10.jpeg",
      "farm-11.jpeg",
      "farm-12.jpeg",
      "farm-13.jpeg"
    ]
  },
  {
    slug: "youth-empowerment",
    title: "Sarvodaya Youth Empowerment",
    category: "Youth Empowerment",
    location: "Gaya, Bihar",
    files: [
      "youth-empowerment-01.jpg",
      "youth-empowerment-02.jpg",
      "youth-empowerment-03.jpeg",
      "youth-empowerment-04.jpeg",
      "youth-empowerment-05.jpeg",
      "youth-empowerment-06.jpg",
      "youth-empowerment-07.jpg",
      "youth-empowerment-08.jpg"
    ]
  }
];

const maxGalleryProgramImages = Math.max(...galleryProgramGroups.map((group) => group.files.length));

export const gallery = Array.from({ length: maxGalleryProgramImages })
  .flatMap((_, imageIndex) =>
    galleryProgramGroups
      .filter((group) => group.files[imageIndex])
      .map((group) => ({
        id: `${group.slug}-${imageIndex + 1}`,
        image_url: `/images/gallery/${group.slug}/${group.files[imageIndex]}`,
        alt_text: `${group.title} program photo ${imageIndex + 1}`,
        caption: group.title,
        location: group.location,
        category: group.category
      }))
  )
  .map((item, index) => ({ ...item, display_order: index + 1, image_date: "" }));

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
