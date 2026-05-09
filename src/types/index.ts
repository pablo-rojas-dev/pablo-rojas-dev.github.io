export type Blog = {
    cover: string;
    blogUrl: string;
    title: string;
    tags: string[];
};

export type BlogsData = {
    title: string;
    items: Blog[];
};

export type Certificate = {
    image: string;
    certificateUrl: string;
    title: string;
    date: string;
};

export type CertificatesData = {
    title: string;
    items: Certificate[];
};

export type Experience = {
    dateRange: string;
    title: string;
    jobUrl: string;
    description: string;
    tags: string[];
};

export type ExperienceData = {
    title: string;
    items: Experience[];
};

export type Project = {
    title: string;
    description: string;
    images: string[];
    tags: string[];
    demoUrl: string;
    githubUrl: string;
};

export type ProjectsData = {
    title: string;
    items: Project[];
};

export type AboutData = {
    title: string;
    availableButton: string;
    paragraphs: string[];
    highlight: string;
};

export type FooterData = {
    title: string;
    quote: string;
    author: string;
};

export type Achievement = {
  image: string;
  title: string;
  organization: string;
  organizationUrl: string;
  date: string;
  description: string;
  tags: string[];
};

export type AchievementsData = {
  title: string;
  items: Achievement[];
};

export type ContactData = {
  gif: string;
  title: string;
  message: string;
  subject: string;
  body: string;
};

export type LinkTreeItem = {
  label: string;
  href: string;
  icon: "globe" | "github" | "linkedin" | "email" | "cv";
  external?: boolean;
};

export type LinkTreeData = {
  title: string;
  subtitle: string;
  items: LinkTreeItem[];
};