import type { CategoryGroup, ClassCard, FilterGroup, TabKey, TutorCard } from "./types";

/* ============================================
   NAVIGATION
   ============================================ */

export const NAV_ITEMS: Array<{ key: string; label: string; path: string }> = [
  { key: "home", label: "Home", path: "/home" },
  { key: "about", label: "About", path: "/about" },
  { key: "contact", label: "Contact", path: "/contact" },
  { key: "dashboard", label: "Dashboard", path: "/dashboard" },
];

export const FOOTER_LINKS: Array<{ label: string; path: string }> = [
  { label: "Privacy Policy", path: "/policies?tab=privacy" },
  { label: "Terms & Conditions", path: "/policies?tab=terms" },
  { label: "FAQ", path: "/policies?tab=faq" },
];

/* ============================================
   CATEGORY GROUPS (header dropdown)
   ============================================ */

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    title: "All Classes",
    items: ["All"],
  },
  {
    title: "Technology",
    items: ["Web Development", "Mobile Apps", "Cloud Computing", "Cyber Security"],
  },
  {
    title: "Creative",
    items: ["UI/UX Design", "Motion Graphics", "Video Editing", "Brand Design"],
  },
  {
    title: "Business",
    items: ["Digital Marketing", "Project Management", "Leadership", "Finance Basics"],
  },
  {
    title: "Languages",
    items: ["English Mastery", "Japanese", "Korean", "IELTS Preparation"],
  },
];

/* ============================================
   CLASS CATALOG (Classes page)
   ============================================ */

export const PRODUCT_FILTER_GROUPS: FilterGroup[] = [
  {
    title: "By Grade",
    options: ["Grade 06", "Grade 07", "Grade 08", "Grade 09", "Grade 10"],
  },
  {
    title: "By Subject",
    options: ["Biology", "ICT", "Physics", "Mathematics", "Sinhala"],
  },
  {
    title: "By Type",
    options: ["Paper Class", "Theory Class", "Revision Class"],
  },
];

export const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "popular", label: "Lorem Ipsum" },
  { key: "newest", label: "Lorem Ipsum" },
  { key: "featured", label: "Lorem Ipsum" },
];

const COVER_IDEAS: ClassCard[] = [
  {
    id: "c1",
    subject: "Business",
    title: "Topic For A Class",
    teacher: "Mr. Lorem Ipsum",
    price: 4000,
    oldPrice: 4900,
    day: "JAN 24",
    duration: "20.00 HRS",
    seats: "20/25",
    rating: 4.8,
    cover:
      "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #0f172a 100%), radial-gradient(circle at 70% 20%, rgba(96,165,250,0.35), transparent 50%)",
  },
  {
    id: "c2",
    subject: "Business",
    title: "Topic For A Class",
    teacher: "Mr. Lorem Ipsum",
    price: 4000,
    oldPrice: 4900,
    day: "JAN 24",
    duration: "20.00 HRS",
    seats: "20/25",
    rating: 4.6,
    cover:
      "linear-gradient(135deg, #111827 0%, #1e40af 50%, #0f172a 100%), radial-gradient(circle at 30% 80%, rgba(59,130,246,0.3), transparent 55%)",
  },
  {
    id: "c3",
    subject: "Business",
    title: "Topic For A Class",
    teacher: "Mr. Lorem Ipsum",
    price: 4000,
    oldPrice: 4900,
    day: "JAN 24",
    duration: "20.00 HRS",
    seats: "20/25",
    rating: 4.9,
    cover:
      "linear-gradient(135deg, #020617 0%, #1d4ed8 40%, #0c4a6e 100%), radial-gradient(circle at 80% 60%, rgba(37,99,235,0.35), transparent 55%)",
  },
  {
    id: "c4",
    subject: "Business",
    title: "Topic For A Class",
    teacher: "Mr. Lorem Ipsum",
    price: 4000,
    oldPrice: 4900,
    day: "JAN 24",
    duration: "20.00 HRS",
    seats: "20/25",
    rating: 4.7,
    cover:
      "linear-gradient(135deg, #111827 0%, #2563eb 45%, #1e293b 100%), radial-gradient(circle at 50% 50%, rgba(37,99,235,0.25), transparent 60%)",
  },
  {
    id: "c5",
    subject: "Business",
    title: "Topic For A Class",
    teacher: "Mr. Lorem Ipsum",
    price: 4000,
    oldPrice: 4900,
    day: "JAN 24",
    duration: "20.00 HRS",
    seats: "20/25",
    rating: 4.5,
    cover:
      "linear-gradient(135deg, #0c1c38 0%, #1d4ed8 50%, #111827 100%), radial-gradient(circle at 20% 40%, rgba(59,130,246,0.35), transparent 60%)",
  },
  {
    id: "c6",
    subject: "Business",
    title: "Topic For A Class",
    teacher: "Mr. Lorem Ipsum",
    price: 4000,
    oldPrice: 4900,
    day: "JAN 24",
    duration: "20.00 HRS",
    seats: "20/25",
    rating: 4.4,
    cover:
      "linear-gradient(135deg, #0b1220 0%, #1e3a8a 55%, #0f172a 100%), radial-gradient(circle at 90% 30%, rgba(37,99,235,0.35), transparent 60%)",
  },
];

/** Generates an extended list of class cards by cycling through the cover templates. */
export function classCardList(count = 40): ClassCard[] {
  const extended: ClassCard[] = [];
  for (let i = 0; i < count; i += 1) {
    const template = COVER_IDEAS[i % COVER_IDEAS.length];
    extended.push({ ...template, id: `c-${i + 1}` });
  }
  return extended;
}

/* ============================================
   TUTORS (Our Tutors page)
   ============================================ */

export const GRADE_OPTIONS = ["Grade 06", "Grade 07", "Grade 08", "Grade 09", "Grade 10", "Grade 11", "A/L"];
export const SUBJECT_OPTIONS = ["Biology", "ICT", "Physics", "Mathematics", "Sinhala", "English", "Chemistry"];

const TUTOR_TEMPLATES: TutorCard[] = [
  {
    id: "t1",
    name: "Name Of The Tutor",
    subject: "Sub Topic Or Something",
    grade: "Grade 10 - 11",
    image:
      "https://images.pexels.com/photos/8617843/pexels-photo-8617843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=480",
    certifications: ["BSc. In Education", "MSc. In Subject Studies", "10+ Years Of Experience"],
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    id: "t2",
    name: "Name Of The Tutor",
    subject: "Sub Topic Or Something",
    grade: "Grade 08 - 09",
    image:
      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=480",
    certifications: ["BA In Education", "Diploma In Teaching", "8+ Years Of Experience"],
    socials: { facebook: "#", instagram: "#", youtube: "#" },
  },
  {
    id: "t3",
    name: "Name Of The Tutor",
    subject: "Sub Topic Or Something",
    grade: "A/L Science",
    image:
      "https://images.pexels.com/photos/8617757/pexels-photo-8617757.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=480",
    certifications: ["BSc. Hons", "MPhil Candidate", "12+ Years Of Experience"],
    socials: { linkedin: "#", youtube: "#" },
  },
];

/** Generates an extended list of tutor cards by cycling through the templates. */
export function tutorCardList(count = 24): TutorCard[] {
  const extended: TutorCard[] = [];
  for (let i = 0; i < count; i += 1) {
    const template = TUTOR_TEMPLATES[i % TUTOR_TEMPLATES.length];
    extended.push({ ...template, id: `tutor-${i + 1}` });
  }
  return extended;
}
