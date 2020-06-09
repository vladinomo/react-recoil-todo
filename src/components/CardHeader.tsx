import React from 'react'

type CardHeaderProps = {
  text: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ text }) => {
  return <div className="flex justify-center items-center">{text}</div>
}

export { CardHeader }
