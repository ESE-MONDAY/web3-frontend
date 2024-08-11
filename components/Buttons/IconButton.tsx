import React from 'react'

interface IconButtonProps {
    children: React.ReactNode
    onClick?: () => void,
    buttonClass?: string
}

const IconButton = ({children, onClick, buttonClass}:IconButtonProps) => {
  return (
    <button onClick={onClick} className={` p-1 border-[1px] border-black hover:border-none hover:bg-primary  rounded transition-all ${buttonClass}`}>
      {children}
    </button>
  )
}

export default IconButton
