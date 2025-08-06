import React from 'react'

import Image from 'next/image'

import { Link } from '@/components/mdx'
import { cn } from '@/libs/utils'

import { useProject } from '../../hooks'
import { ProjectTag, projectTags } from '../../projects/types'

const ProjectContent = ({ id, expanded }: { id: string; expanded: boolean }) => {
  const { getProjectById, onCollapse } = useProject()
  const project = getProjectById(id)

  if (!project) return null

  if (!expanded)
    return (
      <>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="h-44 w-full object-cover"
            priority
          />
        ) : (
          <div className="bg-foreground/10 flex h-44 w-full items-center justify-center object-cover">
            <span className="material-symbols-rounded text-foreground/50 !text-5xl">
              hide_image
            </span>
          </div>
        )}

        <div className="px-6 py-3">
          <ContentHeader {...project} />
        </div>
      </>
    )

  return (
    <div className="relative flex flex-col">
      <button
        type="button"
        onClick={onCollapse}
        className="material-symbols-rounded absolute top-4 right-4 z-50 cursor-pointer text-white transition-all duration-300 hover:scale-120 hover:rotate-90 active:scale-90"
      >
        close
      </button>

      <div className="relative">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="h-80 w-full object-cover"
            priority
          />
        ) : (
          <div className="bg-primary/30 flex h-80 w-full items-center justify-center object-cover">
            {/* <span className="material-symbols-rounded text-foreground/50 !text-5xl">
              hide_image
            </span> */}
          </div>
        )}

        <div className="pointer-events-none absolute top-0 h-80 w-full bg-gradient-to-b from-transparent to-black/70" />

        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-black/20 to-black/50 px-6 text-center text-white">
          <ContentHeader {...project} expanded />
        </div>
      </div>

      {expanded && (
        <div className="mx-auto max-w-3xl space-y-6 p-6">
          <div className="bg-primary/10 flex w-full flex-col rounded-lg p-4">
            <span className="text-lg font-bold">Role</span>
            <p className="whitespace-pre-line">{project.role}</p>
          </div>

          {/* 링크 */}
          {project.links && project.links.length > 0 && (
            <div className="space-y-2">
              <p className="text-lg font-medium">
                ✨ 아래 링크를 통해 결과물을 확인해 볼 수 있어요!
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {project.links.map((link) => {
                  return (
                    <Link href={link.href}>
                      <a target="_blank" rel="noopener noreferrer">
                        <div className="group border-secondary/20 hover:border-secondary flex items-center gap-3 rounded-lg border p-3 transition-all duration-300 hover:shadow-sm">
                          <div className="bg-foreground/5 group-hover:bg-secondary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300">
                            <span className="material-symbols-rounded group-hover:text-secondary duration-300 group-hover:rotate-180">
                              link
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="font-medium">{link.title}</span>

                            <span className="text-foreground/60 group-hover:text-secondary block truncate text-xs transition-colors duration-300">
                              {link.href}
                            </span>
                          </div>

                          <div className="text-foreground/40 material-symbols-rounded !text-[18px]">
                            arrow_outward
                          </div>
                        </div>
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* 라이브러리 */}
          {project.libraries && project.libraries.length > 0 && (
            <div className="space-y-2">
              <p className="text-lg font-medium">✨ 사용한 라이브러리들이에요!</p>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {project.libraries.map((library) => {
                  return (
                    <Link href={library.href}>
                      <a target="_blank" rel="noopener noreferrer">
                        <div className="group border-secondary/20 hover:border-secondary flex items-center gap-3 rounded-lg border p-3 transition-all duration-300 hover:shadow-sm">
                          <div className="bg-foreground/5 group-hover:bg-secondary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300">
                            <span className="material-symbols-rounded group-hover:text-secondary duration-300 group-hover:rotate-180">
                              link
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="font-medium">{library.title}</span>

                            <span className="text-foreground/60 group-hover:text-secondary block truncate text-xs transition-colors duration-300">
                              {library.href}
                            </span>
                          </div>

                          <div className="text-foreground/40 material-symbols-rounded !text-[18px]">
                            arrow_outward
                          </div>
                        </div>
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* 상세 설명 */}
          <div className="prose dark:prose-invert mx-auto max-w-none">{project.content}</div>
        </div>
      )}
    </div>
  )
}

export default ProjectContent

const ContentHeader = ({
  tags,
  title,
  date,
  subtitle,
  challenge,
  expanded = false,
}: {
  tags: ProjectTag[]
  title: string
  date: string
  subtitle: string
  challenge: string
  expanded?: boolean
}) => {
  return (
    <div className="flex flex-col justify-center">
      {tags?.length > 0 && (
        <div className={cn('flex flex-wrap gap-2', expanded && 'm-auto')}>
          {tags.map((tag) => {
            const config = projectTags[tag]
            const colorClass = config?.color || 'bg-gray-100 text-gray-700'

            return (
              <span
                key={tag}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${colorClass}`}
              >
                # {tag}
              </span>
            )
          })}
        </div>
      )}

      <p className={cn('mt-2 text-xs', expanded ? 'text-white/50' : 'text-foreground/50')}>
        {date}
      </p>
      <p className="text-xl font-bold">{title}</p>

      <p className={cn('my-2 text-sm', expanded ? 'text-white/70' : 'text-foreground/70')}>
        {subtitle}
      </p>
      <p className="text-primary text-sm font-semibold">🎯 {challenge}에 도전했어요!</p>
    </div>
  )
}
