import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist } from 'next/font/google';
import { Head, Search } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import '../styles/globals.css';
import site from '../site.config';
import { sortPostsByDate } from '../lib/posts';
import { GoogleAnalytics } from '../components/GoogleAnalytics';
import { SiteFooter } from '../components/SiteFooter';

// Geist is downloaded at build time and served from your own domain.
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.title}` },
  description: site.description,
  applicationName: site.title,
  authors: [{ name: site.author }],
  openGraph: { siteName: site.title, type: 'website' },
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = sortPostsByDate(await getPageMap());

  return (
    <html lang="en" dir="ltr" className={geist.variable} suppressHydrationWarning>
      <Head color={site.accent} />
      <body>
        <Layout
          navbar={<Navbar logo={<span className="site-logo">{site.title}</span>} projectLink={site.repo || undefined} />}
          footer={
            <Footer>
              <SiteFooter />
            </Footer>
          }
          pageMap={pageMap}
          search={<Search placeholder="Search…" />}
          editLink={null}
          feedback={{ content: null }}
          copyPageButton={false}
          sidebar={{ toggleButton: false }}
          toc={{ title: 'On this page', backToTop: 'Back to top' }}
        >
          {children}
        </Layout>
        {site.googleAnalyticsId && <GoogleAnalytics id={site.googleAnalyticsId} />}
      </body>
    </html>
  );
}
