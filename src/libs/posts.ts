import { readdir } from 'fs/promises'
import path from 'path'

import type React from 'react'

import readingTime from 'reading-time'

export interface PostMetadata {
  title: string
  description: string
  publishDate: string
  categories?: string[]
  [key: string]: any
}

export interface Post {
  slug: string
  metadata: PostMetadata
  readingTime: number
  Component: React.ComponentType
}

// 글 목록 불러오기
export const getPosts = async () => {
  const postsPath = path.resolve(process.cwd(), 'src', 'posts')

  try {
    const files = await readdir(postsPath)
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace('.mdx', '')
        const mdxModule = await import(`../posts/${slug}.mdx`)
        const fs = await import('fs/promises')
        const filePath = path.join(postsPath, file)
        const source = await fs.readFile(filePath, 'utf-8')
        const readStats = readingTime(source)

        return {
          slug,
          metadata: mdxModule.metadata,
          readingTime: readStats.minutes,
          // Component: mdxModule.default,
        }
      }),
    )

    posts.sort((a, b) => +new Date(b.metadata.publishDate) - +new Date(a.metadata.publishDate))

    return posts
  } catch (error) {
    return []
  }
}

// slug 내용 불러오기
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const mdxModule = await import(`../posts/${slug}.mdx`)
    const fs = await import('fs/promises')
    const filePath = path.resolve(process.cwd(), 'src', 'posts', `${slug}.mdx`)
    const source = await fs.readFile(filePath, 'utf-8')
    const readStats = readingTime(source)

    return {
      slug,
      metadata: mdxModule.metadata,
      readingTime: readStats.minutes,
      Component: mdxModule.default,
    }
  } catch (error) {
    return null
  }
}

export const getContentBySlug = async (slug: string): Promise<string | null> => {
  try {
    const fs = await import('fs/promises')
    const filePath = path.resolve(process.cwd(), 'src', 'posts', `${slug}.mdx`)
    const source = await fs.readFile(filePath, 'utf-8')
    return source
  } catch (error) {
    return null
  }
}

// slug 목록 불러오기
export const getSlugs = async (): Promise<string[]> => {
  try {
    const postsPath = path.resolve(process.cwd(), 'src', 'posts')
    const files = await readdir(postsPath)
    const slugs = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace('.mdx', ''))

    return slugs
  } catch (error) {
    return []
  }
}

export const getCategories = async (): Promise<string[]> => {
  const posts = await getPosts()
  const allCategories = posts.flatMap((post) => post.metadata.categories || [])
  const uniqueCategories = Array.from(new Set(allCategories))
  return uniqueCategories
}

export const getPostsByCategory = async (category: string) => {
  const posts = await getPosts()
  const filteredPosts = posts.filter((post) => post.metadata.categories?.includes(category))
  return filteredPosts
}
