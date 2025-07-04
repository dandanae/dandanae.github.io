'use client'
import React, { useCallback, useEffect } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useViewModeAtom, useTitleAtom, cn } from '@/libs/client'
import dayjs from '@/libs/dayjs'

const defaultImage = 'https://i.pinimg.com/736x/4f/10/d6/4f10d62fec1992bc9d928876a980fb63.jpg'

const Finder = ({ title, posts }: { title: string; posts: any[] }) => {
  const router = useRouter()
  const { viewMode } = useViewModeAtom()
  const { setTitle } = useTitleAtom()

  const goTo = useCallback(
    (route: string) => {
      router.push(route)
    },
    [router],
  )

  useEffect(() => setTitle(title), [])

  if (viewMode === 'grid') {
    return (
      <div
        data-pagefind-ignore="all"
        className="grid h-full w-full grid-cols-2 gap-4 overflow-y-auto md:grid-cols-4 lg:grid-cols-5"
      >
        {posts.map((post) => {
          const route = '/blog/' + post.slug
          const imageSrc = post.image || defaultImage
          const title = post.title || 'No Title'

          return (
            <div
              key={route}
              onClick={() => goTo(route)}
              className="group mb-8 translate-y-0 cursor-pointer space-y-2 text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square w-full rounded-xl bg-white/70 p-2 shadow">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={500}
                  height={500}
                  className="aspect-square rounded-lg object-cover opacity-70 transition-all duration-300 group-hover:opacity-100"
                />
              </div>
              <span className="block max-w-full truncate font-medium">{title}</span>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div data-pagefind-ignore="all" className="flex flex-col">
      {posts.map((post, index) => {
        const route = '/blog/' + post.slug
        const imageSrc = post.image || defaultImage
        const title = post.title || 'No Title'
        const date = post.publishDate ? dayjs(post.publishDate).fromNow() : ''
        const reading = Math.ceil(post.readingTime)
        // {index % 2 === 0 && ' 2'}
        return (
          <div
            key={route}
            onClick={() => goTo(route)}
            className={cn(
              'group flex cursor-pointer gap-2 rounded p-2 px-4 transition-all duration-300 hover:bg-violet-300',
              index % 2 === 0 && 'bg-violet-300/50',
            )}
          >
            <div className="aspect-square w-6 rounded-xl shadow">
              <Image
                src={imageSrc}
                alt={title}
                width={500}
                height={500}
                className="aspect-square rounded-lg object-cover opacity-70 transition-all duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="w-full flex-1 truncate font-medium">{title}</div>
            <div className="flex w-fit min-w-20 items-center gap-1 truncate text-sm font-medium opacity-30">
              <span className="material-symbols-rounded !text-[18px]">calendar_today</span>
              {date}
            </div>
            <div className="flex w-fit min-w-20 items-center gap-1 truncate text-sm font-medium opacity-30">
              <span className="material-symbols-rounded !text-[18px]">avg_pace</span>
              {reading} 분
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Finder
