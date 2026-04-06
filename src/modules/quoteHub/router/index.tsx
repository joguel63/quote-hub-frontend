import { Loader } from 'core/components'
import { AppRoutes } from 'core/enums'
import { getRelativeRoute } from 'core/utils'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { StepsLayout } from '../layouts'

const modules = {
  LazyHome: lazy(() => import('../pages/home')),
  LazyPersonalInformation: lazy(() => import('../pages/personalInformation')),
  LazyCoverage: lazy(() => import('../pages/coverage')),
  LazySummary: lazy(() => import('../pages/summary')),
  LazyResult: lazy(() => import('../pages/result')),
}

export const QuoteHubRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path={getRelativeRoute(AppRoutes.Quote)}
        element={
          <Suspense fallback={<Loader />}>
            <modules.LazyHome />
          </Suspense>
        }
      />
      <Route element={<StepsLayout />}>
        <Route
          path={getRelativeRoute(AppRoutes.QuotePersonalInformation)}
          element={
            <Suspense fallback={<Loader />}>
              <modules.LazyPersonalInformation />
            </Suspense>
          }
        />

        <Route
          path={getRelativeRoute(AppRoutes.QuoteCoverage)}
          element={
            <Suspense fallback={<Loader />}>
              <modules.LazyCoverage />
            </Suspense>
          }
        />

        <Route
          path={getRelativeRoute(AppRoutes.QuoteSummary)}
          element={
            <Suspense fallback={<Loader />}>
              <modules.LazySummary />
            </Suspense>
          }
        />
      </Route>

      <Route
        path={getRelativeRoute(AppRoutes.QuoteResult)}
        element={
          <Suspense fallback={<Loader />}>
            <modules.LazyResult />
          </Suspense>
        }
      />
    </Routes>
  )
}
