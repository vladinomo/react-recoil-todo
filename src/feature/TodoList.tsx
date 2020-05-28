import React from 'react'
import { useRecoilValue } from 'recoil'

import { List } from '../components/List'
import { todoState, Todo } from '../state/todo'

const TodoList: React.FC = () => {
  // Todo: filter Todo by filter value
  const filteredTodos = useRecoilValue(todoState)
  const itemList = filteredTodos.map((todo: Todo) => {
    return {
      key: todo.id,
      isChecked: todo.status === 'complete',
      text: todo.text
    }
  })
  return <List items={itemList} />
}

export { TodoList }
