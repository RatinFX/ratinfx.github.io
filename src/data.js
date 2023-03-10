import { getPermalink, getProjectsPermalink } from './utils/permalinks';

const projects = [
  {
    text: 'Vegas Pro Flow',
    href: getPermalink('/vegas-pro-flow'),
  },
  {
    text: 'Vegas Pro Data',
    href: getPermalink('/vegas-pro-data'),
  },
  {
    text: 'Better Search',
    href: getPermalink('/better-search'),
  },
  {
    text: 'Custom Fades',
    href: getPermalink('/custom-fades'),
  },
  {
    text: 'Shorten/Extend media',
    href: getPermalink('/shorten-extend-media'),
  },
  {
    text: 'Github Pages',
    href: 'https://github.com/RatinFX/ratinfx.github.io',
  },
];

const socials = [
  {
    text: 'Twitch',
    ariaLabel: 'Twitch',
    icon: 'tabler:brand-twitch',
    href: 'https://www.twitch.tv/RatinFX',
  },
  {
    text: 'Main YouTube',
    ariaLabel: 'Main YouTube',
    icon: 'tabler:brand-youtube',
    href: 'https://youtube.com/@MartinFX?sub_confirmation=1',
  },
  {
    text: 'Second YouTube',
    ariaLabel: 'Second YouTube',
    icon: 'tabler:brand-youtube',
    href: 'https://youtube.com/@RatinFX?sub_confirmation=1',
  },
  {
    text: 'Twitter',
    ariaLabel: 'Twitter',
    icon: 'tabler:brand-twitter',
    href: 'https://twitter.com/RatinFX',
  },
  {
    text: 'Instagram',
    ariaLabel: 'Instagram',
    icon: 'tabler:brand-instagram',
    href: 'https://www.instagram.com/RatnFX',
  },
  {
    text: 'Github',
    ariaLabel: 'Github',
    icon: 'tabler:brand-github',
    href: 'https://github.com/RatinFX?tab=repositories',
  },
];

export const headerData = {
  links: [
    {
      text: 'Work experience',
      href: getPermalink('#work-experience'),
    },
    {
      text: 'Projects',
      href: getProjectsPermalink(),
      links: [...projects],
    },
    {
      text: 'Socials',
      links: [...socials],
    },
  ],
  socialLinks: [...socials],
};

export const workExperience = [
  {
    icon: 'tabler:3d-cube-sphere',
    title: 'Unity Developer',
    timeFrame: '2022. Sept - 2023.',
    tags: ['Unity', 'C#', 'Firebase & Functions', 'TypeScript', 'Figma'],
    description:
      'I worked on AR applications for Android and iOS using AR Foundation.<br/>' +
      'I created a Backend system with live data transfer and handling using Firebase for another project.' +
      '',
  },
  {
    icon: 'vscode-icons:file-type-vue',
    title: 'Full-stack Web Developer',
    timeFrame: '2021. May - 2022. Sept',
    tags: ['ASP.NET Core', 'C#', 'TypeScript', 'Vue.js 2', 'Vuetify', 'SQL'],
    description:
      'Using Vue.js 2 with TypeScript frontend and ASP.NET Core backend.<br/>' +
      '- MediatR event handling <br/>' +
      '- SignalR live communication <br/>' +
      '- Cypress E2E testing' +
      '',
  },
  {
    icon: 'logos:youtube-icon',
    title: 'Video Collaborations',
    timeFrame: '2016 - Present',
    tags: ['VEGAS Pro', 'After Effects', 'Premiere Pro', 'Photoshop'],
    description:
      'I have been involved in organizing and participating in video collaborations with more than 25 individuals.' +
      '',
    bottomLink: 'https://www.youtube.com/playlist?list=PLbWOgfpY-MeAEQ-baK9VAi_c6KFlqaMye',
    bottomLinkText: 'Playlist of related videos',
  },
  {
    icon: 'flat-color-icons:home',
    title: 'Own projects',
    tags: ['Winforms', 'C#', 'WPF', 'VEGAS Pro', 'Astro'],
    description:
      'I mainly focused on creating VEGAS Pro extensions to help out and speed up my own, and friends work.' + '',
  },
];

export const footerData = {
  links: [
    {
      title: 'Projects',
      links: [...projects],
    },
    {
      title: 'Socials',
      links: [...socials],
    },
  ],
};
