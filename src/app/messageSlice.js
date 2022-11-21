import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoading: false,
    isSuccess: false,
    sender: '',
    recever: '',
    message: [],
    error: ''
}
const messageSlice = createSlice({
    name: "message",
    initialState,

    reducers: {
        messagePeding: (state) => {
            state.isLoading = true
        },
        getMessage: (state, action) => {
            state.isLoading = false,
                state.isSuccess = true,
                state.message = action.payload,
                state.error = ''
        },
        setMessage: (state, { payload }) => {
            state.isLoading = false,
                state.isSuccess = true,
                state.message = payload,
                state.error = ''
        },
        messageFailed: (state, { payload }) => {
            state.isLoading = false,
                state.error = payload
        },
        setSender: (state, { payload }) => {
            state.sender = payload
        },
        setRecever: (state, { payload }) => {
            state.recever = payload
        }
    }
})

const { reducer, actions } = messageSlice

export const { messagePeding, getMessage, setSender, setRecever, setMessage, messageFailed } = actions

export default reducer;