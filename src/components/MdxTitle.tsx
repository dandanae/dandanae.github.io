'use client'
import { useEffect } from 'react'

import { useTitleAtom } from '@/libs/client'

const MdxTitle = ({ title }: { title: string }) => {
  const { setTitle } = useTitleAtom()

  useEffect(() => setTitle(title), [])

  return null
}

export default MdxTitle
