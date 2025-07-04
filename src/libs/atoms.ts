import { atom, useAtom } from 'jotai'

const titleAtom = atom<string>('Home')
const viewModeAtom = atom<'grid' | 'list'>('list')
const scrollAtom = atom<number>(0)

export const useTitleAtom = () => {
  const [title, setTitle] = useAtom(titleAtom)
  return { title, setTitle }
}

export const useViewModeAtom = () => {
  const [viewMode, setViewMode] = useAtom(viewModeAtom)
  return { viewMode, setViewMode }
}

export const useScrollAtom = () => {
  const [scroll, setScroll] = useAtom(scrollAtom)
  return { scroll, setScroll }
}
