import React from 'react'

import Link from 'next/link'

import { displayNames } from '@/libs/posts/types'

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
      <Link href={href} rel="noopener noreferrer" className={className}>
        {displayNames[category]}
      </Link>
    )
  }

  return <span className={className}>{displayNames[category]}</span>
}

export default PostCategoryItem
