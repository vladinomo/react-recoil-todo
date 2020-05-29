import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'

import { List } from '../components/List'
import { todoState, Todo, Todos } from '../state/todo'

const TodoList: React.FC = () => {
  // Todo: filter Todo by filter value
  const filteredTodos: Todos = useRecoilValue(todoState)
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
