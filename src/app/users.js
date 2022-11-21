import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoading: false,
    users: [],
    recever: '',
    error: ''
}
const getUserSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        getPeding: (state) => {
            state.isLoading = true
        },

        getUsers: (state, { payload }) => {
            state.isLoading = false,
                state.users = payload,
                state.error = ''
        },
        getFailed: (state, { payload }) => {
            state.isLoading = false,
                state.error = payload
        }
    }
})

const { reducer, actions } = getUserSlice

export const { getPeding, getUsers, getFailed } = actions

export default reducer;