import type { Props as HeaderProps } from '~/components/widgets/Header.astro';
import type { Props as FooterProps } from '~/components/widgets/Footer.astro';
import type { FeatureItem2, Link } from './types';
import { getPermalink, getProjectsPermalink } from './utils/permalinks';

const projects: Link[] = [
  {
    text: 'Vegas Pro Flow',
    href: getPermalink('/vegas-pro-flow'),
  },
  {
    text: 'Vegas Pro Data',
    href: getPermalink('/vegas-pro-data'),
  },
  {
    text: 'RatinFX VP library',
    href: getPermalink('/ratinfx-vp'),
  },
  {
    text: 'Shorten/Extend media',
    href: getPermalink('/shorten-extend-media'),
  },
  {
    text: 'Custom Fades',
    href: getPermalink('/custom-fades'),
  },
  {
    text: 'Github Pages',
    href: 'https://github.com/RatinFX/ratinfx.github.io',
  },
];

const socials: Link[] = [
  {
    text: 'Discord: RatinFX',
    ariaLabel: 'Discord: RatinFX',
    icon: 'tabler:brand-discord',
    href: 'https://discord.gg/3Quqz28',
  },
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

export const headerData: HeaderProps = {
  links: [
    {
      text: 'Experience',
      href: getPermalink('#experience'),
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
};

export const experience: Array<FeatureItem2> = [
  {
    icon: 'tabler:3d-cube-sphere',
    title: 'Unity Developer',
    timeFrame: '2022. September - Present',
    tags: ['Unity', 'C#', 'Firebase', 'TypeScript', 'Figma'],
    description:
      'I mostly worked on AR applications for Android and iOS using AR Foundation ' +
      'while cleaning, correcting, and fixing up older code.' +
      '<br/>' +
      '<br/>' +
      'For another project, I created a Firebase Backend system with live data handling ' +
      'and connected it with the proper Frontend components.' +
      '',
  },
  {
    icon: 'vscode-icons:file-type-vue',
    title: 'Full-stack Web Developer',
    timeFrame: '2021. May - 2022. September',
    tags: ['ASP.NET Core', 'C#', 'TypeScript', 'Vue.js 2', 'Vuetify', 'SQL'],
    description:
      'Used Vue.js 2 with TypeScript frontend and ASP.NET Core backend.' +
      '<br/>' +
      '<br/>' +
      'I worked on:' +
      '<br/>' +
      '- Recreating pages from their older application' +
      '<br/>' +
      '- MediatR event handling' +
      '<br/>' +
      '- SignalR live communication' +
      '<br/>' +
      '- Basic Cypress E2E testing' +
      '',
  },
  {
    icon: 'twemoji:red-circle',
    title: 'osu!',
    timeFrame: '2013 - Present',
    tags: ['osu!', 'Level design', 'Video game', 'C#'],
    description:
      '<a class="highlight-link" href="https://osu.ppy.sh/home">osu!</a> is a rhythm game. ' +
      '<br/>' +
      'Alongside becoming a former top #1000 player, I created many playable maps, ' +
      'some of which became officially featured content of the game.' +
      '<br/>' +
      '<br/>' +
      'I also started looking into and contributing to its open source version ' +
      "called <a class='highlight-link' href='https://github.com/ppy/osu'>osu!lazer</a>." +
      '',
    bottomLink: 'https://osu.ppy.sh/users/3436625',
    bottomLinkText: 'osu! profile',
  },
  {
    icon: 'logos:youtube-icon',
    title: 'Video Collaborations',
    timeFrame: '2016 - Present',
    tags: ['VEGAS Pro', 'After Effects', 'Premiere Pro', 'Photoshop'],
    description:
      'I have been involved in organizing and participating' +
      'in video collaborations with more than 25 individuals.' +
      '',
    bottomLink: 'https://www.youtube.com/playlist?list=PLbWOgfpY-MeAEQ-baK9VAi_c6KFlqaMye',
    bottomLinkText: 'Playlist of related videos',
  },
  {
    icon: 'flat-color-icons:home',
    title: 'Own projects',
    tags: ['Winforms', 'C#', 'WPF', 'VEGAS Pro', 'Astro'],
    description:
      'I mainly focused on creating VEGAS Pro extensions ' +
      "to help out and speed up my own, and my friends' work " +
      'while broadening my programming knowledge.' +
      '',
    bottomLink: 'https://github.com/RatinFX',
    bottomLinkText: 'Github repositories',
  },
];

export const footerData: FooterProps = {
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
