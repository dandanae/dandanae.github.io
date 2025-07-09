import { readdir, readFile } from 'fs/promises'
import path from 'path'

import readingTime from 'reading-time'

import type { Post, PostSummary } from './types'
import { sortByDateDesc } from './utils'

const postsPath = path.resolve(process.cwd(), 'src', 'posts')

export const getAllFiles = async (dir: string): Promise<string[]> => {
  const dirents = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name)
      return dirent.isDirectory() ? getAllFiles(res) : res
    }),
  )
  return Array.prototype.concat(...files)
}

export const getSlugs = async (): Promise<string[]> => {
  const files = (await getAllFiles(postsPath)).filter((f) => f.endsWith('.mdx'))
  return files.map((file) => path.relative(postsPath, file).slice(0, -4))
}

export const testteste = async () => {
  return ''
}

export const getPost = async (slug: string, summaryOnly = false): Promise<Post | PostSummary> => {
  const [category, postName] = slug.split('/')

  const mdxModule = await import(`../../posts/${category}/${postName}.mdx`)
  const source = await readFile(path.join(postsPath, `${slug}.mdx`), 'utf-8')
  const readingStats = readingTime(source)

  const categoryFromFolder = slug.split('/')[0]

  const metadataWithCategory = {
    ...mdxModule.metadata,
    category: categoryFromFolder,
  }

  if (summaryOnly) {
    return {
      slug,
      metadata: metadataWithCategory,
      readingTime: readingStats.minutes,
    }
  }

  return {
    slug,
    metadata: metadataWithCategory,
    readingTime: readingStats.minutes,
    source,
    Component: mdxModule.default,
  }
}

export const getAllPosts = async (): Promise<PostSummary[]> => {
  const files = (await getAllFiles(postsPath)).filter((f) => f.endsWith('.mdx'))
  const slugs = files
    .map((file) => path.relative(postsPath, file).slice(0, -4))
    .map((slug) => slug.replace(/\\/g, '/'))

  const posts = await Promise.all(slugs.map((slug) => getPost(slug, true)))
  return posts.sort(sortByDateDesc)
}

// 범용 필터링 함수
const filterPosts = async (predicate: (post: PostSummary) => boolean): Promise<PostSummary[]> => {
  const posts = await getAllPosts()
  return posts.filter(predicate).sort(sortByDateDesc)
}

export const getPostsByCategory = async (category: string) =>
  filterPosts((post) => post.metadata.category === category)

export const getPostsByTag = async (tag: string) =>
  filterPosts((post) => post.metadata.tags?.includes(tag) ?? false)

export const getPostsByDateRange = async (start: string, end: string) => {
  const startTime = new Date(start).getTime()
  const endTime = new Date(end).getTime()

  return filterPosts((post) => {
    const publishTime = new Date(post.metadata.publishDate ?? 0).getTime()
    return publishTime >= startTime && publishTime <= endTime
  })
}
