import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoading: false,
    isAuth: false,
    users: [] || localStorage.getItem('user'),
    error: ''
}
const loginSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        loginPeding: (state) => {
            state.isLoading = true
        },

        loginSuccess: (state, action) => {
            state.isLoading = false,
                state.isAuth = true,
                state.users = action.payload,
                state.error = ''
        },
        loginFailed: (state, { payload }) => {
            state.isLoading = false,
                state.error = payload
        }
    }
})

const { reducer, actions } = loginSlice

export const { loginPeding, loginSuccess, loginFailed } = actions

export default reducer;