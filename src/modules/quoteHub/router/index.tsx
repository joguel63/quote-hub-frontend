import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { StepsLayout } from '../layouts'

const modules = {
  LazyHome: lazy(() => import('../pages/personalInformation')),
}

export const QuoteHubRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<StepsLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <modules.LazyHome />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
