import type { ProjectVersion } from '~/types';

const betterSearch: ProjectVersion = {
  project: 'better-search',
  versions: [
    {
      release: '1.4.2',
      releaseDate: new Date('2023-05-15'),
      vp13exe: 'https://github.com/RatinFX/BetterSearch/releases/download/1.4.2/BetterSearch13-1.4.2.exe',
      vp14exe: 'https://github.com/RatinFX/BetterSearch/releases/download/1.4.2/BetterSearch14-1.4.2.exe',
      vp13zip: 'https://github.com/RatinFX/BetterSearch/releases/download/1.4.2/BetterSearch13-1.4.2.zip',
      vp14zip: 'https://github.com/RatinFX/BetterSearch/releases/download/1.4.2/BetterSearch14-1.4.2.zip',
      changes: ['Move from <b>Views</b> to <b>Tools - Extensions</b>'],
    },
    {
      release: '1.4.1',
      releaseDate: new Date('2023-05-14'),
      vp13exe: 'https://github.com/RatinFX/BetterSearch/releases/download/1.4.1/BetterSearch13-1.4.1.exe',
      vp14exe: 'https://github.com/RatinFX/BetterSearch/releases/download/1.4.1/BetterSearch14-1.4.1.exe',
      vp13zip: 'https://github.com/RatinFX/BetterSearch/releases/download/1.4.1/BetterSearch13-1.4.1.zip',
      vp14zip: 'https://github.com/RatinFX/BetterSearch/releases/download/1.4.1/BetterSearch14-1.4.1.zip',
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
      vp13zip: 'https://github.com/RatinFX/BetterSearch/releases/download/1.3.0/BetterSearch13-1.3.0.zip',
      vp14zip: 'https://github.com/RatinFX/BetterSearch/releases/download/1.3.0/BetterSearch14-1.3.0.zip',
      changes: ['Rebranding', 'Added <b>Creator</b> and <b>About</b> tab to the top row', 'VegasProData update'],
    },
    {
      release: '1.2.1',
      releaseDate: new Date('2023-02-26'),
      vp13zip: 'https://github.com/RatinFX/BetterSearch/releases/download/1.2.1/BetterSearch13-1.2.1.zip',
      vp14zip: 'https://github.com/RatinFX/BetterSearch/releases/download/1.2.1/BetterSearch14-1.2.1.zip',
    },
  ],
};

const customFades: ProjectVersion = {
  project: 'custom-fades',
  versions: [
    {
      release: '1.1.0',
      releaseDate: new Date('2023-03-11'),
      vp13zip: 'https://github.com/RatinFX/CustomFades/releases/download/1.1.0/CustomFades13.dll',
      vp14zip: 'https://github.com/RatinFX/CustomFades/releases/download/1.1.0/CustomFades14.dll',
      changes: [
        'Added top row with a <b>Creator</b> and <b>About</b> tab',
        'Removed <b>Help</b> button and moved information to <b>About</b> ',
        'Fixed the whole project because it was not working',
      ],
    },
    {
      release: '1.0.0',
      releaseDate: new Date('2023-01-22'),
      vp13zip: 'https://github.com/RatinFX/CustomFades/releases/download/1.0.0/CustomFades13.dll',
      vp14zip: 'https://github.com/RatinFX/CustomFades/releases/download/1.0.0/CustomFades14.dll',
    },
  ],
};

const shortenExtendMedia: ProjectVersion = {
  project: 'shorten-extend-media',
  versions: [
    {
      release: '1.1.0',
      releaseDate: new Date('2023-03-12'),
      vp13zip: 'https://github.com/RatinFX/ShortenExtendMedia/releases/download/1.1.0/ShortenExtendMedia13.dll',
      vp14zip: 'https://github.com/RatinFX/ShortenExtendMedia/releases/download/1.1.0/ShortenExtendMedia14.dll',
      changes: [
        'Added top row with a <b>Creator</b> and <b>About</b> tab',
        'Removed <b>Help</b> button and moved information to <b>About</b> ',
      ],
    },
    {
      release: '1.0.0',
      releaseDate: new Date('2023-01-22'),
      vp13zip: 'https://github.com/RatinFX/ShortenExtendMedia/releases/download/1.0.0/ShortenExtendMedia13.dll',
      vp14zip: 'https://github.com/RatinFX/ShortenExtendMedia/releases/download/1.0.0/ShortenExtendMedia14.dll',
    },
  ],
};

const vegasProData: ProjectVersion = {
  project: 'vegas-pro-data',
  versions: [
    {
      release: '1.4.1',
      releaseDate: new Date('2023-05-14'),
      vp13zip: 'https://github.com/RatinFX/VegasProData/releases/download/1.4.1/VegasProData13-1.4.1.zip',
      vp14zip: 'https://github.com/RatinFX/VegasProData/releases/download/1.4.1/VegasProData14-1.4.1.zip',
      changes: ['VegasProFlow update'],
    },
    {
      release: '1.3.0',
      releaseDate: new Date('2023-03-12'),
      vp13zip: 'https://github.com/RatinFX/VegasProData/releases/download/1.3.0/VegasProData13-1.3.0.zip',
      vp14zip: 'https://github.com/RatinFX/VegasProData/releases/download/1.3.0/VegasProData14-1.3.0.zip',
      changes: ['Rebranding update', 'Added Custom Colors class', 'Added fileName to FavoriteConfig constructor'],
    },
    {
      release: '1.2.0',
      releaseDate: new Date('2023-02-18'),
      vp13zip: 'https://github.com/RatinFX/VegasProData/releases/download/1.2.0/VegasProData13-1.2.0.zip',
      vp14zip: 'https://github.com/RatinFX/VegasProData/releases/download/1.2.0/VegasProData14-1.2.0.zip',
    },
  ],
};

const vegasProFlow: ProjectVersion = {
  project: 'vegas-pro-flow',
  versions: [
    {
      release: '1.4.2',
      releaseDate: new Date('2023-05-14'),
      vp13exe: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.4.2/VegasProFlow13-1.4.2.exe',
      vp14exe: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.4.2/VegasProFlow14-1.4.2.exe',
      vp13zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.4.2/VegasProFlow13-1.4.2.zip',
      vp14zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.4.2/VegasProFlow14-1.4.2.zip',
      changes: [
        'Removed <b>Mute</b> from supported Track Envelopes',
        'Fixed various <b>Fade in/out Transition Progress Envelope</b> issues',
      ],
    },
    {
      release: '1.4.1',
      releaseDate: new Date('2023-05-14'),
      vp13exe: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.4.1/VegasProFlow13-1.4.1.exe',
      vp14exe: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.4.1/VegasProFlow14-1.4.1.exe',
      vp13zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.4.1/VegasProFlow13-1.4.1.zip',
      vp14zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.4.1/VegasProFlow14-1.4.1.zip',
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
      vp13zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.0.3/VegasProFlow13-1.0.3.zip',
      vp14zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.0.3/VegasProFlow14-1.0.3.zip',
      changes: [
        'Fixed multiple issues with Adding new Custom Curves',
        'Added a warning for Track Motion animating, make sure you <b>close the window</b> before applying curves!',
        'Slightly increased the size of the curve name boxes',
      ],
    },
    {
      release: '1.0.2',
      releaseDate: new Date('2023-03-29'),
      vp13zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.0.2/VegasProFlow13-1.0.2.zip',
      vp14zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.0.2/VegasProFlow14-1.0.2.zip',
      changes: [
        'Added <b>Settings option</b> to toggle "Check for Updates on Start"',
        'Refactored the <b>About tab</b>',
      ],
    },
    {
      release: '1.0.1',
      releaseDate: new Date('2023-03-18'),
      vp13zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.0.1/VegasProFlow13-1.0.1.zip',
      vp14zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.0.1/VegasProFlow14-1.0.1.zip',
      changes: [
        'Added <b>Settings option</b> to toggle "Show Support view on Start"',
        'Extended the description on the About tab',
      ],
    },
    {
      release: '1.0.0',
      releaseDate: new Date('2023-03-16'),
      vp13zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.0.0/VegasProFlow13-1.0.0.zip',
      vp14zip: 'https://github.com/RatinFX/VegasProFlow/releases/download/1.0.0/VegasProFlow14-1.0.0.zip',
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
