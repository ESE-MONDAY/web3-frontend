import React from 'react'

interface ButtonProps {
    onClick?: () => void,
    children: React.ReactNode,
    buttonClass?: string
}

const LargeButton = ({children, onClick, buttonClass}: ButtonProps ) => {
  return (
    <button className={`p-2 rounded-md bg-primary text-xs sm:text-sm 2xl:text-xl text-white w-full font-medium hover:scale-90 transition-all`}>{children}</button>
  )
}

export default LargeButton