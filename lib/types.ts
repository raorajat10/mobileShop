// lib/types.ts

import type { ReactElement } from "react"

export interface Service {
  icon: ReactElement
  title: string
  description: string
  color: string // e.g., 'from-pink-500 to-pink-400'
  features?: string[]
}
