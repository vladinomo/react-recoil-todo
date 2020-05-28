import React from 'react'

type InputProps = {
  value: string
  placeholder: string
  onChangeValue: (value: string) => void
  onEnter: () => void
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeValue,
  onEnter,
  placeholder
}) => {
  return (
    <div className="flex">
      <div className="w-8 h-8 mr-2 hover:bg-gray-400 flex items-center justify-center">
        <div>❯</div>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          onChangeValue(e.target.value)
        }
        onKeyPress={(e): void => {
          if (e.key === 'Enter') {
            e.preventDefault()
            onEnter()
          }
        }}
        placeholder={placeholder}
      />
    </div>
  )
}

export { Input }
