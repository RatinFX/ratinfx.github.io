// #region General / Widgets

import type { AstroComponentFactory } from 'astro/dist/runtime/server';
import { dllLink, extensionLink, latestRelease, softwareLink } from './utils/projectinfo';
import { ProjectNames, VPProjectType } from './enums';

export interface HeaderProps {
  links?: Array<MenuLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  position?: string;
}

export interface FooterProps {
  links: Array<MenuLink>;
  theme?: string;
}

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

export class VPProjectDetails {
  slug: string = 'slug';
  name: ProjectNames = ProjectNames.Unknown;
  type: VPProjectType = VPProjectType.Unknown;

  tag: string = '0.0.0';
  releaseText?: string;
  releaseDate: Date = new Date();
  changes?: Array<string>;

  openInVPEM: boolean = false;
  openInVPEMLink?: string;
  openInVPEMText: string = 'Update in VPEM';

  hasSinglePrimary: boolean = true;
  hasManualSingle: boolean = false;
  singlePrimaryText?: string;
  singleSecondaryText?: string;

  hasManualVP13: boolean = false;
  hasManualVP14: boolean = false;

  tooltipSingle?: string;
  tooltipVP13?: string;
  tooltipVP14?: string;

  constructor(props: Partial<VPProjectDetails>) {
    const data = { ...props };
    Object.assign(this, data);

    this.releaseText = data.releaseText ? data.releaseText.replace('@tag', this.tag) : this.tag;

    if (this.openInVPEM && (this.type == VPProjectType.Extension || this.type == VPProjectType.Script)) {
      this.singlePrimaryText = 'Download VPEM';
    }
  }

  public hasPrimary(): boolean {
    return this.hasSinglePrimary || this.openInVPEM;
  }

  public hasSecondary(): boolean {
    return this.hasManualSingle || this.hasManualVP13 || this.hasManualVP14;
  }

  downloadLink(vpver: '' | '13' | '14'): string {
    if (this.type == VPProjectType.Extension) return extensionLink(this.name, this.tag, vpver);
    if (this.type == VPProjectType.Script) return dllLink(this.name, this.tag, vpver);
    return '';
  }

  public manualVP13(): string {
    return this.downloadLink('13');
  }

  public manualVP14(): string {
    return this.downloadLink('14');
  }

  public singlePrimary(): string {
    return softwareLink(this.name, this.tag);
  }

  public singleSecondary(): string {
    return latestRelease(this.name);
  }
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

  Content: AstroComponentFactory;
  content?: string;

  projectDetails?: VPProjectDetails;
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
