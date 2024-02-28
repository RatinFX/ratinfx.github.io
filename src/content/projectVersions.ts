import { ProjectNames, ProjectSlugs, VPProjectType } from '~/enums';
import { VPProjectDetails } from '~/types';
import { linkToProjectLatest } from '~/utils/projectinfo';

/**
 * Discontinued extension
 */
const betterSearch: VPProjectDetails = new VPProjectDetails({
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

const customFades: VPProjectDetails = new VPProjectDetails({
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

  singlePrimary: () => linkToProjectLatest('vpem'),
  tooltipSingle: 'VEGAS Pro Extension Manager',
  hasManualVP13: true,
  hasManualVP14: true,
});

const shortenExtendMedia: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.ShortenExtendMedia,
  name: ProjectNames.ShortenExtendMedia,
  type: VPProjectType.Script,

  tag: '1.1.0',
  releaseDate: new Date('2023-03-12'),
  changes: [
    'Added top row with a <b>Creator</b> and <b>About</b> tab',
    'Removed <b>Help</b> button and moved information to <b>About</b> ',
  ],

  singlePrimary: () => linkToProjectLatest('vpem'),
  tooltipSingle: 'VEGAS Pro Extension Manager',
  hasManualVP13: true,
  hasManualVP14: true,
});

// Extensions

const vegasProFlow: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.VPFlow,
  name: ProjectNames.VPFlow,
  type: VPProjectType.Extension,

  tag: '1.5.4',
  releaseDate: new Date('2024-02-04'),
  changes: ['Fixed update check issues'],

  singlePrimary: () => linkToProjectLatest('vpem'),
  tooltipSingle: 'VEGAS Pro Extension Manager',
  hasManualVP14: true,
});

// Software

const vpem: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.VPExtensionManager,
  name: ProjectNames.VPExtensionManager,
  type: VPProjectType.Software,

  tag: '1.1.0',
  releaseDate: new Date('2024-02-27'),
  changes: [
    'Added "Update Notes" button to Extensions',
    'Added click Action to Notifications',
    'Changed Latest Version check related displays',
  ],
});

export const allProjectDetails: VPProjectDetails[] = [
  betterSearch,
  customFades,
  shortenExtendMedia,
  vegasProFlow,
  vpem,
];
