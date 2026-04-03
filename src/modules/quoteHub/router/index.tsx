import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const modules = {
  LazyHome: lazy(() => import('../pages/home')),
}

export const QuoteHubRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading…</div>}>
            <modules.LazyHome />
          </Suspense>
        }
      />
    </Routes>
  )
}
