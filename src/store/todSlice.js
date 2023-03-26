import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers:{
        addItem(state, action){
            console.log(state)
            console.log(action)

            state.todos.push({
                id: new Date().toISOString(),
          text: action.payload,
          completed: false

            }
            )

        },
        removeItem(state, action){
            state.todos=state.todos.filter(todo=> todo.id!==action.payload.id)
        },
        handleCheck(state, action){
            const toggleTodo=state.todos.find(todo=> todo.id===action.payload.id)
            toggleTodo.completed=!toggleTodo.completed
        }
    }
})

export const {addItem, removeItem, handleCheck}=todoSlice.actions

export default todoSlice.reducer