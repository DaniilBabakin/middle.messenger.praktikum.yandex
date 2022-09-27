import { Block } from 'core'

declare global {
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]
  interface Window {
    currentPage: { page: typeof Block }
  }
}
export {}

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'
