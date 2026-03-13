//import utilites from astro:content
import { defineCollection, z } from 'astro:content';

//define a schema
const projectCollection = defineCollection({
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(), 
		position: z.enum(["top", "middle", "bottom"]).default("bottom"),
		color: z.enum(["red", "blue", "black", "white", "yellow", "green"]).default("black"),
		year: z.number(),
		coverImage: z.object({
			url: z.string(),
			alt: z.string(),
			caption: z.string(),
		}).required(),
		support: z.object({
			url: z.string(),
			alt: z.string(),
		}).array().optional(),
		thanks: z.object({
			url: z.string(),
			alt: z.string(),
		}).array().optional(),
		videos: z.array(z.object({
			title: z.string(),
			url: z.string(),
			thumbnailUrl: z.string().optional(),
		})).optional(),
	})
})

//exporting the defined collections: 

export const collections = {
	'projects' : projectCollection,
}