import React from 'react'

import { Finder } from '@/components'
import { getCategories, getPostsByCategory } from '@/libs'

export const generateStaticParams = async () => {
  const categories = await getCategories()
  return categories.map((category) => ({ category }))
}

const page = async ({ params }: { params: any }) => {
  const category = params.category
  const posts = await getPostsByCategory(category)

  return <Finder title={category} posts={posts} />
}

export default page
