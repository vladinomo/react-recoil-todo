import React from 'react'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className="container mx-auto py-12">{children}</div>
}

export { MainLayout }
