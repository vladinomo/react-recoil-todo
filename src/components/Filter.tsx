import React from 'react'

type SelectOption = {
  text: string
  value: string
}

type FilterProps = {
  leftText: string
  selectOptions: SelectOption[]
  selectedValue: string
  buttonText: string
  onClickButton: () => void
  onChangeSelect: (event: React.FormEvent<HTMLSelectElement>) => void
}

const Filter: React.FC<FilterProps> = ({
  leftText,
  selectOptions,
  selectedValue,
  buttonText,
  onClickButton,
  onChangeSelect
}) => {
  return (
    <div className="flex justify-between items-center p-2">
      <span className="text-gray-600 .text-xs">{leftText}</span>
      <select
        className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
        value={selectedValue}
        onChange={onChangeSelect}
      >
        {selectOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 .text-xs"
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </div>
  )
}

export { Filter }
