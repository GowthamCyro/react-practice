import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name : "Gowtham",
    age : "20"
  }


  return (
    <>
      <h1 class='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind project </h1>
      <Card username = "Gowtham"/>
      <Card username= "Mythili" btnText="click me" obj = {myObj}/>
    </>
  )
}

export default App
