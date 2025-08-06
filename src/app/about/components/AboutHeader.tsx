import React from 'react'

const AboutHeader = () => {
  return (
    <div className="flex w-full flex-col items-center pb-5">
      <span className="material-symbols-rounded text-primary">format_quote</span>
      <h1 className="text-xl font-semibold">
        해 보지 않고서는 당신이 무엇을 해낼 수 있는지 알 수 없다.
      </h1>
      <span className="text-foreground/50 text-sm italic">- 프랭클린 아담</span>
    </div>
  )
}

export default AboutHeader
