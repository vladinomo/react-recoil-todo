import React from 'react'

type ItemProps = {
  key: string
  isChecked: boolean
  text: string
  onChangeCheck?: () => void
}

type ListProps = {
  items: ItemProps[]
  onItemCheck?: (key: string) => void
}

const Item: React.FC<ItemProps> = ({ isChecked, text, onChangeCheck }) => {
  return (
    <li className="flex items-center">
      <div className="w-8 h-8 mr-2 hover:bg-gray-400 flex items-center justify-center">
        <input type="checkbox" checked={isChecked} onChange={onChangeCheck} />
      </div>
      <div className="flex-grow">{text}</div>
      <div className="w-8 h-8 ml-2 hover:bg-gray-400 flex items-center justify-center">
        <button type="button">✗</button>
      </div>
    </li>
  )
}

const List: React.FC<ListProps> = ({ items, onItemCheck }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <Item
            key={item.key}
            isChecked={item.isChecked}
            text={item.text}
            onChangeCheck={(): void => onItemCheck && onItemCheck(item.key)}
          />
        )
      })}
    </ul>
  )
}

export { List }
