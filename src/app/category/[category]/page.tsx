import React from 'react'

import { PostList } from '@/components'
import { getCategories, getPostsByCategory } from '@/libs/posts'
import type { Category } from '@/libs/posts'

interface ParamsProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((categoryObj: Category) => ({
    category: categoryObj.key,
  }))
}

const CategoryPage = async ({ params }: ParamsProps) => {
  const { category } = await params
  const posts = await getPostsByCategory(category)

  return (
    <div className="w-full p-8 lg:col-start-2 lg:px-0">
      <PostList title={category} posts={posts} />
    </div>
  )
}

export default CategoryPage
