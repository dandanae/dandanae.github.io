import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import dayjs from '@/libs/dayjs'
import type { PostSummary } from '@/libs/posts'

import { Card, IconLabel } from '../common'

const DEFAULT_IMAGE = 'https://i.pinimg.com/736x/4f/10/d6/4f10d62fec1992bc9d928876a980fb63.jpg'

const PostCard = ({ post }: { post: PostSummary }) => {
  const route = '/blog/' + post.slug
  const imageSrc = post.metadata.image || DEFAULT_IMAGE
  const title = post.metadata.title || 'No Title'
  const description = post.metadata.description || ''
  const publishDate = post.metadata.publishDate
    ? dayjs.tz(post.metadata.publishDate, 'Asia/Seoul').fromNow()
    : ''
  const readingTime = Math.ceil(post.readingTime)
  const category = post.metadata.category
  const tags = post.metadata.tags

  return (
    <Card classname="group hover:bg-secondary/10">
      <Link href={route} className="flex gap-5">
        {/* 좌측 이미지 */}
        <Image
          src={imageSrc || DEFAULT_IMAGE}
          alt={title}
          width={500}
          height={500}
          className="h-30 w-30 rounded-lg object-cover object-center transition-all duration-300 group-hover:scale-110"
        />

        {/* 날짜 + 읽는 시간 */}
        <div className="absolute top-5 right-5 space-y-1">
          <IconLabel icon="calendar_today" label={publishDate} />
          <IconLabel icon="avg_pace" label={`${readingTime}분`} />
        </div>

        <div className="bg-primary absolute right-5 bottom-5 flex h-8 w-8 items-center justify-center space-y-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:animate-bounce group-hover:opacity-100">
          <span className="material-symbols-rounded">arrow_right</span>
        </div>

        {/* 글 정보 */}
        <div className="flex w-full flex-col justify-between">
          <div className="w-full">
            {/* 카테고리 */}
            <span key={category} className="bg-primary/50 rounded-full px-3 py-1 text-xs">
              {category}
            </span>

            {/* 제목 */}
            <div className="group-hover:text-secondary mt-2 w-3/5 truncate text-xl font-bold transition-colors duration-300">
              {title}
            </div>

            {/* 설명 */}
            <div className="w-3/5 truncate text-sm leading-relaxed opacity-60">{description}</div>
          </div>

          {/* 태그 */}
          <div className="space-x-2">
            {tags.map((tag) => (
              <span key={tag} className="ring-primary/50 rounded-full px-3 py-0.5 text-xs ring">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  )
}

export default PostCard
