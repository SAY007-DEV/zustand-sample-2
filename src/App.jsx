import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './compents/Counter1'
import Counter2 from './compents/Counter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter1/>
      <Counter2/>
    </>
  )
}

export default App
