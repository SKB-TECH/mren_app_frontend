import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sender: '',
    recever: '',
    message: [],
    chats: [],
    error: ''
}

const messageSlice = createSlice({
    name: "messages",
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
        addMessage: (state, { payload }) => {
            state.isLoading = false,
                state.isSuccess = true,
                state.message.push(payload),
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
        },
        setChats: (state, { payload }) => {
            state.chats = payload
        },
        getChats: (state, { payload }) => {
            state.chats.push(payload)
        }
    }
})

const { reducer, actions } = messageSlice

export const { messagePeding, getMessage, getChats, setChats, setSender, setRecever, addMessage, messageFailed } = actions

export default reducer;