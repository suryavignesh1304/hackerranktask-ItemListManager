import React, { useState } from 'react'

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()])
      setInputValue('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Item List Manager</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter an item"
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </div>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App