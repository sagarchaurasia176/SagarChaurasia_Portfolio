export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string;
};

export type ExperienceItem = {
  companyName: string;
  jobTitle: string;
  location: string;
  duration: string;
  responsibilities: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade?: string;
  skills?: string[];
};

export type SkillItem = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
  color: string;
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  url?: string;
};

export type NavLink = {
  title: string;
  href: string;
  external?: boolean;
};
