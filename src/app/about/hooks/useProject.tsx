import { atom, useAtom } from 'jotai'

import { allProjects } from '../projects'

export const openedIdAtom = atom<string | null>(null)

export const useProject = () => {
  const [openedId, setOpenedId] = useAtom(openedIdAtom)

  const getProjectById = (id: string) => {
    return allProjects.find((p) => p.id === id) ?? null
  }

  const onExpand = (id: string) => setOpenedId(id)
  const onCollapse = () => setOpenedId(null)

  return {
    openedId,
    getProjectById,
    onExpand,
    onCollapse,
  }
}
