export interface Project {
  id: string;
  title: string;
  category: string;
  completionDate: string;
  tech: string[];
  description: string;
  image: string;
  client?: string;
  visitUrl?: string;
  sourceUrl?: string;
  challenge?: string;
  solution?: string;
  businessImpact?: string;
  features?: string[];
  highlights?: string[];
  badgeText?: string;
  gallery?: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  type: string;
  company: string;
  duration: string;
  location: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  status: string;
  duration: string;
  description: string;
  highlights: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeGradient: string;
  url?: string;
}

export interface CertificateCategory {
  id: string;
  name: string;
  emoji: string;
  colorClass: string;
  logoName: string;
  descriptionID: string;
  descriptionEN: string;
  badgeGradient: string;
  certificates: Certificate[];
}

export interface Skill {
  name: string;
  color: string; // Tailwind accent color or hex color
  logo?: string; // Optional SVG or Lucide icon key
}

export interface SkillCategory {
  title: string;
  stackNumber: number;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // E.g., 'github', 'linkedin', 'instagram', 'mail' or image URL / SVG path
}

export interface BlogPost {
  slug: string;
  titleID: string;
  titleEN: string;
  summaryID: string;
  summaryEN: string;
  contentID: string; // Rich markdown or HTML text
  contentEN: string; // Rich markdown or HTML text
  thumbnail: string;
  category: string; // Category for filtering
  date: string; // Format: YYYY-MM-DD for sorting
  readTimeID: string; // Reading time estimation (ID)
  readTimeEN: string; // Reading time estimation (EN)
  tags: string[];
  metaTitleID?: string;
  metaTitleEN?: string;
  metaDescriptionID?: string;
  metaDescriptionEN?: string;
  author?: {
    name: string;
    avatar: string;
    role?: string;
  };
}
