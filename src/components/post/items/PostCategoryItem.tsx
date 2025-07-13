import React from 'react'

import Link from 'next/link'

interface Props {
  category: string
  href?: string
  viewOnly?: boolean
}

const PostCategoryItem = ({
  category,
  href = `/category/${category}`,
  viewOnly = false,
}: Props) => {
  const className =
    'bg-primary/20 text-primary cursor-pointer rounded-full px-3 py-1 text-xs font-bold'

  if (!viewOnly) {
    return (
      <Link href={href} className={className}>
        {category}
      </Link>
    )
  }

  return <span className={className}>{category}</span>
}

export default PostCategoryItem
