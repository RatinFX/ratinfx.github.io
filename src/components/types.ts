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
