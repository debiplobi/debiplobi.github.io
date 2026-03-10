import { defineCollection, z } from 'astro:content';

const blogsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
    }),
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        year: z.number(),
    }),
});

export const collections = {
    'blogs': blogsCollection,
    'projects': projectsCollection,
};
