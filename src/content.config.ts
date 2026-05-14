import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			heroImage: image().optional(),
		}),
});

const projectsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		year: z.number(),
	}),
});

export const collections = {
	blogs: blogsCollection,
	projects: projectsCollection,
};
