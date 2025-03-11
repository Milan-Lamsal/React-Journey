import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const myObj={
    name: "John",
    age: 20,
    city: "New York"
  }
  const myArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName="Milan" btnText="click ME " />
      <Card userName="Deabl" />
     
      
    </>
  )
}

export default App
