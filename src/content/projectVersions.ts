import type { ProjectVersion } from '~/types';

const betterSearch: ProjectVersion = {
  project: 'better-search',
  versions: [
    {
      release: '1.2.0.',
      releaseDate: new Date(),
      vp13link: '#',
      vp14link: '#',
      changes: [
        'Proin sollicitudin quam vitae ornare vulputate',
        'Mauris sit amet odio viverra, condimentum tellus non, rhoncus arcu',
      ],
    },
    {
      release: '1.0.0.',
      releaseDate: new Date(),
      vp13link: '#',
      vp14link: '#',
      changes: [
        'Quisque vel interdum nunc',
        'Cras eu fringilla leo, quis volutpat libero',
        'Praesent cursus sapien orci, et mattis quam vulputate eget',
        'Nam fermentum risus risus, eget placerat risus condimentum ut',
        'Nullam tristique elementum felis, nec fermentum velit venenatis ac',
        'Suspendisse ut ipsum finibus, efficitur neque quis, suscipit risus',
      ],
    },
  ],
};

const customFades: ProjectVersion = {
  project: 'custom-fades',
  versions: [
    {
      release: '1.2.0.',
      releaseDate: new Date(),
      vp13link: '#',
      vp14link: '#',
      changes: [],
    },
    {
      release: '0.6.0.',
      releaseDate: new Date(),
      vp13link: '#',
      vp14link: '#',
    },
  ],
};

const shortenExtendMedia: ProjectVersion = {
  project: 'shorten-extend-media',
  versions: [
    {
      release: '1.0.0.',
      releaseDate: new Date(),
      vp13link: '#',
      vp14link: '#',
    },
  ],
};

const vegasProData: ProjectVersion = {
  project: 'vegas-pro-data',
  versions: [
    {
      release: '1.3.0.',
      releaseDate: new Date(),
      vp13link: '#',
      vp14link: '#',
      changes: ['Suspendisse bibendum viverra urna, sit amet fringilla massa'],
    },
    {
      release: '0.6.0.',
      releaseDate: new Date(),
      vp13link: '#',
      vp14link: '#',
      changes: [
        'Maecenas eget ante feugiat, volutpat elit eu, lacinia leo',
        'Nullam porttitor condimentum ullamcorper',
        'Nulla facilisi',
      ],
    },
  ],
};

const vegasProFlow: ProjectVersion = {
  project: 'vegas-pro-flow',
  versions: [
    {
      release: '0.7.0.',
      releaseDate: new Date('2023-03-11'),
      vp13link: '#',
      vp14link: '#',
      changes: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Curabitur non justo et metus cursus eleifend',
        'Vivamus vitae nisl ex',
      ],
    },
    {
      release: '0.6.0.',
      releaseDate: new Date('2023-02-15'),
      vp13link: '#',
      vp14link: '#',
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
