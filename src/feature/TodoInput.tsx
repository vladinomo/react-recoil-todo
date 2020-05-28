import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { ulid } from 'ulid'

import { Input } from '../components/Input'
import { todoState, Todos } from '../state/todo'

const TodoInput: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('')
  const setTodos = useSetRecoilState(todoState)

  const onChange = (value: string): void => setNewTodo(value)

  const onEnter = (): void => {
    setTodos((todos: Todos) => {
      return [
        ...todos,
        {
          id: ulid(),
          text: newTodo,
          status: 'active',
          createdAt: new Date().getTime()
        }
      ]
    })
    setNewTodo('')
  }

  return (
    <Input
      value={newTodo}
      onChangeValue={onChange}
      onEnter={onEnter}
      placeholder="Add new Todo!"
    />
  )
}

export { TodoInput }
