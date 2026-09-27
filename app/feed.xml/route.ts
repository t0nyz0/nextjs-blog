import site from '../../site.config';
import { getPosts } from '../../lib/posts';
import { parseDate } from '../../lib/format';

// /feed.xml, an RSS feed of every post, newest first. Built once at build time.
export const dynamic = 'force-static';

const escapeXml = (text: string) =>
  text.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!);

export async function GET() {
  const posts = await getPosts();
  const items = posts.map((post) => {
    const url = new URL(post.route, site.url).toString();
    return [
      '    <item>',
      `      <title>${escapeXml(post.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid>${url}</guid>`,
      post.date && `      <pubDate>${parseDate(post.date).toUTCString()}</pubDate>`,
      post.description && `      <description>${escapeXml(post.description)}</description>`,
      '    </item>',
    ]
      .filter(Boolean)
      .join('\n');
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${new URL('/', site.url)}</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
    <atom:link href="${new URL('/feed.xml', site.url)}" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
