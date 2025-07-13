import React from 'react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { AnnotationHandler, BlockAnnotation, InnerLine } from 'codehike/code'

export const collapse: AnnotationHandler = {
  name: 'collapse',
  transform: (annotation: BlockAnnotation) => {
    const { fromLineNumber } = annotation
    return [
      annotation,
      {
        ...annotation,
        fromLineNumber: fromLineNumber,
        toLineNumber: fromLineNumber,
        name: 'CollapseTrigger',
      },
      {
        ...annotation,
        fromLineNumber: fromLineNumber + 1,
        name: 'CollapseContent',
      },
    ]
  },
  Block: ({ annotation, children }) => {
    return (
      <Collapsible
        defaultOpen={annotation.query !== 'collapsed'}
        className="collapsible-content relative"
      >
        {children}
        <div className="placeholder bg-primary/20 ml-16 w-fit rounded-full px-2 py-1 text-xs">
          코드를 펼칠 수 있어요
        </div>
      </Collapsible>
    )
  },
}

const icon = <span className="material-symbols-rounded !text-[15px]">keyboard_arrow_down</span>

export const collapseTrigger: AnnotationHandler = {
  name: 'CollapseTrigger',
  onlyIfAnnotated: true,
  AnnotatedLine: ({ ...props }) => (
    <CollapsibleTrigger>
      <InnerLine merge={props} data={{ icon }} />
    </CollapsibleTrigger>
  ),
  Line: (props) => {
    const icon = props.data?.icon as React.ReactNode
    return (
      <>
        <div className="absolute top-1 left-6.5">{icon}</div>
        <div>
          <InnerLine merge={props} />
        </div>
      </>
    )
  },
}

export const collapseContent: AnnotationHandler = {
  name: 'CollapseContent',
  Block: CollapsibleContent,
}
