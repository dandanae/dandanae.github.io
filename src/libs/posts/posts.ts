import { readdir, readFile } from 'fs/promises'
import path from 'path'

import readingTime from 'reading-time'

import type { Post, PostSummary } from './types'
import { sortByDateDesc } from './utils'

const postsPath = path.resolve(process.cwd(), 'src', 'posts')

export const getSlugs = async (): Promise<string[]> => {
  const files = await readdir(postsPath)
  return files.filter((f) => f.endsWith('.mdx')).map((f) => f.slice(0, -4))
}

export const getPost = async (slug: string, summaryOnly = false): Promise<Post | PostSummary> => {
  const mdxModule = await import(`../../posts/${slug}.mdx`)
  const source = await readFile(path.join(postsPath, `${slug}.mdx`), 'utf-8')
  const readingStats = readingTime(source)

  if (summaryOnly) {
    return {
      slug,
      metadata: mdxModule.metadata,
      readingTime: readingStats.minutes,
    }
  }

  return {
    slug,
    metadata: mdxModule.metadata,
    readingTime: readingStats.minutes,
    source,
    Component: mdxModule.default,
  }
}

export const getAllPosts = async (): Promise<PostSummary[]> => {
  const files = (await readdir(postsPath)).filter((f) => f.endsWith('.mdx'))
  const posts = await Promise.all(files.map((f) => getPost(f.slice(0, -4), true)))
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
