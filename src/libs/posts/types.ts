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
  numbering: string
  depth: 1 | 2 | 4 | 3 | 5 | 6
  value: string
  id: string
}

export const displayNames: Record<string, string> = {
  'github-blog': '깃허브 블로그 제작',
  frontend: '프론트엔드',
  personal: '개인용',
  javascript: '자바스크립트',
  travel: '여행',
}
