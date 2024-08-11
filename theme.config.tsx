import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Modern Nextjs Blog</span>,
  project: {
    link: 'https://github.com/t0nyz0',
  },
  footer: {
    text: 'Nextjs Blog',
  },
  editLink: {
    component: null
  },
  toc: {
    float: true,
    title: 'On This Page'
  },
  darkMode: true,
  feedback: {
    content: ''
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  head: (
    <>
    <title>t0nyz</title>
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href={"/favicon.ico"}
    />
    <link
      rel="icon"
      type="image/x-icon"
      sizes="16x16"
      href={"/favicon-16x16.png"}
    />
    <link
      rel="icon"
      type="image/x-icon"
      sizes="32x32"
      href={"/favicon-32x32.png"}
    />
  </>
  ),
}

export default config
