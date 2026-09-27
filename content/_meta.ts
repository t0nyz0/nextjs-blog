import type { MetaRecord } from 'nextra';
import site from '../site.config';

// Top-level navigation. `type: 'page'` items show in the navbar; the logo links home.
const noChrome = { sidebar: false, toc: false, breadcrumb: false, pagination: false };

export default {
  // Every page: posts show their own dates, so skip the theme's "Last updated" line.
  '*': { theme: { timestamp: false } },
  index: {
    title: 'Home',
    type: 'page',
    display: 'hidden',
    theme: { ...noChrome, layout: 'full' },
  },
  projects: {
    title: 'Projects',
    type: 'page',
  },
  about: {
    title: 'About',
    type: 'page',
    theme: noChrome,
  },
  contact: {
    title: 'Contact ↗',
    type: 'page',
    href: `mailto:${site.email}`,
  },
} satisfies MetaRecord;
