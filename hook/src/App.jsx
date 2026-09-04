import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './Counter'
import Counter2 from './Counter2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter></Counter>
    <Counter2></Counter2>
    </>
  )
}

export default App
