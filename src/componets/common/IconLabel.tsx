import React from 'react'

const IconLabel = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <span className="flex items-center justify-end gap-1 text-xs opacity-60">
      <span>{label}</span>
      <span className="material-symbols-rounded !text-[16px]">{icon}</span>
    </span>
  )
}

export default IconLabel
