import { createSlice } from "@reduxjs/toolkit";
import socketClient from 'socket.io-client'

const initialState = {
    socket: socketClient('http://localhost:8800'),
}
const socketSlice = createSlice({
    name: "sockets",
    initialState,

    reducers: {
        getSocket: (state, { payload }) => {
            state.socket = payload
        },

    }
})

const { reducer, actions } = socketSlice

export const { getSocket } = actions

export default reducer;