import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("App being rendered", Math.random()) // prints two times because its on strict mode in main.jsx only in development but it won't happen in production [first time -> No rerender ]

  // const [value, setValue] = useState(1)
  const [value, setValue] = useState({
    value: 0,
  })

  const clickMe = () => {
    console.log("logeed");
    // setValue(value + 1) // now we used setValue so it will re render 
    // setValue(1); // it will not rerender cus if the useState value and setValue is same it will not rerender[second time-> No rerender ]
    // setValue(3);// it will render cus useState is 1 and we have given value 3 [third time-> it will rerender only 3 times as useState value and setValue is 1 and 3 which is different so]
    setValue({
      value: 0, // forth time -> It will re-render (as object and Array you are playing with memory like passby value and passbyrefrence so becaues of which the passbyrefrence will always re-render )
    }

    )
  }

  // useEffect(()=>{

  // },[value.value]) if only the value .value is change then only rerender 

  return (
    <>
      <h1>Question 2: When will the code render or not  This is acutally the test of datatypes from js passbyvalue and passby reference </h1>
      {/* <h2>Main value:{value}</h2> */}
      <h2>Main value:{value.value}</h2>
      <button
        onClick={clickMe}
      >click me </button>
    </>

  )
}

export default App
