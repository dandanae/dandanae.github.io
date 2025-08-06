import React from 'react'

import Image from 'next/image'

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
        <Image
          src={
            project.image ||
            'https://i.pinimg.com/1200x/f5/d8/7b/f5d87bdaca1cc9e40f233de29faf24d6.jpg'
          }
          alt={project.title}
          width={800}
          height={400}
          className={cn('w-full object-cover', expanded ? 'h-80' : 'h-44')}
          priority
        />

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
        <Image
          src={
            project.image ||
            'https://i.pinimg.com/1200x/f5/d8/7b/f5d87bdaca1cc9e40f233de29faf24d6.jpg'
          }
          alt={project.title}
          width={800}
          height={400}
          className={cn('w-full object-cover', expanded ? 'h-80' : 'h-44')}
          priority
        />

        <div className="pointer-events-none absolute top-0 h-80 w-full bg-gradient-to-b from-transparent to-black/70" />

        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-black/20 to-black/50 px-6 text-center text-white">
          <ContentHeader {...project} expanded />
        </div>
      </div>

      {expanded && (
        <div className="mx-auto max-w-3xl space-y-6 p-6">
          {/* 링크 */}
          {project.links && project.links.length > 0 && (
            <div className="space-y-2">
              {project.links.map((link) => (
                <></>
                // <MetaLink key={link} url={link} />
              ))}
            </div>
          )}

          {/* 라이브러리 */}
          {project.libraries && project.libraries.length > 0 && (
            <div className="flex w-fit flex-col">
              <span className="text-sm opacity-70">사용한 라이브러리예요.</span>
              {project.libraries.map((library) => (
                <></>
                // <MetaLink key={library} url={library} />
              ))}
            </div>
          )}

          <div className="bg-primary/10 flex w-full flex-col rounded-lg p-4">
            <span className="text-lg font-bold">Role</span>
            <p className="whitespace-pre-line">{project.role}</p>
          </div>

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
    <div className="flex flex-col justify-between">
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
      <p className="text-primary text-sm font-semibold">🎯 처음으로 {challenge}에 도전했어요!</p>
    </div>
  )
}
