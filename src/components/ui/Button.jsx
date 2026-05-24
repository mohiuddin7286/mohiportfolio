import React from 'react'

export default function Button({children, onClick, variant='primary', ...props}){
  const cls = variant==='primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
  return (
    <button onClick={onClick} className={`${cls} px-4 py-2 rounded`} {...props}>{children}</button>
  )
}
