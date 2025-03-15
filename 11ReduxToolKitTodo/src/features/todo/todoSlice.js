import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid -> generate unique id 

const initialState = {
    todos: [{ id: 1, text: "Hello Redux" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { // reducer get property and function 
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload // payload is an object
            }
            state.todos.push(todo)
        }, // you get the access of two things state and action
        removeTodo: (state, action) => { // state-> current state and data
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;