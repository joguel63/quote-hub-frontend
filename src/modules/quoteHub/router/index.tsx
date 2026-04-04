import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { StepsLayout } from '../layouts'
import { AppRoutes } from 'core/enums'
import { getRelativeRoute } from 'core/utils'

const modules = {
  LazyHome: lazy(() => import('../pages/home')),
  LazyPersonalInformation: lazy(() => import('../pages/personalInformation')),
  LazyCoverage: lazy(() => import('../pages/coverage')),
  LazySummary: lazy(() => import('../pages/summary')),
}

export const QuoteHubRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path={getRelativeRoute(AppRoutes.Quote)}
        element={
          <Suspense fallback={<div>Loading…</div>}>
            <modules.LazyHome />
          </Suspense>
        }
      />
      <Route element={<StepsLayout />}>
        <Route
          path={getRelativeRoute(AppRoutes.QuotePersonalInformation)}
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <modules.LazyPersonalInformation />
            </Suspense>
          }
        />

        <Route
          path={getRelativeRoute(AppRoutes.QuoteCoverage)}
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <modules.LazyCoverage />
            </Suspense>
          }
        />

        <Route
          path={getRelativeRoute(AppRoutes.QuoteSummary)}
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <modules.LazySummary />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
