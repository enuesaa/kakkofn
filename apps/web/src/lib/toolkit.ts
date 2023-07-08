import { atom } from 'jotai'

type Fncore = typeof import('@/toolkit/toolkit.js')

export const fncoreAtom = atom<Fncore | null>(null)
fncoreAtom.onMount = (set) => {
  ;(async () => set(await import('@/toolkit/tookit.js')))()
}
