import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseStudy = CollectionEntry<'caseStudies'>;

/** All case studies, drafts excluded in production, sorted by `order`. */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const entries = await getCollection('caseStudies', ({ data }) => !(import.meta.env.PROD && data.draft));
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** "INDUSTRY · CITY · YEAR" */
export function metaLine({ industry, city, year }: CaseStudy['data']): string {
  return [industry, city, year].filter(Boolean).join(' · ');
}

export const caseStudyUrl = (entry: CaseStudy) => `/work/${entry.id}/`;
