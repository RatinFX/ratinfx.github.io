// #region General / Widgets

export interface FeatureItem1 {
  title: string;
  description: string;
  icon?: string;
}

export interface FeatureItem2 {
  title?: string;
  description?: string;
  icon?: string;
  timeFrame?: string;
  tags?: Array<string>;
  bottomLink?: string;
  bottomLinkText?: string;
}

export interface ContentItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface StepItem {
  title: string;
  description: string;
  icon?: string;
}

export interface StatItem {
  name: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CallToAction {
  text: string;
  href: string;
  icon?: string;
  openOnNewTab?: boolean;
  tooltip?: string;
}

export interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

export interface MenuLink extends Link {
  title?: string;
  links?: Array<Link>;
}

// #endregion General / Widgets

// #region Project

export interface ProjectVersion {
  project: string;
  versions: Array<Version>;
}

export interface Version {
  release: string;
  releaseDate: Date;
  vp13link: string;
  vp14link: string;
  changes?: string[];
}

export interface Project {
  id: string;
  slug: string;

  publishDate: Date;
  title: string;
  description?: string;
  github?: string;

  image?: string;
  video?: string;

  permalink?: string;

  draft?: boolean;

  excerpt?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;

  Content: unknown;
  content?: string;

  versions?: Version[];
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}

// #endregion Project
