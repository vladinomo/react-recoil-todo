import React from 'react'

const TodoFilter: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <span className="text-gray-600 .text-xs">0 item left</span>
      <select
        className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
      >
        <option>All</option>
        <option>Active</option>
        <option>Completed</option>
      </select>
      <button
        type="button"
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 .text-xs"
      >
        Clear Completed
      </button>
    </div>
  )
}

export { TodoFilter }
