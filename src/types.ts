export type Theme = "light" | "dark";

export type TabKey = "popular" | "newest" | "featured";

export type ClassCard = {
  id: string;
  subject: string;
  title: string;
  teacher: string;
  price: number;
  oldPrice: number;
  day: string;
  duration: string;
  seats: string;
  rating: number;
  cover: string;
};

export type FilterGroup = {
  title: string;
  options: string[];
};

export type TutorCard = {
  id: string;
  name: string;
  subject: string;
  grade: string;
  image: string;
  certifications: string[];
  socials: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
};

export type CategoryGroup = {
  title: string;
  items: string[];
};
