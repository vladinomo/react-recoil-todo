import React from 'react'

type ItemProps = {
  key: string
  isChecked: boolean
  text: string
}

type ListProps = {
  items: ItemProps[]
}

const Item: React.FC<ItemProps> = ({ isChecked, text }) => {
  return (
    <li className="flex items-center">
      <div className="w-8 h-8 mr-2 hover:bg-gray-400 flex items-center justify-center">
        <input type="checkbox" checked={isChecked} />
      </div>
      <div className="flex-grow">{text}</div>
      <div className="w-8 h-8 ml-2 hover:bg-gray-400 flex items-center justify-center">
        <button type="button">✗</button>
      </div>
    </li>
  )
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <Item key={item.key} isChecked={item.isChecked} text={item.text} />
        )
      })}
    </ul>
  )
}

export { List }
