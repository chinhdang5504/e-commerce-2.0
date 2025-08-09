import type React from 'react'
import style from './style.module.scss'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { wrapperLayout, container } = style
  return (
    <main className={wrapperLayout}>
      <div className={container}>{children}</div>
    </main>
  )
}

export default MainLayout
