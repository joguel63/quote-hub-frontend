import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

const LazyGetStartedPage = lazy(() => import('../pages/getStarted'))

export const getStartedRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading…</div>}>
        <LazyGetStartedPage />
      </Suspense>
    ),
  },
]
