import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) {
            return
        }
        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-gray-600 rounded-l-lg px-3 outline-none duration-150 bg-gray-800 text-gray-200 py-1.5 transition-colors focus:border-gray-500"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-gray-700 text-gray-200 shrink-0 hover:bg-gray-600 transition-colors duration-300">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

