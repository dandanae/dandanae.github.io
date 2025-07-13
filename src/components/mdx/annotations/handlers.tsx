import React from 'react'

import { AnnotationHandler } from 'codehike/code'

export const borderHandler: AnnotationHandler = {
  name: 'border',
  Block: ({ children }) => (
    <div className="border-primary bg-primary/10 w-fit rounded border px-1">{children}</div>
  ),
}

export const bgHandler: AnnotationHandler = {
  name: 'bg',
  Inline: ({ children }) => <span className="bg-secondary/40 px-1">{children}</span>,
}
