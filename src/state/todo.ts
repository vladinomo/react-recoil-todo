import { atom } from 'recoil'

export type Todo = {
  id: string
  text: string
  status: `complete` | `active`
  createdAt: number
}

export type Todos = Todo[]

const todoState = atom({
  key: 'todoState',
  default: [] as Todos
})

export { todoState }
