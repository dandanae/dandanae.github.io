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

export const getPost = async (slug: string, summaryOnly = false): Promise<Post | PostSummary> => {
  const [category, postName] = slug.split('/')
  const mdxModule = await import(`../../posts/${category}/${postName}.mdx`)
  const source = await readFile(path.join(postsPath, `${slug}.mdx`), 'utf-8')
  const readingStats = readingTime(source)
  const metadataWithOthers = {
    ...mdxModule.metadata,
    category,
    readingTime: readingStats.minutes,
  }

  if (summaryOnly) {
    return {
      slug,
      metadata: metadataWithOthers,
    }
  }

  const allSummaries = await getAllPosts()
  const idx = allSummaries.findIndex((p) => p.slug === slug)

  const prev = idx < allSummaries.length - 1 ? allSummaries[idx + 1] : undefined
  const next = idx > 0 ? allSummaries[idx - 1] : undefined

  return {
    slug,
    metadata: metadataWithOthers,
    source,
    Component: mdxModule.default,
    prev: prev && { slug: prev.slug, metadata: prev.metadata },
    next: next && { slug: next.slug, metadata: next.metadata },
  }
}

export const getAllPosts = async (): Promise<PostSummary[]> => {
  const files = (await getAllFiles(postsPath)).filter((f) => f.endsWith('.mdx'))
  const slugs = files
    .map((file) => path.relative(postsPath, file).slice(0, -4))
    .map((slug) => slug.replace(/\\/g, '/'))

  const posts = await Promise.all(slugs.map((slug) => getPost(slug, true)))
  return (posts as PostSummary[]).sort(sortByDateDesc)
}

const filterPosts = async (predicate: (post: PostSummary) => boolean): Promise<PostSummary[]> => {
  const posts = await getAllPosts()
  return posts.filter(predicate).sort(sortByDateDesc)
}

export const getPostsByCategory = (category: string) =>
  filterPosts((post) => post.metadata.category === category)

export const getPostsByTags = (tags: string | string[]) => {
  const list = Array.isArray(tags) ? tags : [tags]
  return filterPosts((post) => post.metadata.tags?.some((t) => list.includes(t)) ?? false)
}

export const getPostsByDateRange = (start: string, end: string) => {
  const s = new Date(start).getTime()
  const e = new Date(end).getTime()
  return filterPosts((post) => {
    const t = new Date(post.metadata.publishDate ?? 0).getTime()
    return t >= s && t <= e
  })
}

export const getPinnedPosts = () => filterPosts((post) => post.metadata.pinned === true)
