import React from 'react'

import Link from 'next/link'

import { Category } from '@/libs/posts'

import { Card } from '../common'

const PostCategory = ({ categories }: { categories: Category[] }) => {
  return (
    <Card variant="primary" classname="ml-auto lg:w-2/3 max-h-fit">
      <div className="flex flex-col gap-3">
        <div className="text-primary dark:bg-primary/40 text-center text-lg font-semibold">
          CATEGORY
        </div>
        {categories.map((category: Category) => (
          <Link
            href={`/blog/${category.name}`}
            key={category.name}
            className="group flex cursor-pointer items-center gap-3"
          >
            <span className="group-hover:text-secondary text-foreground/70 max-w-2/3 py-2 text-sm transition-all duration-300 group-hover:scale-120 group-hover:font-medium">
              {category.name}
            </span>
            <div className="border-b-primary group-hover:border-b-secondary h-0 w-full border-b border-dashed transition-colors duration-300" />
            <span className="ring-primary/50 group-hover:ring-secondary/50 group-hover:bg-secondary/10 text-foreground/50 rounded-full px-4 py-1 text-xs ring transition-colors duration-300">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </Card>
  )
}

export default PostCategory
