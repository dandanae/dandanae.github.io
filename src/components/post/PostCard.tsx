import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import dayjs from '@/libs/dayjs'
import type { PostSummary } from '@/libs/posts'

import { Card } from '../common'
import { PostCategoryItem, PostInfoItem, PostTagItem } from './items'

const PostCard = ({ post }: { post: PostSummary }) => {
  const route = '/blog/' + post.slug
  const imageSrc = post.metadata.image
  const title = post.metadata.title || 'No Title'
  const description = post.metadata.description || ''
  const publishDate = post.metadata.publishDate
    ? dayjs.tz(post.metadata.publishDate, 'Asia/Seoul').fromNow()
    : ''
  const readingTime = Math.ceil(post.metadata.readingTime)
  const category = post.metadata.category
  const tags = post.metadata.tags

  return (
    <Card className="group hover:bg-secondary/10">
      <Link href={route} rel="noopener noreferrer" className="flex flex-col gap-5">
        <div className="absolute top-4 right-4 flex flex-col gap-1">
          <PostCategoryItem category={category} viewOnly />
          <PostInfoItem icon="avg_pace" label={`${readingTime}분`} />
        </div>

        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={500}
            className="h-18 w-18 rounded-lg object-cover object-center transition-all duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="bg-primary/20 h-18 w-18 rounded-lg transition-all duration-300 group-hover:scale-110" />
        )}

        <div className="flex flex-col">
          <div className="text-foreground/30 text-xs">{publishDate}</div>
          <div className="group-hover:text-secondary w-full truncate text-lg font-semibold transition-colors duration-300">
            {title}
          </div>
          <div className="text-foreground/50 w-full truncate text-sm leading-relaxed">
            {description}
          </div>
          <div className="mt-2 flex items-center space-x-2">
            {tags.slice(0, 3).map((tag) => (
              <PostTagItem key={tag} tag={tag} />
            ))}

            {tags.length > 3 && (
              <span className="text-foreground/50 text-xs font-medium">+ {tags.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </Card>
  )
}

export default PostCard
