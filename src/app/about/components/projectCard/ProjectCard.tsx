'use client'
import React, { useCallback, useEffect } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import ProjectContent from './ProjectContent'
import { useProject } from '../../hooks'

const ProjectCard = ({ id }: { id: string }) => {
  const { openedId, onExpand, onCollapse } = useProject()
  const expanded = id === openedId

  const overlayRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!expanded) return
    overlayRef.current?.focus()
  }, [expanded])

  useEffect(() => {
    if (!expanded) return
    const prev = window.document.body.style.overflow
    window.document.body.style.overflow = 'hidden'
    return () => {
      window.document.body.style.overflow = prev
    }
  }, [expanded])

  const onKeyDownDialog = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onCollapse()
        return
      }
    },
    [onCollapse],
  )

  return (
    <>
      <motion.div
        layoutId={id}
        role="button"
        aria-haspopup="dialog"
        aria-expanded={expanded}
        aria-controls={expanded ? `${id}-dialog` : undefined}
        onClick={() => onExpand(id)}
        whileHover={{ scale: 1.03 }}
        animate={{ opacity: expanded ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        className="ring-primary/20 bg-background max-h-2xl mx-auto w-full max-w-md cursor-pointer rounded-xl ring"
      >
        <ProjectContent id={id} expanded={false} />
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            ref={overlayRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            onClick={onCollapse}
            onKeyDown={onKeyDownDialog}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div
              layoutId={id}
              className="bg-background noscroll relative max-h-[90vh] w-[90vw] max-w-7xl overflow-y-scroll rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <ProjectContent id={id} expanded />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
