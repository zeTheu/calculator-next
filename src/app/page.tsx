'use client'
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState('')
  const [expression, setExpression] = useState('')

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression).toString()
        setResult(evalResult)
        setExpression(evalResult)
      } catch (error) {
        setResult('Error')
      }
    } else if (value === 'C') {
      setResult('')
      setExpression('')
    } else {
      setExpression((prevExpression) => prevExpression + value)
    }
  }

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ]

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>
      <div className="bg-zinc-500 p-6 rounded-lg shadow-lg">
        <input 
          type="text" 
          className="text-right w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none" 
          value={expression}
          readOnly
        />
        <input type="text" className="text-right w-full text-4xl font-bold mb-4 focus:outline" value={result} readOnly />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)} className="text-4xl bg-gray-300 hover:bg-gray-400 p-2 rounded-lg" >{btn}</button>
          ))}
        </div>
      </div>
    </main>
  );
}
