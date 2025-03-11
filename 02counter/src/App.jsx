import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// HOOKS 
function App() {
  let [counter, setCounter]=useState(0) // usState (takes one default value can be varibale, boolean, array, object ane it store in one varibale , where two vlaue are set one counter and setCounter where setCounter controls the counter) -> setCounter is method 
//  let counter = 15;

 const addValue = () => {
  // console.log("Vlaue added:", Math.random());
  console.log("Vlaue added:", counter);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  // if(counter >= 0 && counter <10) {
  // // counter = counter+1;
  // setCounter(counter+1);
  // } else{
  //   alert("Counter can't go beyond 10");
  // }
 }
 const decreaseValue =()=>{
  if(counter>0){
  setCounter(counter-1);
  }else{
    alert("Counter can't go negative");
  }
 }

  return (
    <>
     <h1>Second Project</h1>
     <h2>Counter Value:{counter} </h2> 
     <button onClick={addValue} >Increase Value</button>
     <br/><br/>
     <button onClick={decreaseValue}> Decrease Value</button>
    </>
  )
}

export default App
