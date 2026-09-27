// Everything personal about the site lives here. Edit this file first.

const email = 'you@example.com';

const site: SiteConfig = {
  // Name shown in the navbar, browser tab and search results.
  title: 'My Next.js Blog',
  description: 'A modern, customizable blog built with Next.js and MDX.',
  // Public address, used for canonical links, the sitemap, robots.txt and the RSS feed.
  // Falls back to your Vercel production domain, then localhost.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    'http://localhost:3000',

  // Homepage hero. Commas split the tagline into phrases that never break across lines.
  author: 'Your Name',
  tagline: 'Developer, writer, builder',
  avatar: '/images/avatar.svg', // swap in your photo, e.g. /images/me.jpg
  email,

  // Hero buttons and footer links. icon: github | mail | rss | link
  links: [
    { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'github', primary: true },
    { label: 'Email', href: `mailto:${email}`, icon: 'mail' },
    { label: 'RSS', href: '/feed.xml', icon: 'rss' },
  ],

  // Source code for the site: the GitHub icon in the navbar.
  repo: 'https://github.com/t0nyz0/nextjs-blog',

  // Accent color for links, tags and highlights, in HSL. The default is a soft blue-grey
  // tuned for readable contrast in both light and dark mode.
  accent: {
    hue: { dark: 212, light: 214 },
    saturation: { dark: 40, light: 35 },
    lightness: { dark: 70, light: 40 },
  },

  // Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'. Leave empty to turn analytics off.
  googleAnalyticsId: '',
};

export default site;

export type IconName = 'github' | 'mail' | 'rss' | 'link';

type ThemeValue = number | { dark: number; light: number };

export type SiteConfig = {
  title: string;
  description: string;
  url: string;
  author: string;
  tagline: string;
  avatar: string;
  email: string;
  links: { label: string; href: string; icon?: IconName; primary?: boolean }[];
  repo: string;
  accent: { hue: ThemeValue; saturation: ThemeValue; lightness: ThemeValue };
  googleAnalyticsId: string;
};
