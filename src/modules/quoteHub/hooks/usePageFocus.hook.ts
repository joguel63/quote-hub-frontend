import { RefObject, useEffect } from 'react'

export const usePageFocus = <T extends HTMLElement>(ref: RefObject<T | null>) => {
  useEffect(() => {
    ref.current?.focus()
  }, [ref])
}
