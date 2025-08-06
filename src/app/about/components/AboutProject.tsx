'use client'
import React from 'react'

import Select from '@/components/common/Select'
import { cn } from '@/libs/utils'

import { ProjectCard } from './projectCard'
import { useProject } from '../hooks'

const AboutProject = () => {
  const {
    selectedTags,
    isLatestFirst,
    setIsLatestFirst,
    allTags,
    toggleTag,
    clearTags,
    filteredProjects,
  } = useProject()

  return (
    <div className="flex w-full flex-col gap-5 pb-10">
      <span className="text-2xl font-bold">도전해 본 프로젝트</span>

      {/* 필터/정렬 UI */}
      <div className="flex flex-wrap items-center gap-3">
        {/* 정렬 셀렉트 */}
        <Select
          options={[
            { value: true, label: '최신순', emoji: '📅' },
            { value: false, label: '오래된순', emoji: '⏰' },
          ]}
          value={isLatestFirst}
          onChange={(value) => {
            const next = value as boolean
            setIsLatestFirst(next)
          }}
        />

        {/* 태그 버튼 */}
        <div className="flex flex-wrap gap-2">
          <button
            className={cn(
              'border-secondary/30 min-h-9 cursor-pointer rounded-lg border-2 px-4 py-1 text-sm transition-colors',
              selectedTags.length === 0
                ? 'bg-secondary border-secondary text-white'
                : 'hover:bg-secondary/30',
            )}
            onClick={clearTags}
          >
            전체
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={cn(
                'border-secondary/30 min-h-9 cursor-pointer rounded-lg border-2 px-4 py-1 text-sm transition-colors',
                selectedTags.includes(tag)
                  ? 'bg-secondary border-secondary text-white'
                  : 'hover:bg-secondary/30',
              )}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 카드 영역 */}
      {filteredProjects.length === 0 ? (
        <p className="text-foreground/70">조건에 맞는 프로젝트가 없어요.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} id={project.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default AboutProject
