import type { MetadataRoute } from 'next';
import { getPageMap } from 'nextra/page-map';
import site from '../site.config';
import { collectPages } from '../lib/posts';
import { parseDate } from '../lib/format';

// /sitemap.xml, generated from every page in /content.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = collectPages(await getPageMap());
  return pages.map(({ route, frontMatter = {} }) => {
    const changed = frontMatter.updated || frontMatter.date;
    return {
      url: new URL(route, site.url).toString(),
      ...(changed && { lastModified: parseDate(changed) }),
    };
  });
}
