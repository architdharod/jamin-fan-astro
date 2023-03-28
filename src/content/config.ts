//import utilites from astro:content
import { defineCollection, z } from 'astro:content';

//define a schema
const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(), 
		position: z.enum(["top", "middle", "bottom"]).default("bottom"),
		color: z.enum(["red", "blue", "black"]).default("black"),
		year: z.number(),
		coverImage: z.object({
			url: z.string(),
			alt: z.string(),
		}).required(),
		images: z.array(
			z.object({
				url: z.string(),
				alt: z.string(),
				caption: z.string(),
			}).optional(),
		)
	})
})

//exporting the defined collections: 

export const collections = {
	'projects' : projectCollection,
}