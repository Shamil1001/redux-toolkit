import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todSlice'

export default configureStore({
    reducer: {
        todos: todoReducer
    }
})