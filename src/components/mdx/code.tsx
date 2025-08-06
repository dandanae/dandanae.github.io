import React from 'react'

import { Block, CodeBlock, parseProps } from 'codehike/blocks'
import { Pre, RawCode, highlight } from 'codehike/code'
import { z } from 'zod'

import {
  callout,
  collapse,
  collapseTrigger,
  collapseContent,
  diff,
  focus,
  fold,
  footnotes,
  bgHandler,
  borderHandler,
  hover,
  lineNumbers,
  link,
  mark,
  tooltip,
  Number,
} from './annotations'
import { CopyButton } from './itmes'

const Schema = Block.extend({
  code: CodeBlock,
  tooltips: z.array(Block).optional(),
})

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, 'monokai')

  const noteAnnotations = highlighted.annotations.filter(({ name }) => name === 'ref')
  const notes = noteAnnotations.map(({ query }) => query)

  noteAnnotations.forEach((a, index) => {
    a.data = { n: index + 1 }
  })

  return (
    <div className="relative mb-12 overflow-clip rounded-lg">
      <div className="bg-primary/50 flex h-8 items-center justify-center text-center font-bold">
        {highlighted.meta}
      </div>
      <CopyButton text={highlighted.code} />
      <Pre
        code={highlighted}
        handlers={[
          callout,
          collapse,
          collapseTrigger,
          collapseContent,
          diff,
          focus,
          fold,
          footnotes,
          bgHandler,
          borderHandler,
          hover,
          lineNumbers,
          mark,
          link,
        ]}
        className="font-d2 !m-0 !rounded-t-none bg-zinc-800 px-2 py-4 whitespace-pre-wrap"
      />

      <div className="mt-2">
        {notes.map((ref, index) => (
          <div key={index} className="flex items-center gap-2">
            <Number n={index + 1} />
            <span>{ref}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function CodeWithTooltips(props: unknown) {
  const { code, tooltips = [] } = parseProps(props, Schema) as z.infer<typeof Schema>
  const highlighted = await highlight(code, 'monokai')

  highlighted.annotations = highlighted.annotations.map((a) => {
    const tt = tooltips.find((t: any) => t.title === a.query)
    if (!tt) return a
    return {
      ...a,
      data: { ...a.data, children: tt.children },
    }
  })

  return (
    <div className="relative mb-12 overflow-clip rounded-lg">
      <div className="bg-primary/50 flex h-8 items-center justify-center text-center font-bold">
        {highlighted.meta}
      </div>
      <Pre
        code={highlighted}
        handlers={[lineNumbers, tooltip]}
        className="font-d2 !m-0 !rounded-t-none bg-zinc-800 px-2 py-4 whitespace-pre-wrap"
      />
    </div>
  )
}

export function HoverContainer(props: { children: React.ReactNode }) {
  return <div className="hover-container">{props.children}</div>
}

export function Link(props: { href?: string; children?: React.ReactNode }) {
  if (props.href?.startsWith('hover:')) {
    const hover = props.href.slice('hover:'.length)
    return (
      <span className="code-hover-link" data-hover={hover}>
        {props.children}
      </span>
    )
  } else {
    return <a {...props} />
  }
}
