import { getIsSenior } from './age.utils'

describe('getIsSenior', () => {
  it('returns false when age is below 65', () => {
    expect(getIsSenior(64)).toBe(false)
  })

  it('returns true when age is 65', () => {
    expect(getIsSenior(65)).toBe(true)
  })

  it('returns true when age is above 65', () => {
    expect(getIsSenior(66)).toBe(true)
  })
})
