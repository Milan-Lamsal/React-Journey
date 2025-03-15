import { useState, useEffect } from 'react'
import { TodoProvider } from './Contexts'
import './App.css'
import { TodoForm, TodoItem } from './Components'

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
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  //  whenever you are in react or if you are not doing Server Site Rendering, then you can directly access local storage 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) // all these value will be in JSON =>[{},{}] if you don't do JSON parse then all the value will be in String 
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) // In setItem we need to give key and value , changing into Stiring by using Stringify 

  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}>
      <div className="bg-gray-900 min-h-screen py-8 transition-colors duration-300">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-gray-200 bg-gray-800">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
