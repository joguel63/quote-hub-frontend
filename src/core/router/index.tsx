import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const modules = {
  LazyGetStarted: lazy(() => import('modules/getStarted')),
}
export const RoutesProvider = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading…</div>}>
            <modules.LazyGetStarted />
          </Suspense>
        }
      />
    </Routes>
  )
}
