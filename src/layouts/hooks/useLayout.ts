'use client'
import { useState, useCallback } from 'react'

import { useRouter } from 'next/navigation'

import { useTitleAtom, useViewModeAtom } from '@/libs/client'

export const useLayout = () => {
  const router = useRouter()

  const { title } = useTitleAtom()
  const { viewMode, setViewMode } = useViewModeAtom()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const toggleViewMode = useCallback(() => {
    setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))
  }, [setViewMode])

  const goBack = useCallback(() => {
    router.back()
  }, [router])

  const goForward = useCallback(() => {
    router.forward()
  }, [router])

  const goTo = useCallback(
    (route: string) => {
      router.push(route)
    },
    [router],
  )

  return {
    title,
    viewMode,
    isMenuOpen,

    toggleMenu,
    toggleViewMode,

    goBack,
    goForward,
    goTo,
  }
}
