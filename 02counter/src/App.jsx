import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  const addValue = () => {
    if(counter<20){
      setCounter(counter+1)
    }
  }

  const remValue = () => {
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      < button onClick={addValue} >Increment {counter}</button>
      < button onClick={remValue} >Decrement {counter}</button>
    </>
  )
}

export default App
