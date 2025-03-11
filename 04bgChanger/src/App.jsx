import { useState } from "react"


function App() {
  //  color changing so need to store in variable and need to display in UI then we use State
  const [color, setColor] = useState("olive") // default colors 
  // const [stateVariable, setStateFunction] = useState(initialValue);


  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-cetner gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl ">
          <button
            // why should we use onClick={()=>setColor("red")}? -> see the notes 
            // onClick ={setColor}?why can't we use this one 
            onClick={() => setColor("red")}
            // onClick={setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Red" }}
          > Red</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Blue" }}
          > Blue</button>
          <button
            onClick={() => setColor("Brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Brown" }}
          > Brown </button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Olive" }}
          > Olive</button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Purple" }}
          > Purple</button>
          <button
            onClick={() => setColor("cyan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "cyan" }}
          > cyan</button>
          <button
            onClick={() => setColor("White")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "White" }}
          > White</button>
          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Black" }}
          > Black</button>
          <button
            onClick={() => setColor("Orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Orange" }}
          > Orange</button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Yellow" }}
          > Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
