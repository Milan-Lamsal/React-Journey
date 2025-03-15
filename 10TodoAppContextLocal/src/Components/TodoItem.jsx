import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext'

function TodoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-gray-600 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-gray-700 duration-300 transform transition-all hover:scale-105 text-gray-200 ${todo.completed ? "bg-gray-700" : "bg-gray-800"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-gray-600 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-600 justify-center items-center bg-gray-700 hover:bg-gray-600 shrink-0 disabled:opacity-50 transition-colors duration-300"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "🖊️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-600 justify-center items-center bg-gray-700 hover:bg-red-500 shrink-0 transition-colors duration-300"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
