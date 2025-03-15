import { useState } from 'react'
import { TodoProvider } from './Contexts'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]) // here todos is array
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]) // ...prev is like destructure 
  }

  // update Todo
  const updatedTodo = (id, todo) => {
    // as todo is in array so 
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

    // ++++++++++++++++++++++++++++++++ OR  ++++++++++++++++++++++++++++++++++++
    // prev.map((eachVal)=>{
    //   if(eachVal.id===id){
    //     todo
    //   }else{
    //     prevTodo
    //   }
    // })

  }

  // DeleteTodo, in delete map isn't the good choice for the loop becuase, need new array- > which doesn't have the same id with others 

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  return (
    <TodoProvider value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider >

  )
}

export default App
