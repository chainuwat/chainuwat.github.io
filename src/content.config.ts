import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const metadata = z.object({
  title: z.string(), description: z.string(), lang: z.enum(['th','en']),
  translationKey: z.string(), pillar: z.enum(['strategy','leadership','execution','ai']),
  format: z.enum(['insight','guide','case-study','research']),
  tags: z.array(z.string()).default([]), publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(), draft: z.boolean().default(false),
  featured: z.boolean().default(false), related: z.array(z.string()).default([]),
});
const insights = defineCollection({ loader: glob({pattern:'**/*.md',base:'./src/content/insights'}), schema:metadata });
const work = defineCollection({ loader: glob({pattern:'**/*.md',base:'./src/content/work'}), schema:metadata });
export const collections = { insights, work };
