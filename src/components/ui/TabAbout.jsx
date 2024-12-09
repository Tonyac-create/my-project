import React from 'react'

export default function TabAbout({ children, onClick, isActive }) {

  return (
    <div
      onClick={onClick}
      className={`text-xl font-bold border-2 rounded-lg px-3 py-[2px] cursor-pointer
    ${isActive ? 'text-white border-2 border-marianBlue bg-marianBlue' : 'text-marianBlue border-2 border-marianBlue'}
    hover:duration-500 hover:text-white hover:border-2 hover:bg-marianBlue`}>
      {children}
    </div>
  )
}
