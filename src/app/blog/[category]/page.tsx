import React from 'react'

import { PostCategory, PostList } from '@/componets'
import { getCategories, getPostsByCategory } from '@/libs/posts'
import type { Category } from '@/libs/posts'

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((categoryObj: Category) => ({
    category: categoryObj.name,
  }))
}

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const { category } = params
  const categories = await getCategories()
  const posts = await getPostsByCategory(category)

  return (
    <>
      <PostCategory categories={categories} />
      <PostList title={category} posts={posts} />
    </>
  )
}

export default CategoryPage
