import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
import type { MDXComponents } from 'nextra/mdx-components';

const themeComponents = getThemeComponents();

// Components available to every MDX page. Add your own here to use them without importing.
export function useMDXComponents(components?: MDXComponents) {
  return {
    ...themeComponents,
    ...components,
  };
}
