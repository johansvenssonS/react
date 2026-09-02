import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hello from './Hello.jsx'
import Btn from './Btn.jsx'
import SquareSection from './SquareSection.jsx'

function App() {
  
  return (
    <>
      <Btn />
      <Hello name="Johan" age={30} />
      <SquareSection amount={5} color="red" size="300px" />
    </>
  )
}

export default App
