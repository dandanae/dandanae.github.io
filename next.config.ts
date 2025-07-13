import nextMDX from '@next/mdx'
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx'
import { NextConfig } from 'next'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.kakaocdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
    ],
  },
}

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  components: { code: 'Code' },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [[remarkCodeHike, chConfig]],
    recmaPlugins: [remarkGfm, remarkBreaks, [recmaCodeHike, chConfig]],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

export default withMDX(nextConfig)
