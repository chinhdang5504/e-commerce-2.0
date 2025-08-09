import { lazy } from 'react'

const router = [
  {
    path: '/',
    component: lazy(() => import('@/pages/HomePage/HomePage'))
  },
  {
    path: '/todo',
    component: lazy(() => import('@/pages/Todo/Todo'))
  }
]

export default router
