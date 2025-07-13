import React from 'react'

import Link from 'next/link'

import { Category, displayNames, getCategories } from '@/libs/posts'

import { Card } from '../common'

const PostCategory = async () => {
  const categories = await getCategories()

  return (
    <Card
      variant="primary"
      className="ml-auto flex max-h-fit flex-col gap-5 lg:sticky lg:top-18 lg:w-4/5"
    >
      <div className="flex flex-col gap-3">
        <div className="text-primary text-center text-lg font-semibold">CATEGORY</div>
        {categories.map((category: Category) => {
          const title = displayNames[category.name] ?? category.name

          return (
            <Link
              href={`/category/${category.name}`}
              key={category.name}
              className="group flex cursor-pointer items-center gap-3"
            >
              <span className="text-foreground/70 group-hover:text-secondary origin-left truncate text-sm transition-all duration-300 group-hover:scale-110 group-hover:font-medium group-active:scale-90">
                {title}
              </span>
              <div className="border-b-primary group-hover:border-b-secondary h-0 flex-grow border-b border-dashed transition-colors duration-300" />
              <span className="ring-primary/50 group-hover:ring-secondary/50 group-hover:bg-secondary/10 text-foreground/50 rounded-full px-4 py-1 text-xs ring transition-colors duration-300">
                {category.count}
              </span>
            </Link>
          )
        })}
      </div>
    </Card>
  )
}

export default PostCategory
