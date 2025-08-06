import React from 'react'

import Link from 'next/link'

import dayjs from '@/libs/dayjs'
import type { MdxMetadata } from '@/libs/posts'

import { PostCategoryItem, PostInfoItem, PostTagItem } from './items'

const PostHeader = ({ metadata }: { metadata: MdxMetadata }) => {
  // const imageSrc = metadata.image || DEFAULT_IMAGE
  const title = metadata.title || 'No Title'
  const description = metadata.description || ''
  const publishDate = dayjs(metadata.publishDate).format('YYYY. MM. DD.')
  const readingTime = Math.ceil(metadata.readingTime)
  const category = metadata.category
  const tags = metadata.tags

  return (
    <header>
      <Link href="/" className="group no-underline">
        <div className="group-hover:text-primary click flex w-fit items-center rounded-xl">
          <span className="material-symbols-rounded !text-[14px] select-none">arrow_back_ios</span>
          <span className="text-sm">홈으로 돌아가기</span>
        </div>
      </Link>

      <div className="my-4">
        <PostCategoryItem category={category} />
      </div>
      <div className="flex gap-4">
        <PostInfoItem icon="calendar_today" label={publishDate} reverse />
        <PostInfoItem icon="avg_pace" label={`${readingTime}분`} reverse />
      </div>
      <h1 className="mb-4 text-4xl leading-tight font-semibold md:text-5xl">{title}</h1>

      <div className="bg-secondary/20 rounded-xl p-5 leading-relaxed">
        <b className="text-secondary text-sm">이 글에 대하여</b>

        <p className="whitespace-pre-wrap">{description}</p>
        <div className="mt-4 space-x-2">
          {tags.map((tag) => (
            <PostTagItem key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </header>
  )
}

export default PostHeader
