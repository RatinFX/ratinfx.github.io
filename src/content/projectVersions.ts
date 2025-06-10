import { ProjectNames, ProjectSlugs, ShortProjectNames, VPProjectType } from '~/enums';
import { VPProjectDetails } from '~/types';
import { linkToProjectLatest } from '~/utils/projectinfo';

const ttDownloadViaVPEM = 'Redirects to Download VEGAS Pro Extension Manager';

/**
 * Discontinued extension
 */
export const betterSearch: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.BetterSearch,
  name: ProjectNames.BetterSearch,
  type: VPProjectType.Extension,

  tag: '1.5.0',
  releaseText: '@tag - final',
  releaseDate: new Date('2023-11-26'),
  changes: ['Removed Check for Updates and Website link', 'VPData and RatinFX.VP update'],

  hasSinglePrimary: false,
});

// Scripts

export const customFades: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.CustomFades,
  name: ProjectNames.CustomFades,
  type: VPProjectType.Script,

  tag: '1.1.0',
  releaseDate: new Date('2023-03-11'),
  changes: [
    'Added top row with a <b>Creator</b> and <b>About</b> tab',
    'Removed <b>Help</b> button and moved information to <b>About</b> ',
    'Fixed the whole slug because it was not working',
  ],

  openInVPEM: true,
  singlePrimary: () => linkToProjectLatest(ProjectSlugs.VPExtensionManager),
  tooltipSingle: ttDownloadViaVPEM,
  hasManualVP13: true,
  hasManualVP14: true,
});

export const shortenExtendMedia: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.ShortenExtendMedia,
  name: ProjectNames.ShortenExtendMedia,
  type: VPProjectType.Script,

  tag: '1.1.0',
  releaseDate: new Date('2023-03-12'),
  changes: [
    'Added top row with a <b>Creator</b> and <b>About</b> tab',
    'Removed <b>Help</b> button and moved information to <b>About</b> ',
  ],

  openInVPEM: true,
  singlePrimary: () => linkToProjectLatest(ProjectSlugs.VPExtensionManager),
  tooltipSingle: ttDownloadViaVPEM,
  hasManualVP13: true,
  hasManualVP14: true,
});

// Extensions

export const vpflow: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.VPFlow,
  name: ProjectNames.VPFlow,
  displayName: ShortProjectNames.VPFlow,
  type: VPProjectType.Extension,

  tag: '1.8.2',
  releaseDate: new Date('2025-06-10'),
  changes: [
    'Make VPFlow <b>available in Edit, View, and Tools</b> at the same time (1.8.1)',
    'Added support for <b>DXT</b> (mostly built-in effects), <b>Media Generators</b>, <b>Parent</b> and <b>Track Composite Mode FX</b>, and <b>OFXCustomParameter</b> (e.g. Mesh Warp - WarpData)',
    'Force focus Timeline after pressing Apply',
    'Display Update available text on the Main form',
    'Changed displayed text for Parameter selection (second dropdown)',
    'Various bug fixes',
  ],

  openInVPEM: true,
  singlePrimary: () => linkToProjectLatest(ProjectSlugs.VPExtensionManager),
  tooltipSingle: ttDownloadViaVPEM,
  hasManualVP14: true,
  hasManualVP13: true,
});

export const vpconsole: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.VPConsole,
  name: ProjectNames.VPConsole,
  type: VPProjectType.Extension,

  tag: '1.1.0',
  releaseDate: new Date('2025-04-18'),
  changes: ['Added Search Tags', 'Added Edit Shortcut Window quality of life changes', 'RatinFX.VP update'],

  hasSinglePrimary: false,
  openInVPEM: true,
  singlePrimary: () => linkToProjectLatest(ProjectSlugs.VPExtensionManager),
  tooltipSingle: ttDownloadViaVPEM,
  hasManualVP13: true,
  hasManualVP14: true,
});

// Software

export const vpem: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.VPExtensionManager,
  name: ProjectNames.VPExtensionManager,
  type: VPProjectType.Software,

  tag: '1.2.8',
  releaseDate: new Date('2025-03-12'),
  changes: ['Update "Install and UpdateNotes" button Enabled status, if the first GitHub release was finally found'],

  openInVPEM: true,
  openInVPEMLink: 'vpem://',
});

export const allProjectDetails: VPProjectDetails[] = [
  betterSearch,
  customFades,
  shortenExtendMedia,
  vpflow,
  vpconsole,
  vpem,
];
