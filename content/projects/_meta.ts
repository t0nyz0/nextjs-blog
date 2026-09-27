import type { MetaRecord } from 'nextra';

// Posts are listed newest first by their `date`, so they don't need entries here.
// Add one only to change a post's sidebar title or hide it, e.g. { 'old-post': { display: 'hidden' } }.
export default {
  index: {
    title: 'All projects',
    theme: { toc: false, breadcrumb: false, pagination: false },
  },
} satisfies MetaRecord;
