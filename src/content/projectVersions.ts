import type { ProjectVersion } from '~/types';

const betterSearch: ProjectVersion = {
  project: 'better-search',
  versions: [
    {
      release: '1.3.0.',
      releaseDate: new Date('2023-03-12'),
      vp13link: '',
      vp14link: '',
    },
    {
      release: '1.2.1.',
      releaseDate: new Date('2023-02-26'),
      vp13link: 'https://github.com/RatinFX/BetterSearch/releases/download/1.2.1/BetterSearch13-1.2.1.zip',
      vp14link: 'https://github.com/RatinFX/BetterSearch/releases/download/1.2.1/BetterSearch14-1.2.1.zip',
    },
  ],
};

const customFades: ProjectVersion = {
  project: 'custom-fades',
  versions: [
    {
      release: '1.1.0.',
      releaseDate: new Date('2023-03-11'),
      vp13link: 'https://github.com/RatinFX/CustomFades/releases/download/1.1.0/CustomFades13.dll',
      vp14link: 'https://github.com/RatinFX/CustomFades/releases/download/1.1.0/CustomFades14.dll',
      changes: [
        'Added top row with a <b>Creator</b> and <b>About</b> tab',
        'Removed <b>Help</b> button and moved information to <b>About</b> ',
        'Fixed the whole project because it was not working',
      ],
    },
    {
      release: '1.0.0.',
      releaseDate: new Date('2023-01-22'),
      vp13link: 'https://github.com/RatinFX/CustomFades/releases/download/1.0.0/CustomFades13.dll',
      vp14link: 'https://github.com/RatinFX/CustomFades/releases/download/1.0.0/CustomFades14.dll',
    },
  ],
};

const shortenExtendMedia: ProjectVersion = {
  project: 'shorten-extend-media',
  versions: [
    {
      release: '1.1.0.',
      releaseDate: new Date('2023-03-12'),
      vp13link: 'https://github.com/RatinFX/ShortenExtendMedia/releases/download/1.1.0/ShortenExtendMedia13.dll',
      vp14link: 'https://github.com/RatinFX/ShortenExtendMedia/releases/download/1.1.0/ShortenExtendMedia14.dll',
      changes: [
        'Added top row with a <b>Creator</b> and <b>About</b> tab',
        'Removed <b>Help</b> button and moved information to <b>About</b> ',
      ],
    },
    {
      release: '1.0.0.',
      releaseDate: new Date('2023-01-22'),
      vp13link: 'https://github.com/RatinFX/ShortenExtendMedia/releases/download/1.0.0/ShortenExtendMedia13.dll',
      vp14link: 'https://github.com/RatinFX/ShortenExtendMedia/releases/download/1.0.0/ShortenExtendMedia14.dll',
    },
  ],
};

const vegasProData: ProjectVersion = {
  project: 'vegas-pro-data',
  versions: [
    {
      release: '1.1.0.',
      releaseDate: new Date('2023-03-12'),
      vp13link: '',
      vp14link: '',
    },
    {
      release: '0.6.0.',
      releaseDate: new Date(),
      vp13link: '',
      vp14link: '',
    },
  ],
};

const vegasProFlow: ProjectVersion = {
  project: 'vegas-pro-flow',
  versions: [
    {
      release: '1.0.0.',
      releaseDate: new Date('2023-03-12'),
      vp13link: '',
      vp14link: '',
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
