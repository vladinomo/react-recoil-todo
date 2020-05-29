import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'

import { List } from '../components/List'
import { todoState, Todo, Todos } from '../state/todo'
import { todofilterState, TodoFilter } from '../state/filter'

const getFilteredTodos = (todos: Todos, filter: TodoFilter): Todos => {
  switch (filter) {
    case 'completed':
      return todos.filter(todo => todo.status === 'complete')
    case 'active':
      return todos.filter(todo => todo.status === 'active')
    case 'all':
      return todos
    default:
      return todos
  }
}

const TodoList: React.FC = () => {
  const filter = useRecoilValue(todofilterState)
  const allTodos = useRecoilValue(todoState)
  const filteredTodos: Todos = getFilteredTodos(allTodos, filter)
  const setTodos = useSetRecoilState(todoState)

  const todosSortedByCreated = [...filteredTodos].sort((a: Todo, b: Todo) => {
    if (a.createdAt > b.createdAt) return 1
    if (a.createdAt < b.createdAt) return -1
    return 0
  })
  const itemList = todosSortedByCreated.map((todo: Todo) => {
    return {
      key: todo.id,
      isChecked: todo.status === 'complete',
      text: todo.text
    }
  })

  const onTodoChecked = (id: string): void => {
    setTodos((todos: Todos) => {
      const selectedTodo = todos.find(todo => todo.id === id)
      if (!selectedTodo) {
        return todos
      }
      const editedTodo = {
        ...selectedTodo,
        status:
          selectedTodo.status === 'active'
            ? ('complete' as Todo['status'])
            : ('active' as Todo['status'])
      }
      const newTodos: Todos = [
        ...todos.filter(todo => todo.id !== id),
        editedTodo
      ]
      return newTodos
    })
  }

  const deleteTodo = (id: string): void => {
    setTodos((todos: Todos) => {
      const newTodos = todos.filter(todo => todo.id !== id)
      return newTodos
    })
  }

  return (
    <List
      items={itemList}
      onItemCheck={onTodoChecked}
      onClickItemButton={deleteTodo}
    />
  )
}

export { TodoList }
