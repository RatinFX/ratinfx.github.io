import type { ProjectVersion } from '~/types';
import {
  betterSearchLink,
  customFadesLink,
  shortenExtendMediaLink,
  vpdata as vpdataLink,
  vpflowLink,
} from '~/utils/projectinfo';

const betterSearch: ProjectVersion = {
  project: 'better-search',
  versions: [
    {
      release: '1.4.3',
      releaseDate: new Date('2023-07-14'),
      vp13exe: betterSearchLink('1.4.3', '13', 'exe'),
      vp14exe: betterSearchLink('1.4.3', '14', 'exe'),
      vp13zip: betterSearchLink('1.4.3', '13', 'zip'),
      vp14zip: betterSearchLink('1.4.3', '14', 'zip'),
      changes: ['Fixed crashes on Vegas Pro 20.0 when the extension threw an error', 'Vegas Pro Data update'],
    },
    {
      release: '1.4.2',
      releaseDate: new Date('2023-05-15'),
      vp13exe: betterSearchLink('1.4.2', '13', 'exe'),
      vp14exe: betterSearchLink('1.4.2', '14', 'exe'),
      vp13zip: betterSearchLink('1.4.2', '13', 'zip'),
      vp14zip: betterSearchLink('1.4.2', '14', 'zip'),
      changes: ['Move from <b>Views</b> to <b>Tools - Extensions</b>'],
    },
    {
      release: '1.4.1',
      releaseDate: new Date('2023-05-14'),
      vp13exe: betterSearchLink('1.4.1', '13', 'exe'),
      vp14exe: betterSearchLink('1.4.1', '14', 'exe'),
      vp13zip: betterSearchLink('1.4.1', '13', 'zip'),
      vp14zip: betterSearchLink('1.4.1', '14', 'zip'),
      changes: [
        'Vegas Pro Data update',
        'Moved from <b>Views</b> to <b>Tools - Extensions</b>',
        'Added <b>Check for Update on Start</b> setting option',
        'Renamed <b>About</b> to <b>Help</b> and split it into <b>Check for Update</b> and <b>About</b>',
      ],
    },
    {
      release: '1.3.0',
      releaseDate: new Date('2023-03-12'),
      vp13zip: betterSearchLink('1.3.0', '13', 'zip'),
      vp14zip: betterSearchLink('1.3.0', '14', 'zip'),
      changes: ['Rebranding', 'Added <b>Creator</b> and <b>About</b> tab to the top row', 'VegasProData update'],
    },
    {
      release: '1.2.1',
      releaseDate: new Date('2023-02-26'),
      vp13zip: betterSearchLink('1.2.1', '13', 'zip'),
      vp14zip: betterSearchLink('1.2.1', '14', 'zip'),
    },
  ],
};

const customFades: ProjectVersion = {
  project: 'custom-fades',
  versions: [
    {
      release: '1.1.0',
      releaseDate: new Date('2023-03-11'),
      vp13zip: customFadesLink('1.1.0', '13'),
      vp14zip: customFadesLink('1.1.0', '14'),
      changes: [
        'Added top row with a <b>Creator</b> and <b>About</b> tab',
        'Removed <b>Help</b> button and moved information to <b>About</b> ',
        'Fixed the whole project because it was not working',
      ],
    },
    {
      release: '1.0.0',
      releaseDate: new Date('2023-01-22'),
      vp13zip: customFadesLink('1.0.0', '13'),
      vp14zip: customFadesLink('1.0.0', '14'),
    },
  ],
};

const shortenExtendMedia: ProjectVersion = {
  project: 'shorten-extend-media',
  versions: [
    {
      release: '1.1.0',
      releaseDate: new Date('2023-03-12'),
      vp13zip: shortenExtendMediaLink('1.1.0', '13'),
      vp14zip: shortenExtendMediaLink('1.1.0', '14'),
      changes: [
        'Added top row with a <b>Creator</b> and <b>About</b> tab',
        'Removed <b>Help</b> button and moved information to <b>About</b> ',
      ],
    },
    {
      release: '1.0.0',
      releaseDate: new Date('2023-01-22'),
      vp13zip: shortenExtendMediaLink('1.0.0', '13'),
      vp14zip: shortenExtendMediaLink('1.0.0', '14'),
    },
  ],
};

const vegasProData: ProjectVersion = {
  project: 'vegas-pro-data',
  versions: [
    {
      release: '1.4.2',
      releaseDate: new Date('2023-07-14'),
      vp13zip: vpdataLink('1.4.2', '13'),
      vp14zip: vpdataLink('1.4.2', '14'),
      changes: ['Fixed crashes on Vegas Pro 20.0 when the extension threw an error'],
    },
    {
      release: '1.4.1',
      releaseDate: new Date('2023-05-14'),
      vp13zip: vpdataLink('1.4.1', '13'),
      vp14zip: vpdataLink('1.4.1', '14'),
      changes: ['VegasProFlow update'],
    },
    {
      release: '1.3.0',
      releaseDate: new Date('2023-03-12'),
      vp13zip: vpdataLink('1.3.0', '13'),
      vp14zip: vpdataLink('1.3.0', '14'),
      changes: ['Rebranding update', 'Added Custom Colors class', 'Added fileName to FavoriteConfig constructor'],
    },
    {
      release: '1.2.0',
      releaseDate: new Date('2023-02-18'),
      vp13zip: vpdataLink('1.2.0', '13'),
      vp14zip: vpdataLink('1.2.0', '14'),
    },
  ],
};

const vegasProFlow: ProjectVersion = {
  project: 'vegas-pro-flow',
  versions: [
    {
      release: '1.4.7',
      releaseDate: new Date('2023-11-17'),
      vp14exe: vpflowLink('1.4.7', '14', 'exe'),
      vp14zip: vpflowLink('1.4.7', '14', 'zip'),
      changes: [
        'Fixed display issues with the yellow handler circle',
        'Added version number to the Undocked Window',
        '!! Only releasing for VP14 as I cannot test VP13 or below',
      ],
    },
    {
      release: '1.4.6',
      releaseDate: new Date('2023-11-13'),
      vp14exe: vpflowLink('1.4.6', '14', 'exe'),
      vp14zip: vpflowLink('1.4.6', '14', 'zip'),
      changes: [
        'Fixed an issue with Pan/Crop where it threw and error when the Rotation Center did not change during the animation',
        '!! Only releasing for VP14 as I cannot test VP13 or below',
      ],
    },
    {
      release: '1.4.5',
      releaseDate: new Date('2023-11-02'),
      vp14exe: vpflowLink('1.4.5', '14', 'exe'),
      vp14zip: vpflowLink('1.4.5', '14', 'zip'),
      changes: [
        'Fixed an issue with Pan/Crop where the Rotation Center was set to 0 during the animated frames regardless of its given value',
        '!! Only releasing for VP14 as I cannot test VP13 or below',
      ],
    },
    {
      release: '1.4.4',
      releaseDate: new Date('2023-07-14'),
      vp13exe: vpflowLink('1.4.4', '13', 'exe'),
      vp14exe: vpflowLink('1.4.4', '14', 'exe'),
      vp13zip: vpflowLink('1.4.4', '13', 'zip'),
      vp14zip: vpflowLink('1.4.4', '14', 'zip'),
      changes: [
        'Fixed an issue with Pan/Crop where the Rotation was set to 0 during the animated frames regardless of its given value',
        'Fixed crashes on Vegas Pro 20.0 when the extension threw an error',
      ],
    },
    {
      release: '1.4.3',
      releaseDate: new Date('2023-05-15'),
      vp13exe: vpflowLink('1.4.3', '13', 'exe'),
      vp14exe: vpflowLink('1.4.3', '14', 'exe'),
      vp13zip: vpflowLink('1.4.3', '13', 'zip'),
      vp14zip: vpflowLink('1.4.3', '14', 'zip'),
      changes: ['Fixed more <b>Fade in/out Transition Progress Envelope</b> issues'],
    },
    {
      release: '1.4.2',
      releaseDate: new Date('2023-05-14'),
      vp13exe: vpflowLink('1.4.2', '13', 'exe'),
      vp14exe: vpflowLink('1.4.2', '14', 'exe'),
      vp13zip: vpflowLink('1.4.2', '13', 'zip'),
      vp14zip: vpflowLink('1.4.2', '14', 'zip'),
      changes: [
        'Removed <b>Mute</b> from supported Track Envelopes',
        'Fixed various <b>Fade in/out Transition Progress Envelope</b> issues',
      ],
    },
    {
      release: '1.4.1',
      releaseDate: new Date('2023-05-14'),
      vp13exe: vpflowLink('1.4.1', '13', 'exe'),
      vp14exe: vpflowLink('1.4.1', '14', 'exe'),
      vp13zip: vpflowLink('1.4.1', '13', 'zip'),
      vp14zip: vpflowLink('1.4.1', '14', 'zip'),
      changes: [
        'Changed versioning',
        'Moved from <b>Views</b> to <b>Tools - Extensions</b>',
        'Renamed <b>Track Pan/Crop</b> to <b>Track Motion</b>',
        'Added support for <b>Parent Track Motion</b>, <b>Parent Track Glow</b> and <b>Parent Track Shadow</b>',
        'Added support for <b>Track Envelopes</b>: Mute, Composite level, Fade to color',
        'Added support for <b>Event Envelopes</b>: (Fade in & Fade out) Transition Progress, Velocity',
        '<b>Check for Updates on Start</b> is enabled by default on the first start',
        'Display all selectable Track, Event, and Envelope options by default',
      ],
    },
    {
      release: '1.0.3',
      releaseDate: new Date('2023-03-29'),
      vp13zip: vpflowLink('1.0.3', '13', 'zip'),
      vp14zip: vpflowLink('1.0.3', '14', 'zip'),
      changes: [
        'Fixed multiple issues with Adding new Custom Curves',
        'Added a warning for Track Motion animating, make sure you <b>close the window</b> before applying curves!',
        'Slightly increased the size of the curve name boxes',
      ],
    },
    {
      release: '1.0.2',
      releaseDate: new Date('2023-03-29'),
      vp13zip: vpflowLink('1.0.2', '13', 'zip'),
      vp14zip: vpflowLink('1.0.2', '14', 'zip'),
      changes: [
        'Added <b>Settings option</b> to toggle "Check for Updates on Start"',
        'Refactored the <b>About tab</b>',
      ],
    },
    {
      release: '1.0.1',
      releaseDate: new Date('2023-03-18'),
      vp13zip: vpflowLink('1.0.1', '13', 'zip'),
      vp14zip: vpflowLink('1.0.1', '14', 'zip'),
      changes: [
        'Added <b>Settings option</b> to toggle "Show Support view on Start"',
        'Extended the description on the About tab',
      ],
    },
    {
      release: '1.0.0',
      releaseDate: new Date('2023-03-16'),
      vp13zip: vpflowLink('1.0.0', '13', 'zip'),
      vp14zip: vpflowLink('1.0.0', '14', 'zip'),
    },
  ],
};

export const projectVersions: ProjectVersion[] = [
  betterSearch,
  customFades,
  shortenExtendMedia,
  vegasProData,
  vegasProFlow,
];
