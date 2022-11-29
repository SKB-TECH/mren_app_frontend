import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice'
import messageSlice from './messageSlice'
import users from './users'
import socketSlice from "./socket";

const store = configureStore({
    reducer: {
        login: loginSlice,
        messages: messageSlice,
        users: users,
        socket: socketSlice
    }
})


export default store