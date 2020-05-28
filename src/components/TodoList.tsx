import React from 'react'

const TodoItem: React.FC<{}> = () => {
  return (
    <li className="flex items-center">
      <div className="w-8 h-8 mr-2 hover:bg-gray-400 flex items-center justify-center">
        <input type="checkbox" />
      </div>
      <div className="flex-grow">Todo item</div>
      <div className="w-8 h-8 ml-2 hover:bg-gray-400 flex items-center justify-center">
        <button type="button">✗</button>
      </div>
    </li>
  )
}

const TodoList: React.FC<{}> = () => {
  return (
    <ul>
      <TodoItem />
      <TodoItem />
    </ul>
  )
}

export { TodoList }
