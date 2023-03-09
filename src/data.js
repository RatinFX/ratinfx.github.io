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

export const headerData = {
  links: [
    {
      text: 'Projects',
      href: getProjectsPermalink(),
      links: [...projects],
    },
    {
      text: 'Socials',
      links: [
        {
          text: 'Twitch',
          href: 'https://www.twitch.tv/RatinA0',
        },
        {
          text: 'Main YouTube',
          href: 'https://youtube.com/@MartinFX',
        },
        {
          text: 'Second YouTube',
          href: 'https://youtube.com/@RatinA0',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/0RatinA0',
        },
        {
          text: 'Instagram',
          href: 'https://www.instagram.com/RatinA0',
        },
        {
          text: 'Github',
          href: 'https://github.com/RatinA0',
        },
      ],
    },
  ],
  socialLinks: [
    {
      ariaLabel: 'Twitch',
      icon: 'tabler:brand-twitch',
      href: 'https://www.twitch.tv/RatinA0',
    },
    {
      ariaLabel: 'Main YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://youtube.com/@MartinFX',
    },
    {
      ariaLabel: 'Second YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://youtube.com/@RatinA0',
    },
    {
      ariaLabel: 'Twitter',
      icon: 'tabler:brand-twitter',
      href: 'https://twitter.com/0RatinA0',
    },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/RatinA0',
    },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/RatinA0',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Projects',
      links: [...projects],
    },
    {
      title: 'Socials',
      links: [
        {
          text: 'Twitch',
          href: 'https://www.twitch.tv/RatinA0',
        },
        {
          text: 'Main YouTube',
          href: 'https://youtube.com/@MartinFX',
        },
        {
          text: 'Second YouTube',
          href: 'https://youtube.com/@RatinA0',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/0RatinA0',
        },
        {
          text: 'Instagram',
          href: 'https://www.instagram.com/RatinA0',
        },
        {
          text: 'Github',
          href: 'https://github.com/RatinA0',
        },
      ],
    },
  ],
};
