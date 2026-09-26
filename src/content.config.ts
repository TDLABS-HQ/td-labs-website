import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      /** One or two sentences for the card. */
      summary: z.string(),
      /** e.g. "Website", "Business system", "Custom software" */
      services: z.array(z.string()).default([]),
      year: z.number().int(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      url: z.url().optional(),
      /** Lower numbers appear first. */
      order: z.number().default(100),
      /** Marks entries that are stand-ins for real work. */
      placeholder: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    order: z.number().default(100),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { caseStudies, faqs };
