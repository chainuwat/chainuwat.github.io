import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const metadata = z.object({
 title: z.string(), description: z.string().default(''), lang: z.enum(['th','en']).default('th'),
 date: z.coerce.date().optional(), publishedAt: z.coerce.date().optional(),
 image: z.string().optional(), draft: z.boolean().default(false),
 translationKey: z.string().optional(), tags: z.array(z.string()).default([]),
}).refine(data => data.date || data.publishedAt, {message:'Add date: YYYY-MM-DD'});
export const collections = {
 insights: defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/insights'}),schema:metadata}),
 work: defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/work'}),schema:metadata}),
};
