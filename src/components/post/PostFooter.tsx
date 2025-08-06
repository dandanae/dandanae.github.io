import React from 'react'

import dayjs from 'dayjs'
import Link from 'next/link'

import type { PostSummary } from '@/libs/posts'

import { Card } from '../common'

const PostFooter = ({ prev, next }: { prev?: PostSummary; next?: PostSummary }) => {
  return (
    <footer className="mb-24 grid w-full grid-cols-2 lg:mb-0">
      {prev && (
        <Card className="group mr-auto w-60">
          <Link href={`/blog/${prev.slug}`} className="flex items-center gap-5">
            <span className="material-symbols-rounded text-secondary select-none">
              chevron_left
            </span>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="group-hover:text-secondary w-full truncate text-sm font-semibold transition-colors duration-300">
                {prev.metadata.title}
              </span>
              <span className="text-foreground/50 text-xs">
                {dayjs(prev.metadata.publishDate).format('YYYY. MM. DD.')}
              </span>
            </div>
          </Link>
        </Card>
      )}

      {next && (
        <Card className="group col-start-2 ml-auto w-60">
          <Link href={`/blog/${next.slug}`} className="flex items-center gap-5">
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="group-hover:text-secondary truncate text-sm font-semibold transition-colors duration-300">
                {next.metadata.title}
              </span>
              <span className="text-foreground/50 text-xs">
                {dayjs(next.metadata.publishDate).format('YYYY. MM. DD.')}
              </span>
            </div>
            <span className="material-symbols-rounded text-secondary flex-none select-none">
              chevron_right
            </span>
          </Link>
        </Card>
      )}
    </footer>
  )
}

export default PostFooter
