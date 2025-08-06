'use client'
import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import ProjectContent from './ProjectContent'
import { useProject } from '../../hooks'

const ProjectCard = ({ id }: { id: string }) => {
  const { openedId, onExpand, onCollapse } = useProject()
  const expanded = id === openedId

  return (
    <>
      <motion.div
        layoutId={id}
        className="ring-primary/20 bg-background max-h-2xl mx-auto w-full max-w-md cursor-pointer overflow-hidden rounded-xl ring"
        onClick={() => onExpand(id)}
        whileHover={{ scale: 1.03 }}
        animate={{ opacity: expanded ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      >
        <ProjectContent id={id} expanded={false} />
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onCollapse}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={id}
              className="bg-background relative max-h-[90vh] w-[90vw] max-w-7xl overflow-y-scroll rounded-2xl shadow-2xl"
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
