import { readFile } from 'fs/promises'
import path from 'path'

import GithubSlugger from 'github-slugger'
import type { Root, RootContent } from 'mdast'
import remarkMdx from 'remark-mdx'
import remarkParse from 'remark-parse'
import { unified } from 'unified'

import type { Toc } from './types'

const postsPath = path.resolve(process.cwd(), 'src', 'posts')

const generateToc = (source: string): Toc[] => {
  const ast = unified().use(remarkParse).use(remarkMdx).parse(source) as Root
  const slugger = new GithubSlugger()
  const toc: Toc[] = []

  const visit = (node: RootContent) => {
    if (node.type === 'heading' && node.depth) {
      // mdast 노드의 텍스트만 뽑아서
      const text = node.children
        .filter((c) => c.type === 'text')
        .map((c) => (c as any).value)
        .join('')

      const id = slugger.slug(text)

      toc.push({
        depth: node.depth,
        value: text,
        id,
        numbering: '',
      })
    }
    if ('children' in node) node.children.forEach(visit)
  }

  ast.children.forEach(visit)
  return toc
}

export const getTocBySlug = async (slug: string): Promise<Toc[] | null> => {
  try {
    const source = await readFile(path.join(postsPath, `${slug}.mdx`), 'utf-8')
    return generateToc(source)
  } catch {
    return null
  }
}

export const getTocBySource = async (source: string): Promise<Toc[] | null> => {
  try {
    return generateToc(source)
  } catch {
    return null
  }
}
