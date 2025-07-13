import React from 'react'

import { AnnotationHandler, InnerLine } from 'codehike/code'

export const hover: AnnotationHandler = {
  name: 'hover',
  onlyIfAnnotated: true,
  Line: ({ annotation, ...props }) => (
    <InnerLine merge={props} data-line={annotation?.query || ''} />
  ),
}
