import { vpflow, vpem, vpconsole, customFades, shortenExtendMedia } from './content/projectVersions';
import type { FeatureItem2, FooterProps, HeaderProps, Link } from './types';
import { getPermalink, getProjectsPermalink } from './utils/permalinks';

const projects: Link[] = [
  {
    text: vpem.displayName,
    href: getPermalink('/' + vpem.slug),
  },
  {
    text: vpconsole.displayName,
    href: getPermalink('/' + vpconsole.slug),
  },
  {
    text: vpflow.displayName,
    href: getPermalink('/' + vpflow.slug),
  },
  {
    text: shortenExtendMedia.displayName,
    href: getPermalink('/' + shortenExtendMedia.slug),
  },
  {
    text: customFades.displayName,
    href: getPermalink('/' + customFades.slug),
  },
  {
    text: 'GitHub Pages',
    href: 'https://github.com/RatinFX/ratinfx.github.io',
  },
];

const socials: Link[] = [
  {
    text: 'Discord server',
    ariaLabel: 'Discord server',
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
    text: 'GitHub',
    ariaLabel: 'GitHub',
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
      'I also created a Firebase Backend system with live data handling ' +
      'and connected it with the proper Frontend components for another project.' +
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
    icon: 'flat-color-icons:home',
    title: 'Own projects',
    tags: ['C#', 'WinForms', 'WPF', 'VEGAS Pro', 'Astro'],
    description:
      'I mainly focused on creating VEGAS Pro Extensions ' +
      "to help out and speed up my own, and my friends' work " +
      'while broadening my programming knowledge.' +
      '',
    bottomLink: 'https://github.com/RatinFX',
    bottomLinkText: 'GitHub repositories',
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
