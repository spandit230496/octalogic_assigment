import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Steps from '../src/pages/Step'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Steps/>
    </>
  )
}

export default App
