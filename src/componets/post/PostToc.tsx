'use client'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import type { Toc } from '@/libs/posts'
import { cn } from '@/libs/utils'

import { Card } from '../common'

const PostToc = ({ tocs }: { tocs: Toc[] }) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 1.0,
      },
    )

    const headingElements = window.document.querySelectorAll('h1, h2, h3')
    headingElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <Card variant="primary" classname="ml-auto lg:w-2/3 max-h-fit">
      <div className="flex flex-col gap-3">
        <div className="text-lg font-extrabold">목차</div>
        <nav className="flex flex-col space-y-2">
          {tocs.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'hover:text-primary text-sm transition-all',
                item.depth === 1 && 'font-semibold',
                item.depth === 2 && 'text-foreground/70 ml-4',
                item.depth === 3 && 'text-foreground/70 ml-8',
                activeId === item.id && 'text-secondary text-lg font-bold',
              )}
            >
              {item.value}
            </Link>
          ))}
        </nav>
      </div>
    </Card>
  )
}

export default PostToc
