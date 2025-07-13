import React from 'react'

import { AnnotationHandler, InnerLine } from 'codehike/code'

export const mark: AnnotationHandler = {
  name: 'mark',
  Line: ({ annotation, ...props }) => {
    const color = annotation?.query || 'rgb(from #ffb6b9 r g b)'
    return (
      <div
        style={{
          borderLeft: 'solid 4px transparent',
          borderLeftColor: annotation && color,
          backgroundColor: annotation && `rgb(from ${color} r g b / 0.25)`,
        }}
        className="pr-2"
      >
        <InnerLine merge={props} />
      </div>
    )
  },
  Inline: ({ annotation, children }) => {
    const color = annotation?.query || 'rgb(from #ffb6b9 r g b / 0.5)'

    return (
      <span
        style={{
          outline: `solid 1px rgb(from ${color} r g b / 0.5)`,
          background: `rgb(from ${color} r g b / 0.13)`,
        }}
      >
        {children}
      </span>
    )
  },
}
