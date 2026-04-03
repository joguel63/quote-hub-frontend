// put all types exports here
export type Theme = 'light' | 'dark'

export interface QuickLink {
  title: string
  url: string
  description: string
}

export interface Step {
  command: string
  description: string
}
