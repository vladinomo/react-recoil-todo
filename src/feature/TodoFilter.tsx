import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { Filter } from '../components/Filter'
import { todoState, Todo, Todos } from '../state/todo'
import { todofilterState, TodoFilter as TodoFilterValue } from '../state/filter'

const selectOptions = [
  { text: 'All', value: 'all' },
  { text: 'Active', value: 'active' },
  { text: 'Completed', value: 'completed' }
]

const TodoFilter: React.FC = () => {
  // selectorを使いたかったが、無限ループバグを踏んでしまったために断念
  // これと関連がありそう → https://github.com/facebookexperimental/Recoil/issues/54
  const activeTodosCount = useRecoilValue(todoState).filter(
    (todo: Todo) => todo.status === 'active'
  ).length
  const leftText = `${activeTodosCount} item left`
  const [filter, setFilter] = useRecoilState(todofilterState)
  const setTodos = useSetRecoilState(todoState)

  const onClickClearButton = (): void => {
    setTodos((todos: Todos) => todos.filter(todo => todo.status !== 'complete'))
  }
  const onChangeFilter = (event: React.FormEvent<HTMLSelectElement>): void => {
    event.stopPropagation()
    setFilter(event.currentTarget.value as TodoFilterValue)
  }

  return (
    <Filter
      leftText={leftText}
      selectOptions={selectOptions}
      selectedValue={filter}
      buttonText="Clear Completed"
      onClickButton={onClickClearButton}
      onChangeSelect={onChangeFilter}
    />
  )
}

export { TodoFilter }
