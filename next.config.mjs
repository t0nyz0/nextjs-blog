import nextra from 'nextra';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// Pages are MDX files in /content, served from the site root.
const withNextra = nextra({
  contentDirBasePath: '/',
  readingTime: true,
  defaultShowCopyCode: true,
});

export default withNextra({
  // Pin the project root so a lockfile in a parent folder can't confuse Next.js.
  outputFileTracingRoot: root,
  turbopack: { root },
  async redirects() {
    return [
      // Sample post URLs from the Nextra 3 version of this template. Safe to delete.
      { source: '/projects/project1', destination: '/projects/weather-station', permanent: true },
      { source: '/projects/project2', destination: '/projects/smart-home', permanent: true },
    ];
  },
});
