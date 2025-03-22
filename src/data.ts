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
    href: 'https://youtube.com/@RatinFX?sub_confirmation=1',
  },
  {
    text: 'Second YouTube',
    ariaLabel: 'Second YouTube',
    icon: 'tabler:brand-youtube',
    href: 'https://youtube.com/@RatinFX2?sub_confirmation=1',
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
    icon: 'flat-color-icons:home',
    title: 'Own projects',
    timeFrame: '2013 - Present',
    tags: ['C#', 'WinForms', 'WPF', 'VEGAS Pro', 'Astro'],
    description:
      'Nowadays, I mainly focus on creating VEGAS Pro Extensions ' +
      "to help out and speed up my own, and my friends' work " +
      'while broadening my programming knowledge.' +
      '',
    bottomLink: 'https://github.com/RatinFX',
    bottomLinkText: 'GitHub repositories',
  },
  {
    icon: 'logos:youtube-icon',
    title: 'YouTube',
    timeFrame: '2016 - Present',
    tags: ['VEGAS Pro', 'After Effects', 'Premiere Pro', 'Photoshop'],
    description:
      'I began creating some videos back in 2009 ' +
      '- sadly, my earlier videos are lost to time.' +
      '</br>' +
      '</br>' +
      'Video collaborations:' +
      '</br>' +
      '- organized and participated in many projects, mostly with friends or smaller communities,' +
      '</br>' +
      '- at times, coordinated our efforts with over 25 individuals at the same time.' +
      '',
    bottomLink: 'https://www.youtube.com/playlist?list=PLbWOgfpY-MeAEQ-baK9VAi_c6KFlqaMye',
    bottomLinkText: 'Playlist of related videos',
  },
  {
    icon: 'twemoji:red-circle',
    title: 'osu!',
    timeFrame: '2013 - Present',
    tags: ['Video game', 'Level design', 'C#'],
    description:
      '<a class="highlight-link" href="https://osu.ppy.sh/home">osu!</a> is a rhythm game. ' +
      '<br/>' +
      'Alongside becoming a former top #1000 player, I created many playable levels (beatmaps), ' +
      'some of which became "officially featured content" of the game.' +
      '<br/>' +
      '<br/>' +
      'I also looked into and contributed to its open source version ' +
      "called <a class='highlight-link' href='https://github.com/ppy/osu'>osu!lazer</a>." +
      '',
    bottomLink: 'https://osu.ppy.sh/users/3436625',
    bottomLinkText: 'osu! profile',
  },
  {
    icon: 'vscode-icons:file-type-vue',
    title: 'Full-stack Web Developer',
    timeFrame: '2021 - 2022',
    tags: ['C#', 'ASP.NET Core', 'TypeScript', 'Vue.js', 'SQL'],
    description:
      'I worked on many things but mostly:' +
      '<br/>' +
      '- Recreated older app pages on the web,' +
      '<br/>' +
      '- Maintained <b>Database compatibility</b> between different apps,' +
      '<br/>' +
      '- Handled events via <b>MediatR</b> and <b>SignalR</b>,' +
      '<br/>' +
      '- Automatization with Windows <b>TaskScheduler</b>,' +
      '<br/>' +
      '- <b>Kept tools up to date</b> to speed up workflows.' +
      '',
  },
  {
    icon: 'tabler:3d-cube-sphere',
    title: 'Unity Developer',
    timeFrame: '2022 - 2023',
    tags: ['C#', 'Unity', 'TypeScript', 'Firebase', 'Figma'],
    description:
      'I mostly worked on <b>AR applications</b> for Android and iOS using <b>AR Foundation</b> ' +
      'while cleaning, correcting, and fixing up older code.' +
      '<br/>' +
      '<br/>' +
      'For another project, I created a <b>Firebase Backend</b> system with live data handling ' +
      'and connected it to the proper <b>Unity Frontend</b> components.' +
      '',
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
