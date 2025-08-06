export interface MdxMetadata {
  pinned: boolean
  title: string
  description: string
  publishDate: string
  image: string
  readingTime: number
  category: string
  tags: string[]
}

export interface Post {
  slug: string
  metadata: MdxMetadata
  source: string
  Component: any
  prev?: PostSummary
  next?: PostSummary
}

export interface PostSummary {
  slug: string
  metadata: MdxMetadata
}

export interface Category {
  key: string
  count: number
  name?: string
}

export interface Tag {
  name: string
  count: number
}

export interface Toc {
  depth: number
  value: string
  id: string
}

export const displayNames: Record<string, string> = {
  'github-blog': '깃허브 블로그 제작',
  'html-css': 'HTML/CSS',
  frontend: '프론트엔드',
  react: '리액트',
}
