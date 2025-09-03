import { useMemo, useState } from 'react'

import { atom, useAtom } from 'jotai'

import { allProjects } from '@/projects'
import { ProjTag } from '@/projects/types'

export const openedIdAtom = atom<string | null>(null)

export const useProject = () => {
  const [openedId, setOpenedId] = useAtom(openedIdAtom)

  const getProjectById = (id: string) => {
    return allProjects.find((p) => p.id === id) ?? null
  }

  const onExpand = (id: string) => setOpenedId(id)
  const onCollapse = () => setOpenedId(null)

  const [selectedTags, setSelectedTags] = useState<ProjTag[]>([])
  const [isLatestFirst, setIsLatestFirst] = useState<boolean>(true)

  const allTags = useMemo(
    () => Array.from(new Set(allProjects.flatMap((p) => p.tags || []))).sort(),
    [],
  )

  const toggleTag = (tag: ProjTag) => {
    setSelectedTags((prev) => {
      const next = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      return next
    })
  }

  const clearTags = () => {
    setSelectedTags([])
  }

  const filteredProjects = useMemo(() => {
    const tagged = selectedTags.length
      ? allProjects.filter((p) => selectedTags.every((tag) => p.tags.includes(tag)))
      : allProjects

    const sorted = isLatestFirst ? [...tagged].reverse() : tagged
    return sorted
  }, [selectedTags, isLatestFirst])

  return {
    openedId,
    getProjectById,
    onExpand,
    onCollapse,

    selectedTags,
    isLatestFirst,
    setIsLatestFirst,
    allTags,
    toggleTag,
    clearTags,
    filteredProjects,
  }
}
