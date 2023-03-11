import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Project } from '~/types';
import { cleanSlug, trimSlash, PROJECT_PERMALINK_PATTERN } from './permalinks';
import { projectVersions } from '~/content/projectVersions';

const generatePermalink = async ({ id, slug, publishDate, category }: any) => {
  const year = String(publishDate.getFullYear()).padStart(4, '0');
  const month = String(publishDate.getMonth() + 1).padStart(2, '0');
  const day = String(publishDate.getDate()).padStart(2, '0');
  const hour = String(publishDate.getHours()).padStart(2, '0');
  const minute = String(publishDate.getMinutes()).padStart(2, '0');
  const second = String(publishDate.getSeconds()).padStart(2, '0');

  const permalink = PROJECT_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%category%', category || '')
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedProject = async (project: CollectionEntry<'project'>): Promise<Project> => {
  const { id, slug: rawSlug = '', data } = project;
  const { Content } = await project.render();

  const {
    tags: rawTags = [],
    category: rawCategory,
    author = 'RatinFX',
    publishDate: rawPublishDate = new Date(),
    ...rest
  } = data;

  const slug = cleanSlug(rawSlug.split('/').pop());
  const publishDate = new Date(rawPublishDate);
  const category = rawCategory ? cleanSlug(rawCategory) : undefined;
  const tags = rawTags.map((tag: string) => cleanSlug(tag));
  const versions = projectVersions.find((x) => x.project == slug);

  return {
    id: id,
    slug: slug,

    publishDate: publishDate,
    category: category,
    tags: tags,
    author: author,

    ...rest,

    Content: Content,
    // or 'body' in case you consume from API

    permalink: await generatePermalink({ id, slug, publishDate, category }),
    versions: versions?.versions.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime()),
  };
};

const loadProjects = async function (): Promise<Array<Project>> {
  const projects = await getCollection('project');
  const normalizedProjects = projects.map(async (project) => await getNormalizedProject(project));

  const results = (await Promise.all(normalizedProjects))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((project) => !project.draft);

  return results;
};

let _projects: Array<Project>;

/** */
export const fetchProjects = async (): Promise<Array<Project>> => {
  if (!_projects) {
    _projects = await loadProjects();
  }

  return _projects;
};

/** */
export const findProjectsBySlugs = async (slugs: Array<string>): Promise<Array<Project>> => {
  if (!Array.isArray(slugs)) return [];

  const projects = await fetchProjects();

  return slugs.reduce(function (r: Array<Project>, slug: string) {
    projects.some(function (project: Project) {
      return slug === project.slug && r.push(project);
    });
    return r;
  }, []);
};

/** */
export const findProjectsByIds = async (ids: Array<string>): Promise<Array<Project>> => {
  if (!Array.isArray(ids)) return [];

  const projects = await fetchProjects();

  return ids.reduce(function (r: Array<Project>, id: string) {
    projects.some(function (project: Project) {
      return id === project.id && r.push(project);
    });
    return r;
  }, []);
};

/** */
export const findLatestProjects = async ({ count }: { count?: number }): Promise<Array<Project>> => {
  const _count = count || 4;
  const projects = await fetchProjects();

  return projects ? projects.slice(0, _count) : [];
};
