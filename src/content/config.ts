//import utilites from astro:content
import { defineCollection, z } from 'astro:content';

//define a schema
const newsletterCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(), 
		image: z.string().optional(),
		draft: z.boolean(),
	})
})

//exporting the defined collections: 

export const collections = {
	'newsletter' : newsletterCollection,
}