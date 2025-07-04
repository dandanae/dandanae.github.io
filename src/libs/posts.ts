import { readdir, readFile } from 'fs/promises'
import path from 'path'

import readingTime from 'reading-time'

// import { Post } from '@/types/types'

export const getPosts = async () => {
  const postPath = path.resolve(process.cwd(), 'src', 'app', 'blog', '(posts)')
  const slugs = (await readdir(postPath, { withFileTypes: true })).filter((dirent) =>
    dirent.isDirectory(),
  )

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const mdxPath = path.join(postPath, name, 'page.mdx')
      const source = await readFile(mdxPath, 'utf-8')
      const { metadata } = await import(`../app/blog/(posts)/${name}/page.mdx`)

      const readStats = readingTime(source)

      return {
        slug: name,
        ...metadata,
        readingTime: readStats.minutes,
      }
    }),
  )

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))

  return posts
}

export const getCategories = async () => {
  const posts = await getPosts()

  const allCategories = posts.flatMap((post) => post.categories || [])
  const uniqueCategories = Array.from(new Set(allCategories))

  return uniqueCategories
}

export const getPostsByCategory = async (category: string) => {
  const posts = await getPosts()

  const filteredPosts = posts.filter((post) => post.categories?.includes(category))

  return filteredPosts
}
