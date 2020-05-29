import { atom } from 'recoil'

export type TodoFilter = 'all' | 'active' | 'completed'

export const todofilterState = atom({
  key: 'todoFilterState',
  default: 'active' as TodoFilter
})
