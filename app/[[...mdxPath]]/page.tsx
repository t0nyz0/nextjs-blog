import type { Metadata } from 'next';
import type { ComponentProps } from 'react';
import type { $NextraMetadata } from 'nextra';
import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents as getMDXComponents } from '../../mdx-components';
import { PostMeta } from '../../components/PostMeta';
import site from '../../site.config';

// Every MDX file in /content becomes a static page at build time.
export const generateStaticParams = generateStaticParamsFor('mdxPath');
export const dynamicParams = false;

type Props = { params: Promise<{ mdxPath?: string[] }> };

// Frontmatter fields this template reads, on top of Nextra's own (title, description…).
type PageMeta = $NextraMetadata & {
  date?: string;
  updated?: string;
  image?: string;
  keywords?: string;
};

async function loadPage(mdxPath?: string[]) {
  const page = await importPage(mdxPath);
  return { ...page, metadata: page.metadata as PageMeta };
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { mdxPath } = await props.params;
  const { metadata } = await loadPage(mdxPath);
  const path = mdxPath?.length ? `/${mdxPath.join('/')}` : '/';
  const isHome = path === '/';
  const title = isHome ? site.title : metadata.title;
  const description = metadata.description || site.description;
  const images = metadata.image ? [metadata.image] : undefined;

  return {
    title: isHome ? { absolute: site.title } : metadata.title,
    description,
    keywords: metadata.keywords,
    alternates: { canonical: path, types: { 'application/rss+xml': '/feed.xml' } },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.title,
      images,
      ...(metadata.date
        ? { type: 'article', publishedTime: metadata.date, modifiedTime: metadata.updated, authors: [site.author] }
        : { type: 'website' }),
    },
    twitter: { card: images ? 'summary_large_image' : 'summary', title, description, images },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { default: MDXContent, toc, metadata, sourceCode } = await loadPage(params.mdxPath);
  const { wrapper: Wrapper, h1: H1 } = getMDXComponents();

  // Posts (pages with a `date`) get a "date · reading time" line under their title.
  let titled = false;
  const components = metadata.date
    ? {
        h1: (headingProps: ComponentProps<typeof H1>) => {
          const first = !titled;
          titled = true;
          return (
            <>
              <H1 {...headingProps} />
              {first && <PostMeta date={metadata.date} updated={metadata.updated} readingTime={metadata.readingTime} />}
            </>
          );
        },
      }
    : undefined;

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} components={components} />
    </Wrapper>
  );
}
