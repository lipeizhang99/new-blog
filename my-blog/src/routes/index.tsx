import { lazy } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import lazyLoad from './lazyLoad'

import type { RouteObject } from 'react-router-dom'

const NotFound = lazy(() => import("@/pages/404"))
const routes: RouteObject[] = [
  {
    path: '*',
    element: lazyLoad(NotFound)
  }
]
const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_URL
})
const Routers = () => {
  return <RouterProvider router={router} />
}

export default Routers
