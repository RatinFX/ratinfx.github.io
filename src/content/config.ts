import { z, defineCollection } from 'astro:content';

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    github: z.string().optional(),

    image: z.string().optional(),
    video: z.string().optional(),

    publishDate: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),

    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  project: project,
};
