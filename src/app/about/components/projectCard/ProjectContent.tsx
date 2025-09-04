import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/libs/utils'
import { ProjLink } from '@/projects/types'

import { ContentHeader } from './ProjectItems'
import { useProject } from '../../hooks'

const ProjectContent = ({ id, expanded }: { id: string; expanded: boolean }) => {
  const { getProjectById, onCollapse } = useProject()
  const project = getProjectById(id)

  const FallbackThumb = ({ height, label }: { height: string; label: string }) => (
    <div
      className={cn('bg-primary/20 flex w-full items-center justify-center', height)}
      role="img"
      aria-label={`${label} 이미지를 불러오는데 실패했어요.`}
    />
  )

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
            className="m-auto h-44 w-auto object-cover p-5"
            priority
          />
        ) : (
          <div className="bg-primary/20 flex w-full items-center justify-center object-cover">
            <FallbackThumb height="h-44" label={project.title} />
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
        title="닫기"
        aria-label="프로젝트 상세 닫기"
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
            height={800}
            className="m-auto h-80 w-auto object-cover p-5"
            priority
          />
        ) : (
          <FallbackThumb height="h-80" label={project.title} />
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 h-80 w-full bg-gradient-to-b from-transparent to-black/70"
        />

        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-black/20 to-black/50 px-6 text-center text-white">
          <ContentHeader {...project} expanded />
        </div>
      </div>

      {expanded && (
        <div className="mx-auto max-w-3xl space-y-6 p-6">
          <section aria-labelledby="role-heading" className="bg-primary/10 rounded-lg p-4">
            <h3 id="role-heading" className="text-lg font-bold">
              Role
            </h3>
            <p className="whitespace-pre-line">{project.role}</p>
          </section>

          {/* 링크 */}
          {project.links && project.links.length > 0 && (
            <section aria-labelledby="links-heading" className="space-y-2">
              <h3 id="links-heading">✨ 아래 링크를 통해 결과물을 확인해 볼 수 있어요!</h3>
              <ul className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                {project.links.map((link: ProjLink) => (
                  <li key={link.href || link.title}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.title} 새 창으로 열기`}
                      className="group border-secondary/20 hover:border-secondary flex items-center gap-3 rounded-lg border p-3 transition-all duration-300 hover:shadow-sm focus-visible:ring-2 focus-visible:outline-none"
                    >
                      <div className="bg-foreground/5 group-hover:bg-secondary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300">
                        <span
                          className="material-symbols-rounded group-hover:text-secondary duration-300 group-hover:rotate-180"
                          aria-hidden
                        >
                          {link.icon || 'link'}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-medium">{link.title}</span>
                        <span className="text-foreground/60 group-hover:text-secondary block truncate text-xs transition-colors duration-300">
                          {link.href}
                        </span>
                      </div>
                      <div
                        className="text-foreground/40 material-symbols-rounded !text-[18px]"
                        aria-hidden
                      >
                        arrow_outward
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 라이브러리 */}
          {project.libraries && project.libraries.length > 0 && (
            <section aria-labelledby="libs-heading" className="space-y-2">
              <h3 id="libs-heading">✨ 사용한 라이브러리들이에요!</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3">
                {project.libraries.map((library: ProjLink) => (
                  <li key={library.href || library.title}>
                    <Link
                      href={library.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:bg-secondary/20 flex w-full flex-col rounded-lg px-4 py-2 font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                      aria-label={`${library.title} 문서 새 창으로 열기`}
                    >
                      {library.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 상세 설명 */}
          <section aria-labelledby="desc-heading">
            <h3 id="desc-heading" className="sr-only">
              프로젝트 상세 설명
            </h3>
            <div className="prose dark:prose-invert mx-auto max-w-none">
              {project.content}
              <h1 className="from-primary/20 to-primary/5 text-primary flex items-center gap-2 rounded-xl bg-gradient-to-r px-4 py-2 text-lg font-bold shadow-sm">
                📌 주요 업무
              </h1>
              <div className="px-4">
                {project.tasks.map((task) => (
                  <div key={task.title}>
                    <h2>{task.title}</h2>
                    <ul>
                      {task.lists.map((list, idx) => (
                        <li key={`${task.title}-${idx}`}>{list}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {project.uiPoint && (
                <>
                  <h1 className="from-primary/20 to-primary/5 text-primary flex items-center gap-2 rounded-xl bg-gradient-to-r px-4 py-2 text-lg font-bold shadow-sm">
                    🪄 UI/UX POINT!
                  </h1>
                  <div className="px-4">
                    {project.uiPoint.map((point) => (
                      <div key={point.title}>
                        <h2>{point.title}</h2>
                        <ul>
                          {point.lists.map((list, idx) => (
                            <li key={`${point.title}-${idx}`}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h1 className="from-primary/20 to-primary/5 text-primary flex items-center gap-2 rounded-xl bg-gradient-to-r px-4 py-2 text-lg font-bold shadow-sm">
                💡 제작 중 어려웠던 점
              </h1>
              <div className="px-4">
                {project.hardTasks.map((task) => (
                  <div
                    key={task.title}
                    className="border-secondary mb-10 border-b border-dashed pb-2"
                  >
                    <h2>{task.title}</h2>
                    <h3 className="bg-secondary/20">🚫 어려웠던 점</h3>
                    <ul>
                      {task.problems.map((problem, idx) => (
                        <li key={`${task.title}-problem-${idx}`}>{problem}</li>
                      ))}
                    </ul>

                    <h3 className="bg-secondary/20">✅ 문제 해결 방법</h3>
                    <ul>
                      {task.solutions.map((solution, idx) => (
                        <li key={`${task.title}-solution-${idx}`}>{solution}</li>
                      ))}
                    </ul>

                    <h3 className="bg-secondary/20">🌱 배운 점</h3>
                    <ul>
                      {task.learningPoints.map((point, idx) => (
                        <li key={`${task.title}-point-${idx}`}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h1 className="from-primary/20 to-primary/5 text-primary flex items-center gap-2 rounded-xl bg-gradient-to-r px-4 py-2 text-lg font-bold shadow-sm">
                🚀 주요 성과 및 효과
              </h1>
              <div className="px-4">
                {project.results &&
                  project.results.map((result) => (
                    <div key={result.title}>
                      <h2>{result.title}</h2>
                      <ul>
                        {result.lists.map((list, idx) => (
                          <li key={`${result.title}-${idx}`}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default ProjectContent
