import withNextra from 'nextra';
import { fileURLToPath } from 'node:url';

const themeConfig = './theme.config.tsx';

const config = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig,
});

export default config({
  outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)),
});
