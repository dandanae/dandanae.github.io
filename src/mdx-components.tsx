import type { MDXComponents } from 'mdx/types'

import { Code } from './components/mdx/code'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Code,
  }
}
