import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import config from './src/config/config.json';

const localeList = ['en', 'hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko', 'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv'];

function getCustomSitemapPages(baseUrl) {
  const basePaths = new Set(['/']);

  // Static pages in src/pages/[...lang]
  const pagesDir = path.resolve('./src/pages/[...lang]');
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    for (const file of files) {
      if (file.endsWith('.astro') && !file.startsWith('404') && !file.startsWith('index') && !file.startsWith('sitemap')) {
        const routeName = file.replace(/\.astro$/, '');
        basePaths.add(`/${routeName}/`);
      }
    }
  }

  // Blog index
  basePaths.add('/blog/');

  // Dynamic blog posts in src/blog
  const blogDir = path.resolve('./src/blog');
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir);
    for (const file of files) {
      if (file.endsWith('.md') || file.endsWith('.mdx')) {
        const slug = file.replace(/\.(md|mdx)$/, '');
        basePaths.add(`/blog/${slug}/`);
      }
    }
  }

  const customPages = [];
  for (const rawPath of basePaths) {
    let cleanPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
    if (!cleanPath.endsWith('/')) cleanPath += '/';

    for (const loc of localeList) {
      const locPath = loc === 'en' ? cleanPath : `/${loc}${cleanPath}`;
      customPages.push(`${baseUrl}${locPath}`);
    }
  }
  return customPages;
}

const customSitemapPostBuild = {
  name: 'custom-sitemap-post-build',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const distDir = fileURLToPath(dir);
      const sitemapPath = path.join(distDir, 'sitemap-0.xml');
      const mainSitemapPath = path.join(distDir, 'sitemap.xml');
      const indexSitemapPath = path.join(distDir, 'sitemap-index.xml');

      const formatXml = (filePath, isIndex = false) => {
        if (!fs.existsSync(filePath)) return;
        let content = fs.readFileSync(filePath, 'utf-8');

        // Remove existing xml declaration or stylesheet declarations if already added, then prepend
        content = content.replace(/^<\?xml[^>]*>/g, '');
        content = content.replace(/^<\?xml-stylesheet[^>]*>/g, '');
        content = '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n' + content;

        if (isIndex) {
          content = content
            .replace(/<sitemapindex[^>]*>/, '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
            .replace(/<sitemap>/g, '\n  <sitemap>\n')
            .replace(/<\/sitemap>/g, '\n  </sitemap>')
            .replace(/<loc>/g, '    <loc>')
            .replace(/<\/loc>/g, '</loc>')
            .replace(/<\/sitemapindex>/g, '\n</sitemapindex>');
        } else {
          content = content
            .replace(
              /<urlset[^>]*>/,
              '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
            )
            .replace(/<url>/g, '\n  <url>\n')
            .replace(/<\/url>/g, '\n  </url>')
            .replace(/<loc>/g, '    <loc>')
            .replace(/<\/loc>/g, '</loc>\n')
            .replace(/<xhtml:link/g, '    <xhtml:link')
            .replace(/\/>/g, '/>\n')
            .replace(/<\/urlset>/g, '\n</urlset>');
        }

        // Clean up any extra duplicate newlines
        content = content.replace(/\n\s*\n/g, '\n');

        fs.writeFileSync(filePath, content, 'utf-8');
      };

      // Format sitemaps in dist
      formatXml(sitemapPath, false);
      formatXml(indexSitemapPath, true);

      // Create main sitemap.xml in dist (which is a formatted copy of sitemap-0.xml)
      if (fs.existsSync(sitemapPath)) {
        fs.copyFileSync(sitemapPath, mainSitemapPath);
      }

      // Also handle .vercel output directory if it exists
      const vercelStaticDir = path.resolve('./.vercel/output/static');
      if (fs.existsSync(vercelStaticDir)) {
        const vSitemap0 = path.join(vercelStaticDir, 'sitemap-0.xml');
        const vSitemap = path.join(vercelStaticDir, 'sitemap.xml');
        const vIndex = path.join(vercelStaticDir, 'sitemap-index.xml');

        if (fs.existsSync(sitemapPath)) {
          fs.copyFileSync(sitemapPath, vSitemap0);
          fs.copyFileSync(sitemapPath, vSitemap);
        }
        if (fs.existsSync(indexSitemapPath)) {
          fs.copyFileSync(indexSitemapPath, vIndex);
        }
      }
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url,
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      customPages: getCustomSitemapPages(config.site.base_url),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          hi: 'hi',
          es: 'es',
          ru: 'ru',
          fr: 'fr',
          de: 'de',
          it: 'it',
          pt: 'pt',
          bn: 'bn',
          ja: 'ja',
          ko: 'ko',
          ms: 'ms',
          pl: 'pl',
          id: 'id',
          ar: 'ar',
          bg: 'bg',
          tr: 'tr',
          sv: 'sv',
        },
      },
      serialize(item) {
        const urlObj = new URL(item.url);
        let pathname = urlObj.pathname;
        if (!pathname.endsWith('/')) pathname += '/';

        const parts = pathname.split('/').filter(Boolean);
        const hasLocale = parts.length > 0 && localeList.includes(parts[0]);

        const rawPath = hasLocale ? '/' + parts.slice(1).join('/') + (parts.length > 1 ? '/' : '') : pathname;
        const cleanPath = rawPath === '/' ? '/' : (rawPath.endsWith('/') ? rawPath : `${rawPath}/`);

        const links = localeList.map((loc) => {
          const locPath = loc === 'en' ? cleanPath : `/${loc}${cleanPath}`;
          return {
            lang: loc,
            url: `${config.site.base_url}${locPath}`,
          };
        });

        links.push({
          lang: 'x-default',
          url: `${config.site.base_url}${cleanPath}`,
        });

        item.links = links;
        return item;
      },
    }),
    customSitemapPostBuild,
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});