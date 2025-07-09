import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://dandanae.github.io',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: [],
}

export default config
