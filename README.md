# 🚀 Modern, Flexible, and Powerful Development Blog in Next.js in Minutes

Welcome to the **Next.js Blog Template** – a fast, modern, and fully customizable blogging platform. This template is designed to be simple, clean, and free of unnecessary clutter, allowing you to focus on your content while benefiting from the latest web technologies.

This template powers [t0nyz.com](https://t0nyz.com), so you can see it in action firsthand.

## 🌟 Key Features

- **⚡ Fast**: Powered by Next.js, ensuring your blog loads quickly and performs well across all devices.
- **🖥️ Modern**: Built with Next.js, providing you with the latest features and best practices.
- **🌐 Hosted Free**: Easily deploy your blog to platforms like Vercel or Netlify at no cost.
- **🔄 CICD**: Seamless continuous integration and continuous deployment, so your changes go live instantly.
- **🔍 SEO Built-In**: Optimized for search engines right out of the box, helping your content reach a wider audience.
- **✨ Simple & Clean**: No unnecessary bloat – just the essentials for a beautiful, minimalistic blog.

## Why should you use this template?

This template goes beyond a generic Nextra setup by including:

- **Built-In Favicon Example**: A ready-to-customize favicon setup, ensuring your blog has a unique and professional look.
- **Built-In Google Analytics Example**: Easily track your blog's performance with Google Analytics.
- **Built-In Project Examples**: Pre-made project pages to help you quickly showcase your work.
- **Built-In SEO Optimization**: Pre-configured meta tags and settings to boost your blog's visibility in search engines.

## 🛠️ Getting Started (Easy)

### [Deploy your website right now 🚀](https://vercel.com/new/t0nyz0s-projects/clone?demo-description=Simple%2C+powerful+and+flexible+markdown-powered+docs+site.+Built+with+Next.js.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F5RZetTd7rd1mQtoZt2fajA%2F747eabb89b6378ecfc0ef433f5e47a01%2FCleanShot_2022-12-02_at_12.07.44.png&demo-title=Nextra%3A+Docs+Starter+Kit&demo-url=https%3A%2F%2Fnextra-docs-template.vercel.app%2F&from=templates&project-name=Nextra%3A+Docs+Starter+Kit&repository-name=nextjs-blog&repository-url=https%3A%2F%2Fgithub.com%2Ft0nyz0%2Fnextjs-blog)




## Getting Started (Old fashioned way)

1. **Clone the Repository**:
   ```cpp
   git clone https://github.com/t0nyz0/nextjs-blog.git
   cd nextjs-blog
   ```

2. **Install Dependencies:**

   Use Node.js 22.12+ (22.x) or Node.js 24.x. The runtime is selected by your
   development/deployment environment, not installed as an application dependency.

   Then, install the project dependencies by running:
   ```cpp 
   npm ci
   ```

3. Start the development server to see your project in action:
   ```ccp 
   npm run dev
   ```

## Dependency security and verification

The blog stays on the patched Next.js 15 line to preserve its Nextra 3 / Pages
Router setup. Both npm and pnpm lockfiles are maintained; keep them in sync when
updating dependencies:

```sh
npm update
pnpm import
npm audit
pnpm audit
npm run build
npm run typecheck
```

For a clean pnpm checkout, use `pnpm install --frozen-lockfile`, then
`pnpm build` and `pnpm typecheck`. Do not switch package managers in an existing
`node_modules` directory; verify each in a separate clean checkout.

The matching `overrides` and `pnpm.overrides` entries in `package.json` force
patched PostCSS and XML DOM releases where upstream dependencies pin older
versions. Keep both override sections identical. Revisit these overrides when
upstream packages adopt the fixed versions, and run both audits before removing
them.

After updates, check `/`, `/about`, `/projects`, `/projects/project1`, and
`/projects/project2` in the browser, including search, theme switching, optimized
images, and the two Mermaid diagrams. Dependency audits check known advisories;
they are not a full security audit of application code.
