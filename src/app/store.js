import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice'
import messageSlice from './messageSlice'
import users from './users'


const store = configureStore({
    reducer: {
        login: loginSlice,
        messages: messageSlice,
        users: users,
    }
})


export default store