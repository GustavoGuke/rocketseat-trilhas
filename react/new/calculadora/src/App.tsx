import { useState } from 'react'
import { useHistoryContext } from './context/useHistoryContext'
import './index.css'
import { Text } from './components/Text'
import { Button } from './components/Button'

function App() {
  const {history, addHistory} = useHistoryContext()
  console.log(history); 
  const [count, setCount] = useState('')
  const [result, setResult] = useState("")
  const buttons = [
    [
      { input: "CE" },
      { input: "C", className: "flex-1 h-16" },
      { input: "/", variant: "secondary" }
    ],
    [
      { input: "7" },
      { input: "8" },
      { input: "9" },
      { input: "*", variant: "secondary" },
    ],
    [
      { input: "4" },
      { input: "5" },
      { input: "6" },
      { input: "-", variant: "secondary" },
    ],
    [
      { input: "1" },
      { input: "2" },
      { input: "3" },
      { input: "+",  variant: "secondary" },
    ],
    [
      { input: "0", className: "flex-1 h-16", variant: "primary" },
      { input: "," },
      { input: "=", className: "w-16 h-16 bg-[#7f45e2]", variant: "secondary" },
    ]
  ]

  function calculate(input) {
    
    if (input === "=") {
      setResult(eval(count))
      if (result !== "") {
        addHistory(result)
        setResult("")
        setCount("")
      }
    } else if (input === "CE") {
      setCount("")
    } else if (input === "C") {
      setCount(count.slice(0, -1))
    } else {
      setCount(count + input)
    }
  }

  return (
    <main className='px-4 py-28'>
      <Text variant='muted'>Calculadora</Text>
      <div className='flex flex-col gap-4 mt-4'>
        {
          buttons.map((row, index) => (
            <div key={`row-${index}`} className={`flex gap-4`}>
              {
                row.map((button) => (
                  <Button 
                    onClick={() => calculate(button.input)} 
                    key={`button-${index}`} 
                    variant={button.variant} >{button.input}</Button>
                ))
              }

            </div>
          ))
        }
      </div>
      <Text variant='blast'>{count}</Text>
      <Text variant='blast'>= {result}</Text>
      <div>

      <Text variant='muted' >Historico =</Text>
      {
        history.map((item, index) => (
          <Text key={index}>{item} -</Text>
        ))
      }
      </div>
   
    </main>
  )
}

export default App
