import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import dayjs from '@/libs/dayjs'
import type { PostSummary } from '@/libs/posts'

import { Card } from '../common'
import { PostCategoryItem, PostInfoItem, PostTagItem } from './items'

const DEFAULT_IMAGE = 'https://i.pinimg.com/736x/4f/10/d6/4f10d62fec1992bc9d928876a980fb63.jpg'

const PostCard = ({ post }: { post: PostSummary }) => {
  const route = '/blog/' + post.slug
  const imageSrc = post.metadata.image || DEFAULT_IMAGE
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
      <Link href={route} className="flex flex-col gap-5">
        <div className="absolute top-4 right-4 flex flex-col gap-1">
          <PostCategoryItem category={category} viewOnly />
          <PostInfoItem icon="avg_pace" label={`${readingTime}분`} />
        </div>

        <Image
          src={imageSrc || DEFAULT_IMAGE}
          alt={title}
          width={500}
          height={500}
          className="h-18 w-18 rounded-lg object-cover object-center transition-all duration-300 group-hover:scale-110"
        />

        <div className="flex flex-col">
          <div className="text-foreground/30 text-xs">{publishDate}</div>
          <div className="group-hover:text-secondary w-full truncate text-lg font-semibold transition-colors duration-300">
            {title}
          </div>
          <div className="text-foreground/50 w-full truncate text-sm leading-relaxed">
            {description}
          </div>
          <div className="mt-2 space-x-2">
            {tags.map((tag) => (
              <PostTagItem key={tag} tag={tag} />
            ))}
          </div>
        </div>

        {/* 좌측 이미지


        날짜 + 읽는 시간

        <div className="bg-primary absolute right-5 bottom-5 flex h-8 w-8 items-center justify-center space-y-1 rounded-full text-white opacity-0 transition-opacity duration-300 group-hover:animate-bounce group-hover:opacity-100">
          <span className="material-symbols-rounded select-none">arrow_right</span>
        </div>

        글 정보
        <div className="flex w-full flex-col justify-between">
          <div className="w-full">
            카테고리
            

            제목
            

            설명
           
           
           
          </div>

          태그
          <div className="space-x-2">
           
          </div>
        </div> */}
      </Link>
    </Card>
  )
}

export default PostCard
