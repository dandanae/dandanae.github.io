export interface MdxMetadata {
  pinned: boolean
  title: string
  description: string
  publishDate: string
  image: string
  category: string
  tags: string[]
}

export interface Post {
  slug: string
  metadata: MdxMetadata
  readingTime: number
  source: string
  Component: any
}

export interface PostSummary {
  slug: string
  metadata: MdxMetadata
  readingTime: number
}

export interface Category {
  name: string
  count: number
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
