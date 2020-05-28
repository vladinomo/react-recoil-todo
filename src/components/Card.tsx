import React from 'react'

type CardProps = {
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }): JSX.Element => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg divide-y divide-gray-300 m-auto">
      {children}
    </div>
  )
}

export { Card }
