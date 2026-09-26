// Single source of truth for brand facts used in meta tags and JSON-LD.
// Anything marked [PLACEHOLDER] is missing real content — do not ship as-is.

export const site = {
  name: 'TD Labs',
  legalName: 'Technology & Design Labs',
  tagline: 'Where technology meets thoughtful design.',
  // [PLACEHOLDER] Draft meta description assembled from the brief — replace with approved copy.
  description:
    'TD Labs designs and builds websites, business systems, and custom software for startups and small businesses.',
  founder: 'Jericho Bantiquete',
  // [PLACEHOLDER] Next open booking month, shown in the navbar status line. Update monthly.
  bookingMonth: 'November 2026',
  country: 'PH',
  locale: 'en_PH',
  ogImage: '/og-default.png',
  ogImageAlt: 'TD Labs — Where technology meets thoughtful design.',
  // [PLACEHOLDER] Add real contact email and social profile URLs.
  email: null as string | null,
  sameAs: [] as string[],
} as const;
