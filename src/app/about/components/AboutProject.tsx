'use client'
import React, { useMemo, useState } from 'react'

import { ProjectCard } from './projectCard'
import { allProjects } from '../projects'
import { ProjectTag } from '../projects/types'

const AboutProject = () => {
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([])
  const [isLatestFirst, setIsLatestFirst] = useState(true)

  // 태그 목록 (한 번만 계산)
  const allTags = useMemo(
    () => Array.from(new Set(allProjects.flatMap((p) => p.tags || []))).sort(),
    [],
  )

  // 토글 함수
  const toggleTag = (tag: ProjectTag) => {
    setSelectedTags((prev) => {
      const next = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      window.console.log('🔖 selectedTags →', next)
      return next
    })
  }

  // 전체 초기화
  const clearTags = () => {
    window.console.log('🔖 clearTags')
    setSelectedTags([])
  }

  // 필터 + 정렬
  const filteredProjects = useMemo(() => {
    const tagged = selectedTags.length
      ? allProjects.filter((p) =>
          // 모든 선택 태그를 프로젝트가 포함해야 표시
          selectedTags.every((tag) => p.tags.includes(tag)),
        )
      : allProjects

    const sorted = isLatestFirst ? [...tagged].reverse() : tagged
    window.console.log('↕️ isLatestFirst →', isLatestFirst, '; 결과 개수 →', sorted.length)
    return sorted
  }, [selectedTags, isLatestFirst])

  return (
    <div className="flex w-full flex-col gap-5 pb-10">
      <span className="text-2xl font-bold">도전해 본 프로젝트</span>

      {/* 필터/정렬 UI */}
      <div className="flex flex-wrap items-center gap-3">
        {/* 정렬 셀렉트 */}
        <select
          className="rounded-md border px-2 py-1"
          value={isLatestFirst ? '최신순' : '오래된순'}
          onChange={(e) => {
            const next = e.target.value === '최신순'
            window.console.log('↕️ setIsLatestFirst →', next)
            setIsLatestFirst(next)
          }}
        >
          <option value="최신순">최신순</option>
          <option value="오래된순">오래된순</option>
        </select>

        {/* 태그 버튼 */}
        <div className="flex flex-wrap gap-2">
          <button
            className={`rounded-full border px-3 py-1 transition-all ${
              selectedTags.length === 0
                ? 'bg-primary border-primary text-white'
                : 'hover:bg-gray-100'
            }`}
            onClick={clearTags}
          >
            전체
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`rounded-full border px-3 py-1 transition-all ${
                selectedTags.includes(tag)
                  ? 'bg-primary border-primary text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 카드 영역 */}
      {filteredProjects.length === 0 ? (
        <p className="text-muted-foreground">조건에 맞는 프로젝트가 없습니다.</p>
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
