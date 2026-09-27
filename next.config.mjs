import nextra from 'nextra';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// Nextra aliases its Mermaid component to a path Turbopack can't resolve when pnpm keeps
// packages under node_modules/.pnpm, so point the alias at the resolved file instead.
const require = createRequire(import.meta.url);
const mermaidPackage = createRequire(require.resolve('nextra/package.json')).resolve('@theguild/remark-mermaid/package.json');
const mermaid = `./${path.relative(root, path.join(path.dirname(mermaidPackage), 'dist', 'mermaid.js')).split(path.sep).join('/')}`;

// Pages are MDX files in /content, served from the site root.
const withNextra = nextra({
  contentDirBasePath: '/',
  readingTime: true,
  defaultShowCopyCode: true,
});

export default withNextra({
  // Pin the project root so a lockfile in a parent folder can't confuse Next.js.
  outputFileTracingRoot: root,
  turbopack: {
    root,
    resolveAlias: { '@theguild/remark-mermaid/mermaid': mermaid },
  },
  async redirects() {
    return [
      // Sample post URLs from the Nextra 3 version of this template. Safe to delete.
      { source: '/projects/project1', destination: '/projects/weather-station', permanent: true },
      { source: '/projects/project2', destination: '/projects/smart-home', permanent: true },
    ];
  },
});
