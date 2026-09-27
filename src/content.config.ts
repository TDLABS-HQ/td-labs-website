import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One file per project in src/content/case-studies/. The filename is the URL:
 * business-name.md → /work/business-name
 *
 * Frontmatter holds the at-a-glance facts shown on cards and in the overview.
 * The markdown body is the long-form story, written as `## The problem`,
 * `## Our approach`, and `## The build` sections (numbered automatically).
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: ({ image }) => {
    const shot = z.object({ src: image(), alt: z.string() });

    return z.object({
      /** "client" for paid client work; "concept" is labelled CONCEPT PROJECT everywhere. */
      kind: z.enum(['client', 'concept']),
      /** The one client project shown large on the home page. */
      featured: z.boolean().default(false),
      /** Business name (or concept name). Used as the page title. */
      client: z.string(),
      industry: z.string(),
      city: z.string().optional(),
      year: z.coerce.string(),
      /** One sentence each: shown on the card and in the overview. */
      problem: z.string(),
      built: z.string(),
      /** One concrete, true outcome. Qualitative is fine. */
      result: z.string(),
      stack: z.array(z.string()).default([]),
      /** Side-by-side hero screens. Omit to show [PLACEHOLDER] frames. */
      screens: z
        .object({ desktop: shot.optional(), mobile: shot.optional() })
        .default({}),
      gallery: z.array(shot.extend({ caption: z.string().optional() })).default([]),
      /** Lower numbers appear first. */
      order: z.number().default(100),
      /** Stand-in content: page is noindexed. */
      placeholder: z.boolean().default(false),
      /** Hidden from production builds. */
      draft: z.boolean().default(false),
    });
  },
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
