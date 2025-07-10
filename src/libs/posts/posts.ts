import { readdir, readFile } from 'fs/promises'
import path from 'path'

import readingTime from 'reading-time'

import type { Post, PostSummary } from './types'
import { sortByDateDesc } from './utils'

const postsPath = path.resolve(process.cwd(), 'src', 'posts')

const adjacentMap: Record<string, { prev?: PostSummary; next?: PostSummary }> = {}

// 1) 모든 파일 탐색
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

// 2) 슬러그 리스트
export const getSlugs = async (): Promise<string[]> => {
  const files = (await getAllFiles(postsPath)).filter((f) => f.endsWith('.mdx'))
  return files.map((file) => path.relative(postsPath, file).slice(0, -4))
}

// 3) 요약 전용 또는 전체 포스트 정보(fetch)
export const getPost = async (slug: string, summaryOnly = false): Promise<Post | PostSummary> => {
  // 1) 기존 로직으로 mdxModule, source, metadataWithOthers 얻기
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

  // 2) 전체 요약 리스트에서 현재 글의 인덱스 찾기
  const allSummaries = await getAllPosts()
  const idx = allSummaries.findIndex((p) => p.slug === slug)

  // 3) 인접 포스트 추출
  const prev = idx < allSummaries.length - 1 ? allSummaries[idx + 1] : undefined
  const next = idx > 0 ? allSummaries[idx - 1] : undefined

  // 4) 기존 리턴 객체에 prev/next 추가
  return {
    slug,
    metadata: metadataWithOthers,
    source,
    Component: mdxModule.default,
    prev: prev && { slug: prev.slug, metadata: prev.metadata },
    next: next && { slug: next.slug, metadata: next.metadata },
  }
}

// 4) 모든 포스트 요약 리스트 (날짜 내림차순 정렬)
export const getAllPosts = async (): Promise<PostSummary[]> => {
  const files = (await getAllFiles(postsPath)).filter((f) => f.endsWith('.mdx'))
  const slugs = files
    .map((file) => path.relative(postsPath, file).slice(0, -4))
    .map((slug) => slug.replace(/\\/g, '/'))

  const posts = await Promise.all(slugs.map((slug) => getPost(slug, true)))
  return (posts as PostSummary[]).sort(sortByDateDesc)
}

// 5) 범용 필터
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
