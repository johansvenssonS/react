import { useState } from 'react'
import './App.css'
import ControllCount from './ControllCount'
import DisplayCount from './DisplayCount'

function App() {
  const [count, setCount] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  

  return (
    <div>
     <DisplayCount number={count}></DisplayCount>
     <ControllCount 
      number={count}
      setCount={setCount} 
      showSuccess={showSuccess} 
      setShowSuccess={setShowSuccess}>
      </ControllCount>
    </div>
    
  )
}


export default App
