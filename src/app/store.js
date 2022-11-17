import { configureStore } from "@reduxjs/toolkit";
import loginSlice from '../pages/login/loginSlice'

const store = configureStore({
    reducer: {
        login: loginSlice
    }
})


export default store