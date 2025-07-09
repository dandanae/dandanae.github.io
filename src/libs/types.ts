export interface MdxMetadata {
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
}

export interface Content extends Post {
  source: string
  Component: any
}
