import React from 'react'

import Link from 'next/link'

const PostCategoryItem = ({ category }: { category: string }) => {
  return (
    <Link
      href={`/category/${category}`}
      className="bg-primary/20 text-primary cursor-pointer rounded-full px-3 py-1 text-xs font-bold"
    >
      {category}
    </Link>
  )
}

export default PostCategoryItem
