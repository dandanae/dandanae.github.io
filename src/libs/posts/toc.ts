import { readFile } from 'fs/promises'
import path from 'path'

import type { Root, RootContent } from 'mdast'
import remarkMdx from 'remark-mdx'
import remarkParse from 'remark-parse'
import { unified } from 'unified'

import type { Toc } from './types'

const postsPath = path.resolve(process.cwd(), 'src', 'posts')

const generateToc = (source: string): Toc[] => {
  const ast = unified().use(remarkParse).use(remarkMdx).parse(source) as Root
  const toc: Toc[] = []
  const usedIds = new Set<string>()

  const visit = (node: RootContent) => {
    if (node.type === 'heading' && node.depth) {
      const text = node.children
        .filter((c) => c.type === 'text')
        .map((c) => (c as any).value)
        .join('')

      let baseId = text
        .trim()
        .toLowerCase()
        .replace(/[?./`/\s]+/g, '-')
      if (!baseId) baseId = 'heading'

      let id = baseId
      let i = 1
      while (usedIds.has(id)) {
        id = `${baseId}-${i++}`
      }
      usedIds.add(id)
      toc.push({ depth: node.depth, value: text, id })
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
