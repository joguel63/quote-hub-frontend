import { AppRoutes } from 'core/enums'
import i18n from 'core/locales'
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
          path={`${AppRoutes.Quote}/*`}
          element={
            <Suspense fallback={<div>{i18n.t('quoteHub.common.loading')}</div>}>
              <modules.LazyQuoteHub />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
