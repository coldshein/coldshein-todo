import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    },
    reducers:{
        setTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
           state.todos =  state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const toggledTodo = state.todos.find((todo) => todo.id === action.payload)
            toggledTodo.completed = !toggledTodo.completed;
        }
    }
})

export const { setTodo, removeTodo,toggleTodo } = todoSlice.actions

export default todoSlice.reducer