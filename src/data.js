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
    href: 'https://github.com/RatinA0/ratina0.github.io',
  },
];

const socials = [
  {
    text: 'Twitch',
    ariaLabel: 'Twitch',
    icon: 'tabler:brand-twitch',
    href: 'https://www.twitch.tv/RatinA0',
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
    href: 'https://youtube.com/@RatinA0?sub_confirmation=1',
  },
  {
    text: 'Twitter',
    ariaLabel: 'Twitter',
    icon: 'tabler:brand-twitter',
    href: 'https://twitter.com/0RatinA0',
  },
  {
    text: 'Instagram',
    ariaLabel: 'Instagram',
    icon: 'tabler:brand-instagram',
    href: 'https://www.instagram.com/RatinA0',
  },
  {
    text: 'Github',
    ariaLabel: 'Github',
    icon: 'tabler:brand-github',
    href: 'https://github.com/RatinA0?tab=repositories',
  },
];

export const headerData = {
  links: [
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
