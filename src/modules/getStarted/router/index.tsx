import { lazy, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

export const GetStartedRouter: React.FC = () => {
  const modules = useMemo(
    () => ({
      LazyGetStartedPage: lazy(() => import('../pages/getStarted')),
    }),
    [],
  )

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading…</div>}>
            <modules.LazyGetStartedPage />
          </Suspense>
        }
      />
    </Routes>
  )
}
