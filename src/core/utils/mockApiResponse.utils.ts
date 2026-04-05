type MockApiOptions = {
  delay?: number
  shouldFail?: boolean
  errorMessage?: string
}

/**
 * Utility function to simulate an API response with optional delay and error conditions.
 * @param data The data to be returned by the mock API after the delay.
 * @param options Optional settings for the mock API response, including delay time, failure condition, and error message.
 * @returns A promise that resolves with the provided data after the specified delay, or rejects with an error if shouldFail is true.
 */
export async function mockApiResponse<T>(data: T, options?: MockApiOptions): Promise<T> {
  const { delay = 500, shouldFail = false, errorMessage = 'Mock API Error' } = options || {}

  await new Promise((resolve) => setTimeout(resolve, delay))

  if (shouldFail) {
    throw new Error(errorMessage)
  }

  return data
}
