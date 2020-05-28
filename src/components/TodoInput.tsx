import React from 'react'

const TodoInput = (): JSX.Element => {
  return (
    <div className="flex">
      <div className="w-8 h-8 mr-2 hover:bg-gray-400 flex items-center justify-center">
        <div>❯</div>
      </div>
      <input type="text" placeholder="add new Todo!" />
    </div>
  )
}

export { TodoInput }
