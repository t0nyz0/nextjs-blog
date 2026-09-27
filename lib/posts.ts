import type { MdxFile, PageMapItem } from 'nextra';
import { getPageMap } from 'nextra/page-map';

// Posts are the MDX files under content/projects (subfolders like year-2026/ work too).
export const POSTS_ROUTE = '/projects';

export type Post = {
  route: string;
  title: string;
  description?: string;
  date?: string;
  updated?: string;
  tag?: string;
  image?: string;
};

const dateOf = (item: PageMapItem) =>
  'frontMatter' in item && item.frontMatter?.date ? String(item.frontMatter.date) : '';

// Newest first. Items without a date (the index page, folders) keep their place at the top.
function sortByDate(items: PageMapItem[]): PageMapItem[] {
  const sorted = items.map((item) =>
    'children' in item ? { ...item, children: sortByDate(item.children) } : item,
  );
  return [
    ...sorted.filter((item) => !dateOf(item)),
    ...sorted.filter((item) => dateOf(item)).sort((a, b) => dateOf(b).localeCompare(dateOf(a))),
  ];
}

// Orders the posts in the sidebar by date instead of alphabetically.
export function sortPostsByDate(pageMap: PageMapItem[]): PageMapItem[] {
  return pageMap.map((item) =>
    'children' in item && item.route === POSTS_ROUTE ? { ...item, children: sortByDate(item.children) } : item,
  );
}

// Every page in a page map. Links and separators from _meta files are skipped, and so are
// pages marked `display: 'hidden'` in a _meta file when skipHidden is set.
export function collectPages(items: PageMapItem[], skipHidden = false): MdxFile[] {
  const meta: Record<string, any> = items.find((item) => 'data' in item)?.data ?? {};
  return items.flatMap((item) => {
    if ('data' in item || (skipHidden && meta[item.name]?.display === 'hidden')) return [];
    if ('children' in item) return collectPages(item.children, skipHidden);
    return 'href' in item ? [] : [item];
  });
}

// All posts, newest first. A post can stay out of the lists with `display: hidden` or `draft: true`.
export async function getPosts(): Promise<Post[]> {
  const pages = collectPages(await getPageMap(POSTS_ROUTE), true);
  return pages
    .filter(({ route, frontMatter = {} }) => route !== POSTS_ROUTE && frontMatter.display !== 'hidden' && !frontMatter.draft)
    .map(({ route, name, frontMatter = {} }) => ({
      route,
      title: frontMatter.title || name,
      description: frontMatter.description,
      date: frontMatter.date ? String(frontMatter.date) : undefined,
      updated: frontMatter.updated ? String(frontMatter.updated) : undefined,
      tag: frontMatter.tag,
      image: frontMatter.image,
    }))
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
}
