import { atom, useAtom } from 'jotai'

const navVisibilityAtom = atom<boolean>(false)

export const useIsVisibleNav = () => {
  const [isVisibleNav, setIsVisibleNav] = useAtom(navVisibilityAtom)

  return { isVisibleNav, setIsVisibleNav }
}
