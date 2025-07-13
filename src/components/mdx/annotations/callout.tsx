import React from 'react'

import { InlineAnnotation, AnnotationHandler } from 'codehike/code'

export const callout: AnnotationHandler = {
  name: 'callout',
  transform: (annotation: InlineAnnotation) => {
    const { name, query, lineNumber, fromColumn, toColumn, data } = annotation
    return {
      name,
      query,
      fromLineNumber: lineNumber,
      toLineNumber: lineNumber,
      data: { ...data, column: (fromColumn + toColumn) / 2 },
    }
  },
  Block: ({ annotation, children }) => {
    const { column } = annotation.data
    return (
      <div className="mb-2">
        {children}

        <div
          // style={{ minWidth: `${column + 4}ch` }}
          style={{ marginLeft: `${column / 2}ch` }}
          className="border-secondary relative mt-1 ml-[2ch] w-fit rounded-full border bg-zinc-800 px-3 py-0.5 whitespace-break-spaces"
        >
          <div
            style={{ left: `${column / 2}ch` }}
            className="border-secondary absolute -top-[1px] h-2 w-2 -translate-y-1/2 rotate-45 border-t border-l bg-zinc-800"
          />
          <span className="text-secondary relative z-10 text-xs select-none">
            {annotation.query}
          </span>
        </div>
      </div>
    )
  },
}
