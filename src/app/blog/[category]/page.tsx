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

type PageParams = Promise<{ category: string }>

const CategoryPage = async ({ params }: { params: PageParams }) => {
  const { category } = await params
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
