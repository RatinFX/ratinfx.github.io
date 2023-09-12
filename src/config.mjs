import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Home',

  origin: 'https://ratinfx.github.com',
  basePathname: '/',
  trailingSlash: false,

  title: 'Portfolio',
  description: 'Software developer, beginner animator and YouTube creator',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'CET',
  }),

  projects: {
    disabled: false,
    itemPerPage: 5,

    project: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'projects', // Projects main path /projects
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, projects: undefined };
export const PROJECTS = CONFIG.projects;
export const DATE_FORMATTER = CONFIG.dateFormatter;
