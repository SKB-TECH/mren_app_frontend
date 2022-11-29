import { useRef, useState, useContext } from 'react';
import React from 'react';
import { RiEmotionUnhappyLine, RiSendPlaneFill } from "react-icons/ri"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, getChats } from '../../../app/messageSlice';
import { StateContext } from '../../../Context/contextApi'

const Forms = () => {

    const { contenu, setContenu } = useContext(StateContext)
    const [msg, setMsg] = useState()
    const [msg2, setMsg2] = useState([])
    const dispatch = useDispatch()

    const recever = useSelector(state => state.messages.recever) || localStorage.getItem('recever')
    const sender = useSelector(state => state.messages.sender) || localStorage.getItem('sender')
    const socket = useSelector(state => state.socket.socket)

    const sendMessage = (e) => {
        e.preventDefault()
        socket.emit('new', {
            sender,
            msg,
            recever
        })
        setMsg("")
    }

    socket.on('msgsend', (data) => {
        dispatch(getChats(data))
        // setContenu(...contenu, contenu)
    })

    return (
        <div className='flex bg-white border-1  w-[100vw]'>
            <form className="w-[100%] flex justify-between" method='POST' onSubmit={sendMessage} >
                <div className="flex items-center py-2 px-3 gap-2 bg-gray-50 rounded-lg dark:bg-gray-700 w-[100vw] p-5">
                    <RiEmotionUnhappyLine className='text-4xl text-blue-500 mt-2 ml-3' />
                    <input id="chat" rows="1" className="block mr-4 p-2.5 w-[60%] text-sm text-gray-900 bg-white rounded-lg border focus:border-blue-500  dark:focus:border-blue-500 outline-none" placeholder="Your message..." value={msg} onChange={(e) => setMsg(e.target.value)}></input>
                    <button type="submit">
                        <RiSendPlaneFill className='text-4xl text-blue-500 mt-2' />
                    </button>
                </div>
            </form>

        </div>
    );
};

export default React.memo(Forms);