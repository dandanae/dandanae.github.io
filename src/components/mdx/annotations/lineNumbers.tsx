import React from 'react'

import { AnnotationHandler, InnerLine } from 'codehike/code'

export const lineNumbers: AnnotationHandler = {
  name: 'line-numbers',
  Line: (props) => {
    const width = props.totalLines.toString().length + 1
    return (
      <div className="flex items-center">
        <span
          className="mr-6 text-right text-xs opacity-50 select-none"
          style={{ minWidth: `${width}ch` }}
        >
          {props.lineNumber}
        </span>
        <InnerLine merge={props} />
      </div>
    )
  },
}
