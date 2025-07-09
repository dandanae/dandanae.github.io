import React from 'react'

const IconLabel = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <span className="text-foreground/50 flex items-center justify-end gap-1 text-xs">
      <span>{label}</span>
      <span className="material-symbols-rounded !text-[16px]">{icon}</span>
    </span>
  )
}

export default IconLabel
