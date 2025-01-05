import withNextra from 'nextra';

const themeConfig = './theme.config.tsx';

const config = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig,
});

export default config;