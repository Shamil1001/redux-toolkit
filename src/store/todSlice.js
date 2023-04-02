import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos=createAsyncThunk(
    'todos/fetchTodos',
    async function (){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        return response.data
    }

    
)

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
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action)=>{
            state.status='loading'
            state.error=null
        },
        [fetchTodos.fulfilled]: (state,action)=>{
            state.status='resolved'
            state.todos=action.payload
        },
        [fetchTodos.rejected]: (state)=>{

        }
    }
})

export const {addItem, removeItem, handleCheck}=todoSlice.actions

export default todoSlice.reducer