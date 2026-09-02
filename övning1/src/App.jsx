import { useState } from 'react'
import './App.css'
import Number from './Number'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)


  

  return (
    <div>
     <Number number={count}></Number>
     <Counter number={count} setCount={setCount}></Counter>

    </div>
    
  )
}

export default App
