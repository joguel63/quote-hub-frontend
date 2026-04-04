/**
 * A utility function to get the relative route from a given route string.
 * @param route The full route string. e.g. "/quote/personal-information"
 * @returns The relative route string. e.g. "/personal-information"
 */
export const getRelativeRoute = (route: string): string => {
  const segments = route.split('/').filter(Boolean)
  console.log('segments:', segments)

  if (segments.length === 1) return '/'

  const relativeSegments = segments.slice(1)

  return '/' + relativeSegments.join('/')
}
