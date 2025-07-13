import React from 'react'

import { AnnotationHandler, InnerLine } from 'codehike/code'

export const footnotes: AnnotationHandler = {
  name: 'ref',
  AnnotatedLine: ({ annotation, ...props }) => {
    return (
      <div className="relative flex items-center">
        <InnerLine merge={props} />
        <Number n={annotation.data.n} />
      </div>
    )
  },
}

export const Number = ({ n }: { n: number }) => {
  return (
    <span
      data-value={n}
      className="ring-primary text-primary mx-2 flex h-5 w-5 items-center justify-center rounded-full text-xs ring-2"
    >
      {n}
    </span>
  )
}
