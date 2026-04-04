import { AppLayout } from 'core/layouts'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const modules = {
  LazyQuoteHub: lazy(() => import('modules/quoteHub')),
}
export const RoutesProvider = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/*"
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <modules.LazyQuoteHub />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
