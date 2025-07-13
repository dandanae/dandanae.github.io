'use client'

import { useState } from 'react'

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState<boolean>(false)

  return (
    <button
      className="absolute top-11 right-3 cursor-pointer text-white"
      aria-label="Copy to clipboard"
      onClick={() => {
        window.navigator.clipboard.writeText(text)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1200)
      }}
    >
      {copied ? (
        <span className="material-symbols-rounded !text-[20px]">check</span>
      ) : (
        <span className="material-symbols-rounded !text-[20px]">content_copy</span>
      )}
    </button>
  )
}

export default CopyButton
