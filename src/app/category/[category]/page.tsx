import React from 'react'

import { PostCategory, PostList } from '@/components'
import { getCategories, getPostsByCategory } from '@/libs/posts'
import type { Category } from '@/libs/posts'

interface ParamsProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((categoryObj: Category) => ({
    category: categoryObj.name,
  }))
}

const CategoryPage = async ({ params }: ParamsProps) => {
  const { category } = await params
  const posts = await getPostsByCategory(category)

  return (
    <>
      <PostCategory />
      <PostList title={category} posts={posts} />
    </>
  )
}

export default CategoryPage
