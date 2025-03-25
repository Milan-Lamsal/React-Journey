import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  // const [multiplyValue, setmultiplyValue] = useState(1)

  // WITHOUT USING TWO STATE 
  const multiplyValue = value * 2

  const multiplybytwo = () => {
    // setmultiplyValue(value * 2);
    setValue(value + 1);
  }

  return (
    <>
      <h1>Main Value:{value} </h1>
      <button
        onClick={multiplybytwo}
      >Click to multiply by 2 </button>

      <h2>Multiplied Value:{multiplyValue} </h2>
    </>
  )
}

export default App
