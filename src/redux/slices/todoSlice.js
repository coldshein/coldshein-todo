import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    },
    reducers:{
        addTodo: (state, action) => {
            let now = new Date().toLocaleTimeString().slice(0,-3); // 11:02  
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
                time: now,
            })
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

export const { addTodo, removeTodo,toggleTodo } = todoSlice.actions

export default todoSlice.reducer