import React from 'react'

import { AnnotationHandler, BlockAnnotation, InnerLine } from 'codehike/code'

export const diff: AnnotationHandler = {
  name: 'diff',
  onlyIfAnnotated: true,
  transform: (annotation: BlockAnnotation) => {
    const color = annotation.query == '-' ? '#f85149' : '#3fb950'
    return [annotation, { ...annotation, name: 'mark', query: color }]
  },
  Line: ({ annotation, ...props }) => (
    <div className="relative flex">
      <div className="absolute left-6 select-none">{annotation?.query}</div>
      <InnerLine merge={props} />
    </div>
  ),
}
